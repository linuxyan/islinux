// Discover More - Random tool recommendations and tool guide for AI site
(function() {
    const tools = [
        { href: '/shell-prompt.html', icon: '📜', title: 'Shell Prompt', description: 'Optimize Bash scripts with AI review.' },
        { href: '/python-generator.html', icon: '🐍', title: 'Python Generator', description: 'Generate Python code with AI prompts.' },
        { href: '/readme-generator.html', icon: '📝', title: 'README Generator', description: 'Create professional README files.' },
        { href: '/git-commit.html', icon: '💾', title: 'Git Commit', description: 'Generate meaningful commit messages.' },
        { href: '/sql-optimizer.html', icon: '🗄️', title: 'SQL Optimizer', description: 'Optimize SQL queries with AI.' },
        { href: '/debug-assistant.html', icon: '🔧', title: 'Debug Assistant', description: 'Debug code with AI assistance.' }
    ];

    const articles = [
        { href: '/articles/prompt-engineering-shell.html', icon: '📚', title: 'Prompt Engineering for Shell', description: 'Master the art of writing effective shell prompts.' },
        { href: '/articles/ai-code-review-guide.html', icon: '🔍', title: 'AI Code Review Guide', description: 'Best practices for AI-assisted code review.' },
        { href: '/articles/git-commit-messages.html', icon: '💡', title: 'Git Commit Messages', description: 'Write better commit messages with AI.' },
        { href: '/articles/copilot-to-agentic-ai.html', icon: '🤖', title: 'From Copilot to Agentic AI', description: 'Build autonomous workflows with local AI agents in 2026.' },
        { href: '/articles/local-llm-deployment.html', icon: '🚀', title: 'Local LLM Deployment Guide', description: 'Complete guide to deploying Llama 3, Mistral and other models locally in 2026.' },
        { href: '/articles/run-deepseek-v3-locally-linux.html', icon: '🔧', title: 'Run DeepSeek-V3 Locally on Linux', description: 'Step-by-step guide to deploying DeepSeek-V3 with Ollama and Llama.cpp on Linux.' },
        { href: '/articles/how-to-optimize-linux-kernel-llm-inference.html', icon: '⚙️', title: 'Optimize Linux Kernel for LLM Inference', description: 'DevOps guide to kernel tuning for LLM workloads: memory management, I/O optimization, CPU scheduling, and GPU Direct Storage.' }
    ];

    const toolGuides = {
        '/shell-prompt.html': {
            title: 'How to Use Shell Script Optimizer',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Copy the AI prompt below</li>
                    <li>Paste into your AI chatbot (Claude, ChatGPT, etc.)</li>
                    <li>Add your Bash script content</li>
                    <li>Review the optimization suggestions</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>For best results:</p>
                <ul>
                    <li>Include the complete script with context</li>
                    <li>Mention the script's purpose</li>
                    <li>Specify your target shell (bash, zsh, sh)</li>
                </ul>
            `
        },
        '/python-generator.html': {
            title: 'How to Use Python Generator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Describe the Python code you need</li>
                    <li>Copy the generated prompt</li>
                    <li>Paste into AI chatbot</li>
                    <li>Review and test the generated code</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Be specific about:</p>
                <ul>
                    <li>Input/output requirements</li>
                    <li>Python version</li>
                    <li>Any libraries or frameworks</li>
                </ul>
            `
        },
        '/readme-generator.html': {
            title: 'How to Use README Generator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Gather project information</li>
                    <li>Copy the README prompt</li>
                    <li>Fill in your project details</li>
                    <li>Generate and customize</li>
                </ul>
                <h3>💡 README Sections</h3>
                <ul>
                    <li>Project title and description</li>
                    <li>Installation instructions</li>
                    <li>Usage examples</li>
                    <li>Contributing guidelines</li>
                </ul>
            `
        },
        '/git-commit.html': {
            title: 'How to Use Git Commit Generator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Describe your code changes</li>
                    <li>Copy the commit prompt</li>
                    <li>Get well-formatted commit message</li>
                    <li>Follow conventional commits</li>
                </ul>
                <h3>💡 Commit Types</h3>
                <ul>
                    <li><strong>feat:</strong> New feature</li>
                    <li><strong>fix:</strong> Bug fix</li>
                    <li><strong>docs:</strong> Documentation</li>
                    <li><strong>refactor:</strong> Code refactoring</li>
                </ul>
            `
        },
        '/sql-optimizer.html': {
            title: 'How to Use SQL Optimizer',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Copy the SQL optimization prompt</li>
                    <li>Paste your SQL query</li>
                    <li>Include table schema if possible</li>
                    <li>Review optimization suggestions</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Include for better results:</p>
                <ul>
                    <li>Database type (MySQL, PostgreSQL, etc.)</li>
                    <li>Table structures</li>
                    <li>Expected query performance</li>
                </ul>
            `
        },
        '/debug-assistant.html': {
            title: 'How to Use Debug Assistant',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Describe the bug or issue</li>
                    <li>Include error messages</li>
                    <li>Copy the debug prompt</li>
                    <li>Get debugging suggestions</li>
                </ul>
                <h3>💡 Debug Info</h3>
                <ul>
                    <li>Programming language and version</li>
                    <li>Steps to reproduce</li>
                    <li>Expected vs actual behavior</li>
                    <li>Environment details</li>
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
                    <div class="article-content">
                        <h3 class="article-title-card">${article.title}</h3>
                        <p class="article-description">${article.description}</p>
                    </div>
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
                    <div class="article-content">
                        <h3 class="article-title-card">${article.title}</h3>
                        <p class="article-description">${article.description}</p>
                    </div>
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
