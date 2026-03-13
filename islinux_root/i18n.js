/**
 * isLinux 国际化模块
 * 支持语言：中文 (zh)、英文 (en)
 */

const i18n = {
    currentLang: 'zh',
    supportedLangs: ['zh', 'en'],

    translations: {
        zh: {
            'site-title': 'isLinux.com | 开发者全能工具基地',
            'site-desc': 'isLinux 提供 Linux 命令查询、AI 提示词、金融计算及开发者常用工具，助力高效开发。',
            'tagline': '如果它关乎技术，它就在这里。',
            'nav-ai': 'AI 子站',
            'nav-tool': '工具箱',
            'nav-calc': '计算器',
            'nav-articles': '技术文章',
            'sites-nav': '子站导航',
            'site-ai-title': 'AI 提示词库',
            'site-ai-desc': '针对开发者优化的 Prompt 集合，涵盖代码生成、调试、文档编写等场景。',
            'site-tool-title': '开发者工具箱',
            'site-tool-desc': 'JSON 格式化、代码压缩、加解密工具，纯前端运行，数据不上传。',
            'site-calc-title': '财务计算器',
            'site-calc-desc': '房贷、汇率、时薪及投资收益计算，助力自由职业者科学报价。',
            'site-blog-title': '技术博客',
            'site-blog-desc': 'Linux 实战技巧、VPS 测评、AI 提示词工程等原创技术文章。',
            'quick-start': '快速开始',
            'terminal-output1': '# 获取 Linux 命令列表',
            'terminal-output2': '# 克隆工具集合',
            'latest-articles': '最新文章',
            'read-more': '阅读更多',
            'read-time-12': '阅读时长：12 分钟',
            'read-time-15': '阅读时长：15 分钟',
            'read-time-18': '阅读时长：18 分钟',
            'read-time-10': '阅读时长：10 分钟',
            'read-time-14': '阅读时长：14 分钟',
            'footer-text': '所有工具均在客户端本地处理，保护您的隐私。',
            'about': '关于我们',
            'privacy': '隐私政策',
            'contact': '联系我们',
            'lang-label': '语言'
        },
        en: {
            'site-title': 'isLinux.com | Developer All-in-One Toolkit',
            'site-desc': 'isLinux provides Linux command reference, AI prompts, financial calculators, and developer tools.',
            'tagline': 'If it\'s about technology, it\'s here.',
            'nav-ai': 'AI Subsite',
            'nav-tool': 'Tools',
            'nav-calc': 'Calculators',
            'nav-articles': 'Articles',
            'sites-nav': 'Site Navigation',
            'site-ai-title': 'AI Prompt Library',
            'site-ai-desc': 'Curated prompts for developers: code generation, debugging, documentation.',
            'site-tool-title': 'Developer Toolkit',
            'site-tool-desc': 'JSON formatter, code minifier, encryption - all running locally.',
            'site-calc-title': 'Financial Calculator',
            'site-calc-desc': 'Mortgage, currency, hourly rate calculators for freelancers.',
            'site-blog-title': 'Tech Blog',
            'site-blog-desc': 'Linux tutorials, VPS reviews, AI prompt engineering.',
            'quick-start': 'Quick Start',
            'terminal-output1': '# Get Linux command list',
            'terminal-output2': '# Clone toolkit repository',
            'latest-articles': 'Latest Articles',
            'read-more': 'Read More',
            'read-time-12': '12 min read',
            'read-time-15': '15 min read',
            'read-time-18': '18 min read',
            'read-time-10': '10 min read',
            'read-time-14': '14 min read',
            'footer-text': 'All tools run client-side for your privacy.',
            'about': 'About Us',
            'privacy': 'Privacy Policy',
            'contact': 'Contact',
            'lang-label': 'Language'
        }
    },

    init() {
        const savedLang = localStorage.getItem('islinux_lang');
        if (savedLang && this.supportedLangs.includes(savedLang)) {
            this.currentLang = savedLang;
        } else {
            const browserLang = navigator.language.split('-')[0];
            this.currentLang = this.supportedLangs.includes(browserLang) ? browserLang : 'zh';
        }
        this.applyTranslations();
        this.bindLanguageSwitcher();
    },

    applyTranslations() {
        const t = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && t['site-desc']) {
            metaDesc.setAttribute('content', t['site-desc']);
        }

        const titleEl = document.querySelector('title');
        if (titleEl && t['site-title']) {
            titleEl.textContent = t['site-title'];
        }

        const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.value = this.currentLang;
        }
    },

    bindLanguageSwitcher() {
        const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.addEventListener('change', (e) => {
                this.currentLang = e.target.value;
                this.applyTranslations();
                localStorage.setItem('islinux_lang', this.currentLang);
            });
        }
    },

    t(key) {
        return this.translations[this.currentLang][key] || key;
    }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
