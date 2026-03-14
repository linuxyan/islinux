# Project Guide: isLinux Matrix Site Network

## 0. Language Usage Guidelines (语言使用规范)

### 0.1 开发文档与沟通 (Development & Communication)
- **开发指南、项目文档、团队沟通**: 使用 **中文**
- **与 AI 助手 (Claude) 的对话**: 使用 **中文**
- **代码注释**: 使用 **英文** (符合国际标准)

### 0.2 面向用户的内容 (User-Facing Content)
- **所有网页内容**: 仅使用 **英文** (美国英语拼写)
- **文章内容**: 仅使用 **英文**
- **UI 标签、按钮、表单**: 仅使用 **英文**
- **Meta 标签 (title, description, keywords)**: 仅使用 **英文**

### 0.3 原因说明
- 中文开发：团队沟通效率高，表达清晰
- 英文内容：Google AdSense 变现，获取美国/英国/加拿大/澳大利亚市场的高 CPC 收益

---

## 1. Project Overview

**Core Domain**: islinux.com (Top-level domain with strong technical credibility)

**Project Goal**: Build a developer-focused matrix site network centered on Linux, providing tools and content to generate passive income through Google AdSense while covering server costs.

**Deployment Environment**: Singapore VPS, Nginx environment with HTTPS/HSTS support.

### 1.1 Site Matrix

| Site URL | Positioning | Core Features | Code Folder |
|----------|-------------|---------------|-------------|
| islinux.com | Main Site/Portal | Linux command reference, tech blog, traffic navigation, SEO moat | islinux_root |
| ai.islinux.com | AI Subsite | AI Prompt library, developer-specific prompt cards | islinux_ai |
| tool.islinux.com | Tools Subsite | Pure frontend tools (JSON formatter, encryption, code minifier) | islinux_tool |
| calc.islinux.com | Calculator Subsite | Financial/efficiency calculators (hourly rate, mortgage, currency) | islinux_calc |

---

## 2. Technical Stack

### 2.1 Frontend
- **Tech Stack**: Native HTML5 / CSS3 / JavaScript (for fastest loading and SEO friendliness)
- **Mobile**: Fully responsive mobile design

### 2.2 Backend
- **Web Server**: Nginx (reverse proxy, multi-site virtual host configuration)

### 2.3 Security
- Full-site HTTPS with SSL certificate
- HSTS enabled (Strict-Transport-Security)
- Pure frontend processing for sensitive data (JSON/encryption) to protect user privacy and increase AdSense trust

---

## 3. SEO & Monetization Strategy

### 3.1 Content Strategy
- **Content is King**: Every tool page must have an 800+ word educational/tutorial article to avoid "thin content" rejection

### 3.2 Core Keyword Matrix
| Keyword Category | Description |
|------------------|-------------|
| Linux practical commands | High Traffic |
| Data privacy & local processing | Security |
| Singapore VPS/Cloud hosting reviews | High CPC |
| AI Prompt Engineering | Trending |
| Developer financial calculations | High CPC |

### 3.3 Approval Requirements
- Required pages: About Us, Privacy Policy, Contact Us
- All content in English for Google AdSense

---

## 4. Visual Style Guide (UI/UX)

| Attribute | Value |
|-----------|-------|
| **Theme** | Dark Mode (GitHub Dark Style / Terminal Style) |
| **Background** | `#0d1117` |
| **Primary Text** | `#c9d1d9` |
| **Accent Color** | `#238636` (Linux Green) |
| **Experience** | Minimalist, no popups, code syntax highlighting, one-click copy buttons |

---

## 5. SEO & Content Planning (Approval Critical)

### 5.1 Core Article Plan (First 5 Articles)

| Category | Article Title | Target Subsite |
|----------|---------------|----------------|
| High Traffic | "Modern Linux Productivity Tools for 2026" | Linux Command Library |
| Privacy | "How to Locally Process JSON Formatting to Protect Trade Secrets" | Tool Subsite |
| High CPC | "Singapore Cloud Server Latency Review and Developer Buying Guide" | Server Hosting Ads |
| Trending | "AI Prompt Engineering: How to Write Perfect Shell Script Generation Prompts" | AI Subsite |
| Finance | "Freelancer Project Pricing Strategy and Hourly Rate Calculator" | Calculator Subsite |

### 5.2 Legal & Compliance (Required)

- **Privacy Policy**: Clearly state "All tool data is processed locally in the browser, not uploaded to servers"
- **About Us**: Showcase site professionalism and team credibility

---

## 6. Google AdSense English Content Guidelines

### 6.1 Target Markets
- Primary: United States, United Kingdom, Canada, Australia (highest CPC rates)
- Language: American English throughout (optimize, color, program spelling)

### 6.2 High-Value Content Categories
1. **Cloud & Hosting** - VPS reviews, cloud hosting comparisons
2. **Developer Tools** - IDE comparisons, productivity tools
3. **AI & Machine Learning** - Prompt engineering, AI tutorials
4. **Cybersecurity** - Data privacy, encryption guides
5. **Financial Technology** - Calculators, investment tools

### 6.3 Content Best Practices
- Write original, in-depth content (minimum 800 words per page)
- Include practical examples and code snippets
- Use proper heading hierarchy (H1, H2, H3)
- Add internal links between related content
- Include schema.org structured data
- Optimize meta titles and descriptions

---

**Last Updated**: 2026-03-14
**Maintainer**: isLinux Team

---

## 语言规范说明 (Language Policy)

| 文档类型 | 使用语言 | 说明 |
|----------|----------|------|
| 开发指南 (DEVELOPMENT_GUIDE.md) | 中文 | 便于团队理解和维护 |
| 项目说明 (islinux_project_guide.md) | 中文 | 便于团队沟通和协作 |
| 代码注释 | 英文 | 符合国际编码规范 |
| 所有网页内容 | 英文 | Google AdSense 变现，面向欧美市场 |
| 文章内容 | 英文 | 高 CPC 关键词，美元结算收益 |
| UI/UX 文案 | 英文 | 面向全球开发者用户 |
