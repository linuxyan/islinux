// Discover More - Random tool recommendations and tool guide
(function() {
    const tools = [
        { href: '/json-format.html', icon: '📝', title: 'JSON Formatter', description: 'Format, minify, and validate JSON with customizable indentation.' },
        { href: '/json-validate.html', icon: '✅', title: 'JSON Validator', description: 'Check JSON syntax and validate your JSON data.' },
        { href: '/base64.html', icon: '🔐', title: 'Base64 Encoder/Decoder', description: 'Encode text to Base64 or decode Base64 back to text.' },
        { href: '/url-encode.html', icon: '🔗', title: 'URL Encoder/Decoder', description: 'Encode or decode URL-encoded strings.' },
        { href: '/hash.html', icon: '🔑', title: 'Hash Calculator', description: 'Calculate MD5, SHA1, SHA256 hashes for any text.' },
        { href: '/diff.html', icon: '📊', title: 'Text Diff', description: 'Compare two texts and find the differences line by line.' },
        { href: '/favicon-generator.html', icon: '🎨', title: 'Favicon Generator', description: 'Generate favicon.ico and PNG icons from text with customizable styles.' },
        { href: '/terminal-config-generator.html', icon: '⌨️', title: 'Terminal Config Generator', description: 'Generate modern terminal config with Starship, Zoxide, Eza, and Bat.' }
    ];

    const articles = [
        { href: '/articles/json-privacy-guide.html', icon: '🔒', title: 'JSON Privacy Guide', description: 'Protect sensitive data by using local JSON processing tools.' },
        { href: '/articles/json-validation-tips.html', icon: '✅', title: 'JSON Validation Tips', description: 'Common JSON errors and how to avoid them.' },
        { href: '/articles/base64-encoding-guide.html', icon: '🔐', title: 'Base64 Encoding Guide', description: 'Learn how Base64 encoding works and when to use it.' },
        { href: '/articles/url-encoding-guide.html', icon: '🔗', title: 'URL Encoding Guide', description: 'Understanding percent-encoding for URLs.' },
        { href: '/articles/hash-functions-guide.html', icon: '🔑', title: 'Hash Functions Guide', description: 'MD5, SHA1, SHA256 comparison and use cases.' },
        { href: '/articles/diff-tool-guide.html', icon: '📊', title: 'Diff Tool Guide', description: 'How to compare text and code using diff.' },
        { href: '/articles/favicon-best-practices.html', icon: '🎨', title: 'Favicon Best Practices', description: 'Create professional favicons for your website.' }
    ];

    const toolGuides = {
        '/json-format.html': {
            title: 'How to Use JSON Formatter',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Paste your JSON into the input area</li>
                    <li>Select indentation (2 spaces, 4 spaces, or Tab)</li>
                    <li>Click "Format" to beautify or "Minify" to compress</li>
                    <li>Click "Copy" to copy the formatted result</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Common JSON errors:</p>
                <ul>
                    <li>Trailing commas are not allowed: <code>{"name": "test",}</code> ❌</li>
                    <li>Use double quotes, not single quotes: <code>{'name': 'test'}</code> ❌</li>
                </ul>
            `
        },
        '/json-validate.html': {
            title: 'How to Validate JSON',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Paste your JSON into the input area</li>
                    <li>The validator will automatically check syntax</li>
                    <li>Green checkmark means valid JSON</li>
                    <li>Red error message shows the issue</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>JSON validation catches:</p>
                <ul>
                    <li>Syntax errors (missing quotes, commas, brackets)</li>
                    <li>Invalid characters</li>
                    <li>Mismatched brackets</li>
                </ul>
            `
        },
        '/base64.html': {
            title: 'How to Use Base64 Encoder/Decoder',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li><strong>Encode:</strong> Enter text and click "Encode"</li>
                    <li><strong>Decode:</strong> Enter Base64 string and click "Decode"</li>
                    <li>Auto-detect mode automatically identifies Base64 input</li>
                </ul>
                <h3>💡 Example</h3>
                <div class="code-wrapper">
                    <pre><code>Text:    Hello, World!
Base64:  SGVsbG8sIFdvcmxkIQ==</code></pre>
                </div>
            `
        },
        '/url-encode.html': {
            title: 'How to Use URL Encoder/Decoder',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li><strong>Encode:</strong> Enter text or URL and click "Encode"</li>
                    <li><strong>Decode:</strong> Enter encoded string and click "Decode"</li>
                </ul>
                <h3>💡 Example</h3>
                <div class="code-wrapper">
                    <pre><code>Text:    Hello World! How are you?
Encoded: Hello%20World!%20How%20are%20you?</code></pre>
                </div>
            `
        },
        '/hash.html': {
            title: 'How to Use Hash Calculator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter text to hash</li>
                    <li>Select algorithm (MD5, SHA1, SHA256)</li>
                    <li>Click "Calculate" to generate hash</li>
                    <li>Click "Copy" to copy the hash value</li>
                </ul>
                <h3>💡 Hash Comparison</h3>
                <ul>
                    <li><strong>MD5:</strong> 32 characters, fast but less secure</li>
                    <li><strong>SHA1:</strong> 40 characters, better security</li>
                    <li><strong>SHA256:</strong> 64 characters, most secure</li>
                </ul>
            `
        },
        '/diff.html': {
            title: 'How to Use Text Diff Tool',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Paste original text in "Original" area</li>
                    <li>Paste modified text in "Modified" area</li>
                    <li>Click "Compare" to see differences</li>
                    <li>Red lines = removed, Green lines = added</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Use diff tool for:</p>
                <ul>
                    <li>Comparing code versions</li>
                    <li>Reviewing text changes</li>
                    <li>Checking configuration differences</li>
                </ul>
            `
        },
        '/favicon-generator.html': {
            title: 'How to Use Favicon Generator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter 1-2 characters for your icon</li>
                    <li>Choose background shape (Square, Rounded, Circle)</li>
                    <li>Select font family and size</li>
                    <li>Pick colors from the palette</li>
                    <li>Download as ZIP (all sizes) or individual PNG</li>
                </ul>
                <h3>💡 Icon Sizes</h3>
                <ul>
                    <li><strong>16×16:</strong> Browser tab favicon</li>
                    <li><strong>32×32:</strong> Standard desktop favicon</li>
                    <li><strong>48×48:</strong> Larger icons for apps</li>
                </ul>
            `
        },
        '/terminal-config-generator.html': {
            title: 'How to Use Terminal Config Generator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Select your shell (Zsh, Bash, or Fish)</li>
                    <li>Choose components to include (Starship, Zoxide, Eza, Bat, etc.)</li>
                    <li>Click "Copy" to copy the generated config</li>
                    <li>Paste into your ~/.zshrc or ~/.bashrc</li>
                    <li>Run "source ~/.zshrc" to apply changes</li>
                </ul>
                <h3>💡 Components</h3>
                <ul>
                    <li><strong>Starship:</strong> Fast, customizable cross-shell prompt</li>
                    <li><strong>Zoxide:</strong> Smart cd command with fuzzy search</li>
                    <li><strong>Eza:</strong> Modern ls with icons and colors</li>
                    <li><strong>Bat:</strong> Cat with syntax highlighting</li>
                    <li><strong>FZF:</strong> Fuzzy finder for files and history</li>
                    <li><strong>Tmux:</strong> Terminal multiplexer basics</li>
                </ul>
            `
        }
    };

    function renderDiscoverMore() {
        const grid = document.getElementById('discover-grid');
        if (!grid) return;

        const currentPage = window.location.pathname;
        const otherTools = tools.filter(tool => !currentPage.includes(tool.href));
        const shuffled = otherTools.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);

        grid.innerHTML = selected.map(tool => `
            <a href="${tool.href}" class="discover-card">
                <div class="discover-icon">${tool.icon}</div>
                <h3 class="discover-title-card">${tool.title}</h3>
                <p class="discover-description">${tool.description}</p>
            </a>
        `).join('');
    }

    function renderToolGuide() {
        const container = document.getElementById('tool-guide-content');
        if (!container) return;

        const currentPage = window.location.pathname;
        const pageName = currentPage.split('/').pop() || 'index.html';
        const guide = toolGuides[pageName];

        if (guide) {
            container.innerHTML = `
                <h2 class="tool-guide-title">📖 ${guide.title}</h2>
                ${guide.content}
            `;
            // Attach copy event listeners
            document.querySelectorAll('.copy-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const code = this.parentElement.querySelector('code');
                    if (code) {
                        navigator.clipboard.writeText(code.innerText).then(() => {
                            const originalText = this.innerHTML;
                            this.innerHTML = '✅ Copied!';
                            this.classList.add('copied');
                            setTimeout(() => {
                                this.innerHTML = originalText;
                                this.classList.remove('copied');
                            }, 2000);
                        });
                    }
                });
            });
        }
    }

    function renderRandomArticles() {
        // Render for tool pages (2 articles)
        const toolContainer = document.getElementById('random-articles-grid');
        if (toolContainer) {
            const shuffled = articles.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 2);

            toolContainer.innerHTML = selected.map(article => `
                <a href="${article.href}" class="article-card">
                    <div class="article-icon">${article.icon}</div>
                    <h3 class="article-title-card">${article.title}</h3>
                    <p class="article-description">${article.description}</p>
                </a>
            `).join('');
        }

        // Render for index page (3 articles)
        const indexContainer = document.getElementById('article-grid');
        if (indexContainer) {
            const shuffled = articles.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);

            indexContainer.innerHTML = selected.map(article => `
                <a href="${article.href}" class="article-card">
                    <div class="article-icon">${article.icon}</div>
                    <h3 class="article-title-card">${article.title}</h3>
                    <p class="article-description">${article.description}</p>
                </a>
            `).join('');
        }
    }

    // Auto-render when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderDiscoverMore();
            renderToolGuide();
            renderRandomArticles();
        });
    } else {
        renderDiscoverMore();
        renderToolGuide();
        renderRandomArticles();
    }
})();
