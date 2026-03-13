# isLinux 开发要点指南

> 本文档记录所有页面开发时必须注意的关键要素，确保 Google AdSense 顺利过审并获得良好 SEO 排名。

---

## 一、国际化 (i18n) - 必须项

### 1.1 语言支持

```
✅ 必须支持的语言：
- 中文 (zh) - 默认语言
- 英文 (en) -  fallback 语言
```

### 1.2 实现要求

每个页面必须包含：

```html
<!-- 1. 语言切换器 (右上角) -->
<div class="lang-switcher">
    <label data-i18n="lang-label">语言</label>
    <select id="lang-switcher">
        <option value="zh">中文</option>
        <option value="en">English</option>
    </select>
</div>

<!-- 2. HTML lang 属性 -->
<html lang="zh-CN">  <!-- 或 en -->

<!-- 3. 可翻译的 meta 标签 -->
<title data-i18n="page-title">...</title>
<meta name="description" data-i18n="page-desc" content="...">

<!-- 4. 引入 i18n.js -->
<script src="i18n.js"></script>
```

### 1.3 翻译键命名规范

```javascript
{
    'page-title': '页面标题',
    'page-desc': '页面描述 (meta)',
    'logo': '站点 Logo',
    'tagline': '站点标语',
    'nav-*': '导航相关',
    'tool-*': '工具相关',
    'footer-text': '页脚文字',
    'lang-label': '语言选择标签'
}
```

---

## 二、SEO 优化 - 核心项

### 2.1 Meta 标签 (每页必备)

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 页面标题 (50-60 字符) -->
    <title>关键词 | 站点名 - 简短描述</title>

    <!-- 页面描述 (150-160 字符) -->
    <meta name="description" content="包含核心关键词的完整描述">

    <!-- 关键词 (可选) -->
    <meta name="keywords" content="keyword1, keyword2, keyword3">

    <!-- 作者 -->
    <meta name="author" content="isLinux Team">

    <!-- Open Graph (社交媒体分享) -->
    <meta property="og:title" content="页面标题">
    <meta property="og:description" content="页面描述">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://islinux.com">
    <meta property="og:image" content="https://islinux.com/og-image.png">

    <!-- Canonical URL (防止重复内容) -->
    <link rel="canonical" href="https://islinux.com/current-page">
</head>
```

### 2.2 结构化数据 (Schema.org)

```html
<!-- 组织信息 -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "isLinux",
    "url": "https://islinux.com",
    "logo": "https://islinux.com/logo.png",
    "description": "开发者全能工具基地"
}
</script>

<!-- 文章页面需要添加 Article schema -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "文章标题",
    "datePublished": "2026-03-13",
    "dateModified": "2026-03-13",
    "author": {
        "@type": "Organization",
        "name": "isLinux Team"
    }
}
</script>
```

### 2.3 标题层级规范

```html
<h1>页面主标题 (仅一个)</h1>
<h2>主要章节</h2>
<h3>子章节</h3>
<h4>小组块</h4>
```

**注意**：
- 每页只能有一个 `<h1>`
- 标题必须按顺序使用 (h1→h2→h3)
- 标题中应包含关键词

### 2.4 内部链接策略

```html
<!-- 相关文章/工具链接 -->
<section class="related-content">
    <h2>相关内容</h2>
    <ul>
        <li><a href="/related-page-1">锚文本 1</a></li>
        <li><a href="/related-page-2">锚文本 2</a></li>
    </ul>
</section>
```

---

## 三、Google AdSense 过审要素 - 关键项

### 3.1 必备页面 (缺一不可)

| 页面 | 路径 | 说明 |
|------|------|------|
| About Us | `/about.html` | 介绍团队、使命、服务 |
| Privacy Policy | `/privacy.html` | 详细说明数据收集和使用 |
| Contact Us | `/contact.html` | 提供有效联系方式 |

### 3.2 隐私政策必须包含

```
✅ 数据收集说明
✅ Cookie 使用说明
✅ 第三方服务披露 (AdSense, Analytics)
✅ 用户权利说明 (GDPR)
✅ 儿童隐私保护
✅ 政策更新机制
✅ 联系方式
```

### 3.3 内容质量要求

```
✅ 每页最少 800 字原创内容
✅ 工具页必须配教程文章
✅ 避免"内容单薄"拒审
✅ 定期更新内容 (显示活跃度)
```

### 3.4 用户体验要求

```
✅ 页面加载速度 < 3 秒
✅ 移动端完全适配
✅ 无 intrusive 弹窗
✅ 清晰的导航结构
✅ 搜索功能
```

---

## 四、页面性能优化

### 4.1 CSS 优化

```html
<!-- 关键 CSS 内联 -->
<style>
    /* 首屏关键样式 */
</style>

<!-- 非关键 CSS 异步加载 -->
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
```

### 4.2 JavaScript 优化

```html
<!-- 非关键 JS 延迟加载 -->
<script src="non-critical.js" defer></script>

<!-- 分析脚本异步加载 -->
<script async src="analytics.js"></script>
```

### 4.3 图片优化

```html
<!-- 响应式图片 -->
<img src="image.jpg"
     srcset="image-480.jpg 480w, image-800.jpg 800w"
     sizes="(max-width: 600px) 480px, 800px"
     alt="描述性文字"
     loading="lazy"
     width="800" height="600">
