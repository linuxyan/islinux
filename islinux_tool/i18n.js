/**
 * Tool.isLinux.com 国际化模块
 */
const i18n = {
    currentLang: 'zh',
    supportedLangs: ['zh', 'en'],
    translations: {
        zh: {
            'page-title': '开发者工具箱 | isLinux - 纯前端在线工具',
            'page-desc': 'JSON 格式化、代码压缩、加解密工具，纯前端运行，数据不上传服务器，保护您的隐私。',
            'logo': '🛠️ Tool.isLinux.com',
            'tagline': '开发者纯前端工具箱',
            'privacy-badge': '🔒 所有数据处理均在浏览器本地完成，不上传服务器',
            'back-home': '← 返回主站',
            'tool-json-format': 'JSON 格式化',
            'tool-json-format-desc': '格式化、压缩、验证 JSON 数据',
            'tool-json-validate': 'JSON 验证',
            'tool-json-validate-desc': '检查 JSON 格式是否正确',
            'tool-base64': 'Base64 编解码',
            'tool-base64-desc': 'Base64 编码和解码工具',
            'tool-url-encode': 'URL 编解码',
            'tool-url-encode-desc': 'URL Encode 和 Decode',
            'tool-hash': '哈希计算',
            'tool-hash-desc': 'MD5、SHA1、SHA256 计算',
            'tool-diff': '文本对比',
            'tool-diff-desc': '比较两段文本的差异',
            'related-articles': '📚 相关文章',
            'footer-text': '© 2026 Tool.isLinux.com',
            'lang-label': '语言',
            'nav-home': '首页',
            'nav-about': '关于',
            'nav-privacy': '隐私'
        },
        en: {
            'page-title': 'Developer Toolkit | isLinux - Client-side Tools',
            'page-desc': 'JSON formatter, code minifier, encryption tools - all running locally for privacy.',
            'logo': '🛠️ Tool.isLinux.com',
            'tagline': 'Developer Client-side Toolkit',
            'privacy-badge': '🔒 All data processed locally, never uploaded',
            'back-home': '← Back to Home',
            'tool-json-format': 'JSON Format',
            'tool-json-format-desc': 'Format, minify, validate JSON',
            'tool-json-validate': 'JSON Validate',
            'tool-json-validate-desc': 'Check JSON syntax',
            'tool-base64': 'Base64',
            'tool-base64-desc': 'Base64 encode/decode',
            'tool-url-encode': 'URL Encode',
            'tool-url-encode-desc': 'URL encode/decode',
            'tool-hash': 'Hash',
            'tool-hash-desc': 'MD5, SHA1, SHA256',
            'tool-diff': 'Diff',
            'tool-diff-desc': 'Compare text differences',
            'related-articles': '📚 Related Articles',
            'footer-text': '© 2026 Tool.isLinux.com',
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
