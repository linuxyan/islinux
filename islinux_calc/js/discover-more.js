// Discover More - Random tool recommendations and tool guide for calc site
(function() {
    const tools = [
        { href: 'hourly-rate.html', icon: '⏱️', title: 'Hourly Rate', description: 'Convert hourly rate to monthly/yearly income.' },
        { href: 'mortgage-calculator.html', icon: '🏠', title: 'Mortgage Calculator', description: 'Calculate mortgage payments and interest.' },
        { href: 'currency-converter.html', icon: '💱', title: 'Currency Converter', description: 'Convert between major world currencies.' },
        { href: 'investment-calculator.html', icon: '📈', title: 'Investment Calculator', description: 'Calculate investment returns and compound interest.' },
        { href: 'freelance-rate.html', icon: '💼', title: 'Freelance Rate', description: 'Calculate your ideal freelance hourly rate.' }
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
                    <li>Click on any calculator tool card above</li>
                    <li>Enter your values in the input fields</li>
                    <li>Results are calculated automatically</li>
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
        },
        'hourly-rate.html': {
            title: 'How to Use Hourly Rate Converter',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter your hourly rate in USD/hour</li>
                    <li>Set your working hours per week (default: 40)</li>
                    <li>Results are calculated automatically</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>The calculator uses 4.33 weeks per month for accurate monthly conversion.</p>
            `
        },
        'mortgage-calculator.html': {
            title: 'How to Use Mortgage Calculator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter the loan amount</li>
                    <li>Set the annual interest rate</li>
                    <li>Choose the loan term (10-30 years)</li>
                    <li>Select payment type: Equal Payment or Equal Principal</li>
                    <li>Click Calculate to see results</li>
                </ul>
                <h3>💡 Payment Types</h3>
                <ul>
                    <li><strong>Equal Payment:</strong> Fixed monthly payment, easier for budgeting</li>
                    <li><strong>Equal Principal:</strong> Decreasing payments, less total interest</li>
                </ul>
            `
        },
        'currency-converter.html': {
            title: 'How to Use Currency Converter',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter the amount to convert</li>
                    <li>Select the source currency</li>
                    <li>Select the target currency</li>
                    <li>Results update automatically</li>
                </ul>
                <h3>💡 Supported Currencies</h3>
                <p>USD, CNY, EUR, GBP, JPY, HKD, SGD with reference exchange rates.</p>
            `
        },
        'investment-calculator.html': {
            title: 'How to Use Investment Calculator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter your initial principal</li>
                    <li>Set expected annual return rate</li>
                    <li>Choose investment period in years</li>
                    <li>Optionally add monthly contributions</li>
                </ul>
                <h3>💡 Tips</h3>
                <p>Historical stock market average return is about 7-10% annually. Adjust for inflation when planning.</p>
            `
        },
        'freelance-rate.html': {
            title: 'How to Use Freelance Rate Calculator',
            content: `
                <h3>📋 Usage</h3>
                <ul>
                    <li>Enter your target annual income</li>
                    <li>Set working weeks per year (subtract vacation)</li>
                    <li>Enter hours per week</li>
                    <li>Set billing utilization (typically 50-70%)</li>
                </ul>
                <h3>💡 Billable Utilization</h3>
                <p>Most freelancers achieve 50-70% billable time. The rest goes to admin, marketing, and learning.</p>
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
