# Design

## Overview

形场是一个中文时尚行业协作平台。当前界面是 Bonjour.bio 参考方向的浅色小程序壳：白底、大号黑体、蓝色感叹号、轻边框、圆角胶囊筛选、顶部状态栏、右上角胶囊操作区、移动端抽屉和左侧可折叠四栏导航。页面支持中文和英文切换，Network、工作、Submit 等任务板块保持同一套浅色视觉，不使用黑底页面。图片继续承担时尚行业属性，UI 本身保持清晰、像一个可以马上登录使用的移动产品。

## Color

```css
:root {
  --bg: oklch(0.988 0 0);
  --surface: oklch(1 0 0);
  --surface-2: oklch(0.965 0 0);
  --surface-3: oklch(0.93 0 0);
  --ink: oklch(0.115 0 0);
  --muted: oklch(0.48 0 0);
  --faint: oklch(0.68 0 0);
  --line: oklch(0.89 0 0);
  --line-strong: oklch(0.78 0 0);
  --primary: oklch(0.58 0.22 255);
  --primary-soft: oklch(0.955 0.035 255);
  --accent: oklch(0.58 0.18 22);
  --success: oklch(0.68 0.18 145);
  --dark-bg: oklch(0.988 0 0);
  --dark-card: oklch(1 0 0);
  --dark-card-2: oklch(0.965 0 0);
  --dark-line: oklch(0.89 0 0);
  --dark-ink: oklch(0.115 0 0);
  --dark-muted: oklch(0.48 0 0);
  --money: oklch(0.58 0.22 255);
}
```

## Typography

Use one system sans stack for Chinese and Latin UI: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`. Product UI uses heavy weights for titles and selected states, fixed type sizes by breakpoint, and no negative letter spacing.

## Layout

The interface is mobile-app first. Desktop centers a 430px mini-program shell so the product reads as an app preview instead of a wide marketing site. Mobile fills the viewport naturally. The app shell includes a status bar, sticky navigation row, drawer menu, collapsible left tab rail, compact hero, two-column inspiration feed, one-column Network and Job Board surfaces, and horizontally scrollable filter rails where needed. Fixed UI elements use stable dimensions so filters, buttons, images and job rows do not shift when content changes.

## Components

Primary components are status bar, top action capsule, collapsible left navigation, language toggle, drawer, search pills, people category buttons, people result filters, portfolio strip cards, job board tabs, job filters, job cards, submit call cards, upload panels, status pills and a login dialog. Cards use 8px radius, while buttons and filters can use full-pill geometry to match the reference style.

## Motion

Use short state transitions around 180 ms for tab changes, hover states and dialog entry. Respect `prefers-reduced-motion` by disabling transitions and smooth scrolling.
