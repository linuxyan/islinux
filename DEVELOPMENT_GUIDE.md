# isLinux Development Guide

> This document records key elements that must be considered during page development to ensure Google AdSense approval and achieve good SEO rankings.

---

## 0. Language Usage Guidelines

### 0.1 Development Documentation & Communication
- **Development guide, project docs, and team communication**: Use **Chinese** (中文)
- **Developer conversations (Claude, team chats)**: Use **Chinese** (中文)
- **Code comments**: Use **English** (consistent with international standards)

### 0.2 User-Facing Content
- **All webpage content**: Use **English** only (美国英语 spelling)
- **Article content**: Use **English** only
- **UI labels, buttons, forms**: Use **English** only
- **Meta tags (title, description, keywords)**: Use **English** only

### 0.3 Rationale
- Chinese for development: Team efficiency, clearer communication
- English for content: Google AdSense monetization, higher CPC from US/UK/CA/AU markets

---

## 1. SEO Optimization - Core Item

### 1.1 Meta Tags (Required for Every Page)

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page Title (50-60 characters) -->
    <title>Keyword | Site Name - Short Description</title>

    <!-- Page Description (150-160 characters) -->
    <meta name="description" content="Complete description including core keywords">

    <!-- Keywords (Optional) -->
    <meta name="keywords" content="keyword1, keyword2, keyword3">

    <!-- Author -->
    <meta name="author" content="isLinux Team">

    <!-- Open Graph (Social Media Sharing) -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page Description">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://islinux.com">
    <meta property="og:image" content="https://islinux.com/og-image.png">

    <!-- Canonical URL (Prevent Duplicate Content) -->
    <link rel="canonical" href="https://islinux.com/current-page">
</head>
```

### 1.2 Structured Data (Schema.org)

```html
<!-- Organization Information -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "isLinux",
    "url": "https://islinux.com",
    "logo": "https://islinux.com/logo.png",
    "description": "Developer All-in-One Toolkit"
}
</script>

<!-- Article Schema for Article Pages -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Article Title",
    "datePublished": "2026-03-13",
    "dateModified": "2026-03-13",
    "author": {
        "@type": "Organization",
        "name": "isLinux Team"
    }
}
</script>
```

### 1.3 Heading Hierarchy

```html
<h1>Page Main Title (Only One)</h1>
<h2>Main Sections</h2>
<h3>Subsections</h3>
<h4>Small Blocks</h4>
```

**Notes**:
- Only one `<h1>` per page
- Headings must be used in order (h1→h2→h3)
- Keywords should be included in headings

### 1.4 Internal Linking Strategy

```html
<!-- Related Articles/Tools Links -->
<section class="related-content">
    <h2>Related Content</h2>
    <ul>
        <li><a href="/related-page-1">Anchor Text 1</a></li>
        <li><a href="/related-page-2">Anchor Text 2</a></li>
    </ul>
</section>
```

---

## 2. Google AdSense Approval Requirements - Critical Item

### 2.1 Required Pages (All Must Exist)

| Page | Path | Description |
|------|------|-------------|
| About Us | `/about.html` | Introduce team, mission, services |
| Privacy Policy | `/privacy.html` | Detailed data collection and usage |
| Contact Us | `/contact.html` | Provide valid contact information |

### 2.2 Privacy Policy Must Include

```
✅ Data Collection Description
✅ Cookie Usage Description
✅ Third-Party Services Disclosure (AdSense, Analytics)
✅ User Rights Description (GDPR)
✅ Children's Privacy Protection
✅ Policy Update Mechanism
✅ Contact Information
```

### 2.3 Content Quality Requirements

```
✅ Minimum 800 words of original content per page
✅ Tool pages must have tutorial articles
✅ Avoid "thin content" rejection
✅ Regular content updates (show activity)
```

### 2.4 User Experience Requirements

```
✅ Page load speed < 3 seconds
✅ Full mobile responsiveness
✅ No intrusive popups
✅ Clear navigation structure
✅ Search functionality
```

---

## 3. Google AdSense English Content Monetization

### 3.1 High CPC Keywords for English Content

| Category | Keywords | Avg CPC | Competition |
|----------|----------|---------|-------------|
| Cloud Hosting | cloud hosting, vps, dedicated server | $2.50 - $15.00 | High |
| Developer Tools | developer tools, IDE, code editor | $1.80 - $8.00 | Medium |
| AI/ML | artificial intelligence, machine learning, prompts | $2.00 - $12.00 | High |
| Cybersecurity | cybersecurity, encryption, data protection | $3.00 - $18.00 | High |
| Finance Tech | fintech, investment calculator, mortgage | $4.00 - $25.00 | High |
| Linux/DevOps | linux, devops, kubernetes, docker | $1.50 - $10.00 | Medium |

### 3.2 English Content Strategy

```
✅ Target US/UK/CA/AU markets (highest CPC)
✅ Use American English spelling (optimize, color, program)
✅ Write for Western developer audience
✅ Include region-specific examples and references
✅ Optimize for Google.com (not regional Google sites)
```

### 3.3 Ad Placement Best Practices

```
✅ Above the fold: 728x90 leaderboard
✅ Sidebar: 300x600 half-page
✅ In-content: 300x250 medium rectangle
✅ Footer: 728x90 or 970x250
✅ Maintain 30% text-to-ad ratio
✅ Never place ads near clickable elements (accidental clicks)
```

### 3.4 AdSense Policy Compliance

```
✅ No copyrighted content without permission
✅ No adult or offensive content
✅ No hacking/cracking tutorials
✅ No drug-related content
✅ Original content only (no AI-generated without editing)
✅ Clear content categorization
✅ Functional navigation (no dead ends)
```

### 3.5 Revenue Optimization Tips

```
✅ Update content regularly (fresh content = higher rankings)
✅ Target long-tail keywords (lower competition)
✅ Build backlinks from reputable tech sites
✅ Optimize for Core Web Vitals (Google ranking factor)
✅ Use Google AdSense Auto Ads (after approval)
✅ Monitor performance in Google AdSense dashboard
✅ A/B test ad placements
```

---

## 4. Page Performance Optimization

### 4.1 CSS Optimization

```html
<!-- Inline Critical CSS -->
<style>
    /* First-screen critical styles */