```

---

## 五、广告位预留

### 5.1 标准广告位

```html
<!-- 顶部横幅 (728x90 或 970x250) -->
<div class="ad-slot ad-top">
    <!-- AdSense 代码 -->
</div>

<!-- 侧边栏 (300x600 或 300x250) -->
<div class="ad-slot ad-sidebar">
    <!-- AdSense 代码 -->
</div>

<!-- 内容中 (300x250) -->
<div class="ad-slot ad-in-content">
    <!-- AdSense 代码 -->
</div>

<!-- 底部横幅 (728x90 或 970x250) -->
<div class="ad-slot ad-bottom">
    <!-- AdSense 代码 -->
</div>
```

### 5.2 广告位样式

```css
.ad-slot {
    background: #f5f5f5;
    border: 1px dashed #ddd;
    margin: 2rem 0;
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

---

## 六、安全检查清单

### 6.1 发布前检查

```
□ i18n 模块已集成
□ 语言切换器可用
□ meta 标签完整
□ title 长度 50-60 字符
□ description 长度 150-160 字符
□ h1 标签唯一
□ 移动端适配正常
□ 页面加载 < 3 秒
□ 所有链接有效
□ 图片有 alt 属性
□ Schema 结构化数据正确
□ Canonical URL 设置
```

### 6.2 AdSense 申请前检查

```
□ About 页面存在且内容充实
□ Privacy Policy 完整合规
□ Contact 页面有有效邮箱
□ 每页内容 > 800 字
□ 无版权争议内容
□ 网站运行稳定 (至少 2 周)
□ 有原创内容 (非 AI 生成)
□ 导航清晰易用
```

---

## 七、内容策略

### 7.1 关键词矩阵

| 类别 | 关键词 | CPC | 竞争度 |
|------|--------|-----|--------|
| Linux | linux commands, bash scripting | 中 | 高 |
| VPS | singapore vps, cloud hosting | 高 | 中 |
| AI | ai prompts, chatgpt prompts | 中 | 高 |
| 工具 | json formatter, base64 decode | 低 | 低 |
| 财务 | mortgage calculator, hourly rate | 高 | 中 |

### 7.2 内容更新频率

```
✅ 技术文章：每周 1-2 篇
✅ 工具更新：每月 1 次
✅ 数据更新：实时/每日
```

---

## 八、监控与分析

### 8.1 必须集成的工具

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>

<!-- Google Search Console 验证 -->
<meta name="google-site-verification" content="verification-code">
```

### 8.2 核心指标

| 指标 | 目标值 |
|------|--------|
| 页面加载时间 | < 3s |
| 跳出率 | < 50% |
| 平均停留时间 | > 2 分钟 |
| 移动端流量占比 | > 40% |
| 自然搜索流量 | > 60% |

---

## 九、模板示例

### 9.1 标准页面模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="page-title">页面标题 | isLinux</title>
    <meta name="description" data-i18n="page-desc" content="页面描述">
    <link rel="canonical" href="https://islinux.com/page-url">

    <!-- Open Graph -->
    <meta property="og:title" content="页面标题">
    <meta property="og:description" content="页面描述">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://islinux.com/page-url">

    <!-- Schema -->
    <script type="application/ld+json">{...}</script>

    <!-- 关键 CSS -->
    <style>...</style>
</head>
<body>
    <header>
        <div class="lang-switcher">...</div>
        <nav>...</nav>
    </header>

    <main>
        <h1>页面主标题</h1>
        <article>内容...</article>

        <!-- 广告位 -->
        <div class="ad-slot ad-in-content"></div>
    </main>

    <footer>
        <a href="/about.html">About</a>
        <a href="/privacy.html">Privacy</a>
        <a href="/contact.html">Contact</a>
    </footer>

    <script src="i18n.js"></script>
</body>
</html>
```

---

## 十、快速参考

### 10.1 文件结构

```
islinux/
├── islinux_root/          # 主站
│   ├── index.html         # 首页 (含 i18n)
│   ├── about.html         # 关于我们
│   ├── privacy.html       # 隐私政策
│   ├── contact.html       # 联系我们
│   ├── i18n.js           # 国际化模块
│   └── articles/         # 文章
├── islinux_ai/           # AI 子站
├── islinux_tool/         # 工具站
├── islinux_calc/         # 计算器站
├── DEVELOPMENT_GUIDE.md  # 本文档
└── islinux_project_guide.md
```

### 10.2 常用翻译键

```javascript
// 通用
'lang-label', 'back-home', 'footer-text', 'related-articles'
'nav-home', 'nav-about', 'nav-privacy'

// 主站
'site-title', 'tagline', 'sites-nav', 'quick-start'

// 工具站
'tool-json-format', 'tool-base64', 'tool-hash'

// 计算器
'tab-hourly', 'tab-mortgage', 'tab-currency'
```

---

**文档更新记录**：
- 2026-03-13: 初始版本，包含国际化、SEO、AdSense 要求

**维护者**：isLinux Team
