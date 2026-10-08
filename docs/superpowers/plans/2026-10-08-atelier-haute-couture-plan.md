# Atelier Haute-Couture Botanique Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** HAS-TAT Aktar & Kuruyemiş web sitesini 20 yıllık baş tasarımcı vizyonuyla lüks gurme evi estetiğinde, 3D tilt kartlar, mouse takip eden altın parıltı, süzülen botanik parçacıklar, canlı fırın radarı ve büyüleyici mikro animasyonlarla benzersiz kılmak.

**Architecture:** Saf CSS GPU ivmelendirmesi (`transform: perspective`, `rotate3d`, `will-change`) ve HTML5 Canvas ile 60 FPS garantili, hafif, mevcut `SiteDataContext` ve `CartContext` mimarisiyle %100 uyumlu modüler React bileşenleri.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React, Canvas-Confetti, Vite.

**Spec:** `docs/superpowers/specs/2026-10-08-atelier-haute-couture-design.md`

## Global Constraints

- Sıfır harici ağır kütüphane bağımlılığı (bundle boyutu ve hızı korumak için saf React/CSS/Canvas).
- 60 FPS akıcılık ve dokunmatik cihazlarda (mobilde) otomatik zarif fallback.
- Mevcut CMS verilerinin ve `#admin` panelinin eksiksiz çalışır kalması.
- TypeScript derlemesinin (`npm run build`) sıfır hata ile tamamlanması.

---

### Task 1: Ambiyans Efekt Sistemi (Mouse Spotlight Glow & Floating Botanical Canvas)

**Files:**
- Create: `src/components/effects/MouseSpotlightGlow.tsx`
- Create: `src/components/effects/BotanicalCanvas.tsx`
- Modify: `src/index.css`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `<MouseSpotlightGlow />` — tam sayfa mouse takip eden yumuşak altın aura.
- Produces: `<BotanicalCanvas />` — hero arkasında süzülen botanik polen ve altın zerre canvas'ı.

- [ ] **Step 1: Write `src/components/effects/MouseSpotlightGlow.tsx`**
Implement the mouse spotlight component tracking pointer with smooth lerp interpolation and touch detection.

- [ ] **Step 2: Write `src/components/effects/BotanicalCanvas.tsx`**
Implement the canvas particle system generating gentle floating gold and leaf particles with `requestAnimationFrame`.

- [ ] **Step 3: Update `src/index.css`**
Add luxury glass, shimmer animation, gold gradient utility classes.

- [ ] **Step 4: Integrate into `src/App.tsx`**
Mount `MouseSpotlightGlow` and verify integration.

- [ ] **Step 5: Run build verification**
Run: `npm run build`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit**
`git add src/components/effects/ src/index.css src/App.tsx`
`git commit -m "feat(effects): add mouse spotlight glow and botanical canvas"`

---

### Task 2: 3D Tilt Kart Sarmalayıcısı (`TiltCard.tsx`)

**Files:**
- Create: `src/components/effects/TiltCard.tsx`

**Interfaces:**
- Produces: `<TiltCard maxTilt={6} glare={true}>{children}</TiltCard>`
- Handles: `onMouseMove`, `onMouseLeave`, calculates `rotateX`, `rotateY`, applies dynamic glare reflection.

- [ ] **Step 1: Write `src/components/effects/TiltCard.tsx`**
Implement the component with hardware-accelerated 3D perspective transforms and dynamic radial specular sheen.

- [ ] **Step 2: Run build verification**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**
`git add src/components/effects/TiltCard.tsx`
`git commit -m "feat(effects): add 3D TiltCard wrapper with dynamic glare"`

---

### Task 3: Canlı Taze Fırın Radarı & HeroSection Yükseltmesi

**Files:**
- Create: `src/components/home/LiveRoastBadge.tsx`
- Modify: `src/components/home/HeroSection.tsx`

**Interfaces:**
- Produces: `<LiveRoastBadge />`
- Consumes: `TiltCard`, `BotanicalCanvas`, `useSiteData`

