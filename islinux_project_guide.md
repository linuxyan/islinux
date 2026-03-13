# 🚀 项目全局提示词：isLinux 矩阵站群开发计划

## 1. 项目概览 (Project Overview)

**核心域名**：islinux.com (顶级域名，具有强技术背书感)

**项目目标**：建立一个以 Linux 为核心的开发者全能矩阵站，通过提供工具和内容，接入 Google AdSense 实现每月覆盖服务器成本并产生被动收益。

**部署环境**：新加坡云服务器 (VPS)，Nginx 环境，支持 HTTPS/HSTS。

### 1.1 站点矩阵

| 站点地址 | 定位 | 核心功能 | 对应代码文件夹 |
|----------|------|----------|--------|
| islinux.com | 主站/门户 | Linux 命令百科、技术博客、流量导航、SEO 护城河 | 对应文件夹为islinux_root |
| ai.islinux.com | AI 子站 | AI 提示词 (Prompts) 库、开发者专项指令卡片 | 对应文件夹为islinux_ai |
| tool.islinux.com | 工具子站 | 纯前端工具 (JSON 格式化、加解密、代码压缩) | 对应文件夹为islinux_tool |
| calc.islinux.com | 计算子站 | 金融/效率计算器 (时薪转换、房贷、汇率) |
对应文件夹为islinux_calc |
---

## 2. 技术规范 (Technical Stack)

### 2.1 前端技术
- **技术栈**：原生 HTML5 / CSS3 / JavaScript (追求极速加载与 SEO 友好)
- **移动端**：完全适配移动端

### 2.2 服务端
- **Web 服务器**：Nginx (反向代理、多站点虚拟主机配置)

### 2.3 安全性
- 全站强制 HTTPS (SSL 证书)
- 开启 HSTS (Strict-Transport-Security)
- 纯前端处理敏感数据（JSON/加密），保护用户隐私，增加 AdSense 信任度

---

## 3. SEO 与变现策略 (SEO & Monetization)

### 3.1 内容策略
- **内容为王**：每个工具页必须配以 800+ 字的科普/教程长文，解决"内容单薄"导致的拒审问题

### 3.2 核心关键词矩阵
| 关键词类别 | 说明 |
|------------|------|
| Linux 实战命令 | High Traffic |
| 数据隐私与本地处理 | Security |
| 新加坡 VPS/云服务测评 | High CPC |
| AI 提示词工程 | Trend |
| 开发者财务计算 | High CPC |

### 3.3 过审标准
- 必备页面：About Us、Privacy Policy、Contact Us

---

## 4. 视觉风格指南 (UI/UX Style)

| 属性 | 值 |
|------|-----|
| **色调** | 深色模式 (GitHub Dark Style / Terminal Style) |
| **背景色** | `#0d1117` |
| **主文字** | `#c9d1d9` |
| **强调色** | `#238636` (Linux 绿) |
| **体验** | 极简主义，拒绝弹窗，代码块高亮，复制按钮一键触发 |

---

## 5. 国际化策略 (Internationalization)

| 配置项 | 说明 |
|--------|------|
| **检测机制** | 基于原生 `navigator.language` 实现浏览器语言自适应 |
| **Fallback** | 默认语言设为英文 (en)，优先支持 zh, en, ja, es |
| **实现方式** | 数据绑定 (`data-i18n`) + JSON 语言字典 |
| **目标市场** | 通过多语言 Meta 标签抢占全球 High-CPC 广告市场 |

---

## 6. SEO 与内容规划 (过审关键)

### 6.1 核心文章计划 (首批 5 篇)

| 类别 | 文章标题 | 目标子站 |
|------|----------|----------|
| High Traffic | 《2026 现代 Linux 生产力工具推荐》 | Linux 命令词库 |
| Privacy | 《如何本地离线处理 JSON 格式化以保护商业机密》 | tool 子站 |
| High CPC | 《新加坡云服务器延迟测评与开发者选购指南》 | 服务器租赁广告 |
| Trend | 《AI Prompt Engineering: 如何写出完美的 Shell 脚本生成指令》 | ai 子站 |
| Finance | 《自由职业者项目报价策略与时薪计算器》 | calc 子站 |

### 6.2 法律与合规 (必读项)

- **Privacy Policy**：明确说明"工具站所有数据均在浏览器本地处理，不上传服务器"
- **About Us**：展示站点专业性
