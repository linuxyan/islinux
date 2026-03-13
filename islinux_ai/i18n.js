/**
 * AI.isLinux.com 国际化模块
 */
const i18n = {
    currentLang: 'zh',
    supportedLangs: ['zh', 'en'],
    translations: {
        zh: {
            'page-title': 'AI Prompts | isLinux - 开发者专用提示词库',
            'page-desc': '专为开发者打造的 AI 提示词库，涵盖代码生成、调试、文档编写、Shell 脚本等场景。',
            'logo': '🤖 AI.isLinux.com',
            'tagline': '开发者专用 AI 提示词库',
            'back-home': '← 返回主站',
            'search-placeholder': '搜索提示词...',
            'cat-all': '全部',
            'cat-shell': 'Shell 脚本',
            'cat-code': '代码生成',
            'cat-debug': '调试',
            'cat-doc': '文档',
            'cat-sql': 'SQL',
            'cat-git': 'Git',
            'copy-btn': '📋 复制提示词',
            'copy-success': '✅ 已复制到剪贴板',
            'related-articles': '📚 相关文章',
            'footer-text': '© 2026 AI.isLinux.com',
            'lang-label': '语言',
            'nav-home': '首页',
            'nav-about': '关于',
            'nav-privacy': '隐私'
        },
        en: {
            'page-title': 'AI Prompts | isLinux - Developer Prompt Library',
            'page-desc': 'AI prompt library for developers: code generation, debugging, documentation, Shell scripts.',
            'logo': '🤖 AI.isLinux.com',
            'tagline': 'Developer AI Prompt Library',
            'back-home': '← Back to Home',
            'search-placeholder': 'Search prompts...',
            'cat-all': 'All',
            'cat-shell': 'Shell',
            'cat-code': 'Code',
            'cat-debug': 'Debug',
            'cat-doc': 'Docs',
            'cat-sql': 'SQL',
            'cat-git': 'Git',
            'copy-btn': '📋 Copy',
            'copy-success': '✅ Copied!',
            'related-articles': '📚 Related Articles',
            'footer-text': '© 2026 AI.isLinux.com',
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
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const k = el.getAttribute('data-i18n-placeholder');
            if (t[k]) el.placeholder = t[k];
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