</style>

<!-- Load Non-Critical CSS Asynchronously -->
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
```

### 4.2 JavaScript Optimization

```html
<!-- Defer Non-Critical JS -->
<script src="non-critical.js" defer></script>

<!-- Async Load Analytics Scripts -->
<script async src="analytics.js"></script>
```

### 4.3 Image Optimization

```html
<!-- Responsive Images -->
<img src="image.jpg"
     srcset="image-480.jpg 480w, image-800.jpg 800w"
     sizes="(max-width: 600px) 480px, 800px"
     alt="Descriptive text"
     loading="lazy"
     width="800" height="600">
```

---

## 5. Ad Slot Placement

### 5.1 Standard Ad Slots

```html
<!-- Top Banner (728x90 or 970x250) -->
<div class="ad-slot ad-top">
    <!-- AdSense Code -->
</div>

<!-- Sidebar (300x600 or 300x250) -->
<div class="ad-slot ad-sidebar">
    <!-- AdSense Code -->
</div>

<!-- In-Content (300x250) -->
<div class="ad-slot ad-in-content">
    <!-- AdSense Code -->
</div>

<!-- Bottom Banner (728x90 or 970x250) -->
<div class="ad-slot ad-bottom">
    <!-- AdSense Code -->
</div>
```

### 5.2 Ad Slot Styling

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

## 6. Pre-Launch Checklist

### 6.1 Before Publishing

```
□ Meta tags complete
□ Title length 50-60 characters
□ Description length 150-160 characters
□ Single h1 tag
□ Mobile responsive
□ Page load < 3 seconds
□ All links working
□ Images have alt attributes
□ Schema structured data correct
□ Canonical URL set
```

### 6.2 Before AdSense Application

```
□ About page exists with substantial content
□ Privacy Policy complete and compliant
□ Contact page has valid email
□ Each page has > 800 words
□ No copyright-infringing content
□ Website stable for at least 2 weeks
□ Original content (not purely AI-generated)
□ Clear navigation
□ English content throughout
```

---

## 7. Content Strategy

### 7.1 Keyword Matrix

| Category | Keywords | CPC | Competition |
|----------|----------|-----|-------------|
| Linux | linux commands, bash scripting | Medium | High |
| VPS | singapore vps, cloud hosting | High | Medium |
| AI | ai prompts, chatgpt prompts | Medium | High |
| Tools | json formatter, base64 decode | Low | Low |
| Finance | mortgage calculator, hourly rate | High | Medium |

### 7.2 Content Update Frequency

```
✅ Technical Articles: 1-2 per week
✅ Tool Updates: Once per month
✅ Data Updates: Real-time / Daily
```

---

## 8. Monitoring and Analytics

### 8.1 Required Integrations

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>

<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="verification-code">
```

### 8.2 Core Metrics

| Metric | Target |
|--------|--------|
| Page Load Time | < 3s |
| Bounce Rate | < 50% |
| Average Time on Page | > 2 minutes |
| Mobile Traffic Share | > 40% |
| Organic Search Traffic | > 60% |

---

## 9. Template Example

### 9.1 Standard Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | isLinux</title>
    <meta name="description" content="Page description">
    <link rel="canonical" href="https://islinux.com/page-url">

    <!-- Open Graph -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page Description">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://islinux.com/page-url">

    <!-- Schema -->
    <script type="application/ld+json">{...}</script>

    <!-- Critical CSS -->
    <style>...</style>
</head>
<body>
    <header>
        <nav>...</nav>
    </header>

    <main>
        <h1>Page Main Title</h1>
        <article>Content...</article>

        <!-- Ad Slot -->
        <div class="ad-slot ad-in-content"></div>
    </main>

    <footer>
        <a href="/about.html">About</a>
        <a href="/privacy.html">Privacy</a>
        <a href="/contact.html">Contact</a>
    </footer>
</body>
</html>
```

---

## 10. Quick Reference

### 10.1 File Structure

```
islinux/
├── islinux_root/          # Main Site
│   ├── index.html         # Homepage (English only)
│   ├── about.html         # About Us
│   ├── privacy.html       # Privacy Policy
│   ├── contact.html       # Contact Us
│   └── articles/          # Articles
├── islinux_ai/            # AI Subsite
├── islinux_tool/          # Tools Subsite
├── islinux_calc/          # Calculator Subsite
├── DEVELOPMENT_GUIDE.md   # This Document
└── islinux_project_guide.md
```

---

**Document Update History**:
- 2026-03-13: Updated to English-only, removed i18n, added AdSense monetization guidelines

**Maintainer**: isLinux Team
