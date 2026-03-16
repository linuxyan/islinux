// Discover More - Random tool recommendations
(function() {
    const tools = [
        { href: 'json-format.html', icon: '📝', title: 'JSON Formatter', description: 'Format, minify, and validate JSON with customizable indentation.' },
        { href: 'json-validate.html', icon: '✅', title: 'JSON Validator', description: 'Check JSON syntax and validate your JSON data.' },
        { href: 'base64.html', icon: '🔐', title: 'Base64 Encoder/Decoder', description: 'Encode text to Base64 or decode Base64 back to text.' },
        { href: 'url-encode.html', icon: '🔗', title: 'URL Encoder/Decoder', description: 'Encode or decode URL-encoded strings.' },
        { href: 'hash.html', icon: '🔑', title: 'Hash Calculator', description: 'Calculate MD5, SHA1, SHA256 hashes for any text.' },
        { href: 'diff.html', icon: '📊', title: 'Text Diff', description: 'Compare two texts and find the differences line by line.' },
        { href: 'favicon-generator.html', icon: '🎨', title: 'Favicon Generator', description: 'Generate favicon.ico and PNG icons from text with customizable styles.' }
    ];

    function renderDiscoverMore() {
        const grid = document.getElementById('discover-grid');
        if (!grid) return;

        const currentPage = window.location.pathname;
        const otherTools = tools.filter(tool => !currentPage.includes(tool.href));
        const shuffled = otherTools.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        grid.innerHTML = selected.map(tool => `
            <a href="${tool.href}" class="discover-card">
                <div class="discover-icon">${tool.icon}</div>
                <h3 class="discover-title-card">${tool.title}</h3>
                <p class="discover-description">${tool.description}</p>
            </a>
        `).join('');
    }

    // Auto-render when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderDiscoverMore);
    } else {
        renderDiscoverMore();
    }
})();
