/**
 * Calc.isLinux.com 国际化模块
 */
const i18n = {
    currentLang: 'zh',
    supportedLangs: ['zh', 'en'],
    translations: {
        zh: {
            'page-title': '开发者计算器 | isLinux - 金融/效率计算工具',
            'page-desc': '专为开发者设计的计算器工具，包含时薪换算、房贷计算、汇率转换、投资收益等实用功能。',
            'logo': '💰 Calc.isLinux.com',
            'tagline': '开发者金融/效率计算器',
            'back-home': '← 返回主站',
            'tab-hourly': '时薪换算',
            'tab-mortgage': '房贷计算',
            'tab-currency': '汇率转换',
            'tab-investment': '投资收益',
            'tab-freelance': '自由职业报价',
            'related-articles': '📚 相关文章',
            'footer-text': '© 2026 Calc.isLinux.com',
            'lang-label': '语言',
            'nav-home': '首页',
            'nav-about': '关于',
            'nav-privacy': '隐私'
        },
        en: {
            'page-title': 'Developer Calculator | isLinux - Financial Tools',
            'page-desc': 'Calculator tools for developers: hourly rate, mortgage, currency, investment.',
            'logo': '💰 Calc.isLinux.com',
            'tagline': 'Developer Financial Calculator',
            'back-home': '← Back to Home',
            'tab-hourly': 'Hourly Rate',
            'tab-mortgage': 'Mortgage',
            'tab-currency': 'Currency',
            'tab-investment': 'Investment',
            'tab-freelance': 'Freelance Rate',
            'related-articles': '📚 Related Articles',
            'footer-text': '© 2026 Calc.isLinux.com',
            'lang-label': 'Language',
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-privacy': 'Privacy'
        }
    },
    init() {
        const saved = localStorage.getItem('islinux_lang');
        this.currentLang = (saved && this.supportedLangs.includes(saved)) ? saved :
                           (this.supportedLangs.includes(navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'zh');
        this.apply();
        this.bind();
    },
    apply() {
        const t = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const k = el.getAttribute('data-i18n');
            if (t[k]) el.textContent = t[k];
        });
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        const m = document.querySelector('meta[name="description"]');
        if (m && t['page-desc']) m.setAttribute('content', t['page-desc']);
        const tl = document.querySelector('title');
        if (tl && t['page-title']) tl.textContent = t['page-title'];
        const sw = document.getElementById('lang-switcher');
        if (sw) sw.value = this.currentLang;
    },
    bind() {
        const sw = document.getElementById('lang-switcher');
        if (sw) sw.addEventListener('change', e => {
            this.currentLang = e.target.value;
            this.apply();
            localStorage.setItem('islinux_lang', this.currentLang);
        });
    }
};
document.addEventListener('DOMContentLoaded', () => i18n.init());
