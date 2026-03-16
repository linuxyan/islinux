# AI.isLinux.com 开发手册

## 页面结构

所有工具页面遵循统一的布局结构：

```
[Header - 站点导航]
    ↓
[工具内容区域] (max-width: 1100px)
    ↓
Discover More (4 个随机工具推荐)
    ↓
Tool Guide (当前工具使用说明)
    ↓
Related Articles (2 篇随机文章)
    ↓
[Footer - 页脚信息]
    ↓
[Toast - 提示消息]
```

## 文件组织

```
islinux_ai/
├── index.html              # 首页（工具导航）
├── about.html              # 关于页面
├── css/
│   └── common.css          # 通用样式（所有页面共享）
├── js/
│   └── discover-more.js    # Discover More + Tool Guide + Random Articles
├── articles/               # 文章目录
│   ├── prompt-engineering-shell.html
│   ├── ai-code-review-guide.html
│   └── git-commit-messages.html
├── *.html                  # 工具页面（6 个）
│   ├── shell-prompt.html
│   ├── python-generator.html
│   ├── readme-generator.html
│   ├── git-commit.html
│   ├── sql-optimizer.html
│   └── debug-assistant.html
└── DEVELOPMENT.md          # 开发手册
```

## 必需的外部引用

每个工具页面需要在 `</head>` 前添加：

```html
<link rel="stylesheet" href="css/common.css">
```

在 `</head>` 前添加 JS 引用（首页需要）：

```html
<script src="js/discover-more.js"></script>
```

在 `</body>` 前添加三个 Section：

```html
<!-- Discover More Section -->
<section class="discover-section">
    <h2 class="discover-title">🔍 Discover More</h2>
    <div class="discover-grid" id="discover-grid"></div>
</section>

<!-- Tool Guide Section -->
<section class="tool-guide-section">
    <div class="tool-guide-content" id="tool-guide-content"></div>
</section>

<!-- Random Articles Section -->
<section class="random-articles-section">
    <h2 class="random-articles-title">📚 Related Articles</h2>
    <div class="random-articles-grid" id="random-articles-grid"></div>
</section>

<footer>...</footer>

<div class="toast" id="toast">...</div>

<script src="js/discover-more.js"></script>
<script>
    // 工具特定的 JavaScript 代码
</script>

</body>
</html>
```

## 通用模块说明

### 1. Discover More（工具推荐）
- 自动排除当前页面
- 从剩余工具中随机选择 4 个
- 桌面端 4 列布局，移动端自适应（3 列/2 列）
- 卡片为正方形，内容居中
- 包含：图标、标题、描述

### 2. Tool Guide（工具说明）
- 在 `js/discover-more.js` 的 `toolGuides` 对象中配置
- 包含用法说明、技巧提示、代码示例
- 代码块支持一键复制功能

### 3. Related Articles（相关文章）
- 工具页面：从 `articles/` 目录中随机选择 2 篇
- 首页：随机选择 3 篇
- 列表布局：每行显示一篇文章（图标 + 标题 + 描述）

## 添加工具说明

在 `js/discover-more.js` 的 `toolGuides` 对象中添加：

```javascript
'tool-page.html': {
    title: 'How to Use This Tool',
    content: `
        <h3>📋 Usage</h3>
        <ul>
            <li>Step 1</li>
            <li>Step 2</li>
        </ul>
        <h3>💡 Tips</h3>
        <p>Some useful tips.</p>
        <div class="code-wrapper">
            <pre><code>code example</code></pre>
        </div>
    `
}
```

## 添加文章

1. 在 `articles/` 目录创建 HTML 文件
2. 使用统一的模板（参考现有文章）
3. 在 `js/discover-more.js` 的 `articles` 数组中添加条目：

```javascript
{
    href: 'articles/your-article.html',
    icon: '📚',
    title: 'Article Title',
    description: 'Brief description.'
}
```

## CSS 变量

所有页面使用统一的 CSS 变量：

```css
:root {
    --bg-color: #0d1117;
    --text-color: #c9d1d9;
    --accent-color: #238636;
    --card-bg: #161b22;
    --border-color: #30363d;
    --text-muted: #8b949e;
    --code-bg: #000;
    --ai-blue: #58a6ff;
}
```

## 响应式断点

- 桌面端：> 1024px
- 平板端：768px - 1024px
- 手机端：< 768px

## 首页布局

首页采用工具卡片网格布局：

```css
.tools-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* 桌面端 4 列 */
    gap: 1rem;
}

@media (max-width: 1024px) {
    .tools-grid {
        grid-template-columns: repeat(3, 1fr);  /* 平板端 3 列 */
    }
}

@media (max-width: 768px) {
    .tools-grid {
        grid-template-columns: repeat(2, 1fr);  /* 手机端 2 列 */
    }
}
```

## 代码规范

- HTML 使用语义化标签
- CSS 使用 BEM 命名约定
- JavaScript 使用 IIFE 避免全局污染
- 所有文本使用英文
- 注释使用中文
