# SkipDram Product Docs

# SkipDram Product Documentation (v1.0)

## Overview

This is the implementation plan, app flow, and design spec for SkipDram — a travel blogging and recommendation platform for Skippers (travel creators) and Drammers (travel consumers).

***

## 1. 🔨 Step-by-Step Implementation Plan

### Phase 1: MVP Foundation (4–6 weeks)

| Week | Area             | Task                                            | Tool Suggestion                 |
| ---- | ---------------- | ----------------------------------------------- | ------------------------------- |
| 1    | ✅ Auth           | Setup OAuth (Google login)                      | Auth.js, Supabase Auth          |
| 1    | ✅ CMS            | Choose and set up CMS                           | Payload CMS or Supabase DB      |
| 2    | 📝 Blogging      | Markdown post editor with image upload          | TipTap or MDX, Supabase Storage |
| 2    | 🧑‍🚀 User Roles | Skipper/Drammer separation logic                | Add role field to user DB       |
| 3    | 🗺 Map           | Add AmCharts world map + fake data              | amCharts v5                     |
| 4    | 📊 Follower Data | Connect SocialBlade API with static input       |                                 |
| 4    | 🏆 Badge Logic   | Create badge thresholds based on follower count |                                 |
| 5    | 🧭 Nav/UI        | Create layout: navbar, footer, homepage         | Astro components                |
| 6    | 📤 Deploy        | Deploy to production                            | Vercel or Netlify               |

### Phase 2: Social & Recommendations (3–5 weeks)

| Week | Area               | Task                                           |
| ---- | ------------------ | ---------------------------------------------- |
| 1    | 🧠 Social API      | Connect YouTube OAuth → fetch subscriber count |
| 1    | 📈 Follower Sync   | Schedule CRON jobs to re-fetch stats           |
| 2    | 📚 Travel Guides   | Add guide creation UI                          |
| 3    | 🎯 Personalization | Add tags + filter logic                        |
| 4    | 🤖 AI Phase 0      | Use OpenAI to generate draft itineraries       |
| 5    | 🧪 Beta Testing    | Invite small group for feedback                |

### Phase 3: Monetization & Growth (4–6 weeks)

| Week | Area                 | Task                                  |
| ---- | -------------------- | ------------------------------------- |
| 1    | 💳 Payments          | Add Stripe for premium upgrades       |
| 2    | 🛒 Affiliate         | Integrate affiliate link system       |
| 3    | 📈 Skipper Analytics | Add stats dashboard                   |
| 4    | 🌐 SEO               | Astro SEO config + sitemap            |
| 5    | 📣 Marketing         | Landing page, email capture, outreach |

***

## 2. 🧭 App Flow: User Journeys & Screens

### Skipper Journey

* `/signup`
* `/dashboard/skipper`
* `/post/new`
* `/profile/[username]`
* `/map`
* `/upgrade`

### Drammer Journey

* `/signup`
* `/dashboard/drammer`
* `/explore`
* `/guide/[slug]`
* `/ai-planner` (future)

### Core App Pages

* `/` — Landing
* `/dashboard` — Role-specific
* `/map` — Map visualization
* `/explore` — Browse guides
* `/upgrade` — Monetization
* `/terms`, `/privacy`, `/contact`

***

## 3. 🎨 Design Guidelines

### Colors

| Purpose    | Color       | Hex     |
| ---------- | ----------- | ------- |
| Primary    | Warm Coral  | #FF6B6B |
| Accent     | Deep Indigo | #4E4FEB |
| Background | Off-white   | #FAFAFA |
| Text       | Charcoal    | #2C2C2C |
| YouTube    | Red         | #FF0000 |
| TikTok     | Aqua        | #25F4EE |
| Instagram  | Purple      | #C13584 |

### Typography

| Use      | Font            | Size   | Weight  |
| -------- | --------------- | ------ | ------- |
| Headings | Inter           | 2xl-xl | 700     |
| Body     | Inter           | base   | 400-500 |
| Code     | Source Code Pro | sm     | 400     |

### Spacing (4pt system)

* s1: 4px
* s2: 8px
* s3: 16px
* s4: 24px
* s5: 32px
* s6: 48px

### Components

* Cards: `rounded-2xl`, `shadow-md`, `p-4`
* Buttons: `bg-primary text-white`, `rounded-xl`
* Inputs: `rounded-md`, `px-4 py-2`

### Animation

* Page fade-in: `opacity 0.3s ease`
* Hover scale: `scale(1.02)`
* Badge reveal: `pop + confetti`
* Map hover: `tooltip + pulse`

***
