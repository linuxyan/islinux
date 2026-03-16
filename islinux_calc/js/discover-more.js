// Discover More - Random tool recommendations and tool guide for calc site
(function() {
    const tools = [
        { href: 'index.html#hourly', icon: '⏱️', title: 'Hourly Rate', description: 'Convert hourly rate to monthly/yearly income.' },
        { href: 'index.html#mortgage', icon: '🏠', title: 'Mortgage Calculator', description: 'Calculate mortgage payments and interest.' },
        { href: 'index.html#currency', icon: '💱', title: 'Currency Converter', description: 'Convert between major world currencies.' },
        { href: 'index.html#investment', icon: '📈', title: 'Investment Calculator', description: 'Calculate investment returns and compound interest.' },
        { href: 'index.html#freelance', icon: '💼', title: 'Freelance Rate', description: 'Calculate your ideal freelance hourly rate.' }
    ];

    const articles = [
        { href: 'articles/freelancer-rate-calculator.html', icon: '📚', title: 'Freelancer Pricing Strategy', description: 'Scientifically calculate your real hourly rate and avoid underpricing.' }
    ];

    const toolGuides = {
        'index.html': {
            title: 'How to Use the Calculators',
            content: `
                <h3>📋 Quick Start</h3>
                <ul>
                    <li>Click on the calculator tabs at the top to switch between different calculators</li>
                    <li>Enter your values in the input fields</li>
                    <li>Results are calculated automatically (or click Calculate button)</li>
                </ul>
                <h3>💡 Available Calculators</h3>
                <ul>
                    <li><strong>Hourly Rate:</strong> Convert hourly income to daily, weekly, monthly, and yearly</li>
                    <li><strong>Mortgage:</strong> Calculate monthly payments for home loans</li>
                    <li><strong>Currency:</strong> Convert between USD, CNY, EUR, GBP, JPY, and more</li>
                    <li><strong>Investment:</strong> Calculate compound returns with monthly contributions</li>
                    <li><strong>Freelance Rate:</strong> Determine your ideal hourly rate based on target income</li>
                </ul>
            `
        }
    };

    function renderDiscoverMore() {
        const grid = document.getElementById('discover-grid');
        if (!grid) return;

        const currentPage = window.location.pathname;
        // For calc site, always show all tools since they're all on index.html
        const shuffled = tools.sort(() => 0.5 - Math.random());
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