- [ ] **Step 1: Write `src/components/home/LiveRoastBadge.tsx`**
Implement pulsing fresh roast radar with steam micro-icon, freshness indicator, and smooth scroll to nuts section.

- [ ] **Step 2: Upgrade `src/components/home/HeroSection.tsx`**
Integrate `BotanicalCanvas`, `LiveRoastBadge`, wrap hero showcase card in `TiltCard`, enhance typography and gold badge accents.

- [ ] **Step 3: Run build verification**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**
`git add src/components/home/`
`git commit -m "feat(hero): elevate hero section with live roast badge and 3D cards"`

---

### Task 4: Güven Rozetleri ve Şifa Rehberi 3D & Lüks Dönüşümü

**Files:**
- Modify: `src/components/home/TrustBadges.tsx`
- Modify: `src/components/remedy/RemedyAssistant.tsx`

**Interfaces:**
- Consumes: `TiltCard`, `useCart`, `useSiteData`

- [ ] **Step 1: Upgrade `src/components/home/TrustBadges.tsx`**
Wrap badges in `TiltCard`, add glowing icon hover, gold accent borders, and luxury micro-typography.

- [ ] **Step 2: Upgrade `src/components/remedy/RemedyAssistant.tsx`**
Style tabs with gold leaf icons, wrap recipe card and product recommendations in `TiltCard`, add celebration animation when "Tüm Kürü Ekle" is clicked.

- [ ] **Step 3: Run build verification**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**
`git add src/components/home/TrustBadges.tsx src/components/remedy/RemedyAssistant.tsx`
`git commit -m "feat(remedy): elevate trust badges and remedy assistant with 3D tilt"`

---

### Task 5: Lüks Ürün Kartı, Filtreler & Hızlı İnceleme Modalı

**Files:**
- Modify: `src/components/products/ProductCard.tsx`
- Modify: `src/components/products/ProductCatalog.tsx`
- Modify: `src/components/products/ProductModal.tsx`

**Interfaces:**
- Consumes: `TiltCard`, `useCart`, `useSiteData`

- [ ] **Step 1: Upgrade `src/components/products/ProductCard.tsx`**
Wrap cards in `TiltCard`, add luxury origin badge, smooth weight selector with gold ring, confetti particle burst on "Sepete Ekle".

- [ ] **Step 2: Upgrade `src/components/products/ProductCatalog.tsx`**
Add luxury category pill styles with active gold glow, smooth count badges, and refined filter bar.

- [ ] **Step 3: Upgrade `src/components/products/ProductModal.tsx`**
Enhance modal with gold mühür (apothecary seal), image zoom preview, tabs for "Aktar Tavsiyesi" & "Faydaları", and direct WhatsApp inquiry link.

- [ ] **Step 4: Run build verification**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**
`git add src/components/products/`
`git commit -m "feat(products): elevate product cards, catalog filters and modal"`

---

### Task 6: Mağaza Vitrini, Google Yorumları & Lüks Genel Cila

**Files:**
- Modify: `src/components/store/StoreSection.tsx`
- Modify: `src/components/store/GoogleReviews.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `TiltCard`, `useSiteData`

- [ ] **Step 1: Upgrade `src/components/store/StoreSection.tsx` and `GoogleReviews.tsx`**
Wrap store showcase in `TiltCard`, add 5.0 Google gold plaque, style verified buyer reviews with star sheen.

- [ ] **Step 2: Polish `src/components/layout/Navbar.tsx` & `Footer.tsx`**
Add subtle gold borders, smooth dropdown transition, glowing cart count badge, and luxury footer seal.

- [ ] **Step 3: Run comprehensive build & type check**
Run: `npm run build`
Expected: PASS with 0 TypeScript or bundle errors.

- [ ] **Step 4: Commit**
`git add src/components/store/ src/components/layout/`
`git commit -m "feat(store): elevate store showcase, reviews, navbar and footer"`
