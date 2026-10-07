# HAS-TAT Admin & Canlı İçerik Yönetim Paneli Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** HAS-TAT web sitesindeki tüm alanların dinamik olarak düzenlenebilmesini sağlayan, `#/admin` rotasında çalışan kapsamlı Admin ve CMS panelini inşa etmek.

**Architecture:** React Context tabanlı `SiteDataContext` ile tüm mağaza, hero, rozetler, ürünler, kürler ve yorumları reaktif olarak yönetme. `localStorage` kalıcılığı ile sıfır sunucu bağımlılığı ve anlık senkronizasyon.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti.

**Spec:** [docs/superpowers/specs/2026-10-07-admin-cms-panel-design.md](file:///c:/Users/A/Desktop/KOLAYWEBCİ/kuruyemiş/docs/superpowers/specs/2026-10-07-admin-cms-panel-design.md)

---

### Task 1: CMS Tipleri ve Varsayılan Veri Yapısı
**Files:**
- Create: `src/types/cms.ts`
- Create: `src/data/defaultCms.ts`

- [ ] **Step 1: HeroConfig, TrustBadgeConfig, AdminTab ve CMS veri tiplerini tanımla**
- [ ] **Step 2: Mevcut verileri temel alan varsayılan CMS başlangıç verisini hazırla**

---

### Task 2: Reaktif Site Veri Yönetimi (SiteDataContext)
**Files:**
- Create: `src/context/SiteDataContext.tsx`

- [ ] **Step 1: storeInfo, heroData, trustBadges, products, remedies, reviews durumlarını ve güncelleme metotlarını yaz**
- [ ] **Step 2: LocalStorage senkronizasyonu, JSON export/import ve fabrika ayarlarına sıfırlama mantığını ekle**

---

### Task 3: Rota Yönetimi ve Yönetici Giriş Ekranı (Admin Auth)
**Files:**
- Create: `src/hooks/useAdminAuth.ts`
- Create: `src/components/admin/AdminLogin.tsx`

- [ ] **Step 1: Hash / URL rotasını dinleyen ve şifreli oturum durumunu yöneten hook oluştur**
- [ ] **Step 2: Lüks, şifre korumalı Yönetici Giriş ekranını kodla**

---

### Task 4: Admin Paneli İskeleti ve Navigasyon
**Files:**
- Create: `src/components/admin/AdminSidebar.tsx`
- Create: `src/components/admin/AdminLayout.tsx`

- [ ] **Step 1: Sekmeler arası geçişi sağlayan modern Admin Sidebar oluştur**
- [ ] **Step 2: Üst başlık çubuğu, "Siteye Dön" ve "Çıkış Yap" butonlarını barındıran AdminLayout tasarla**

---

### Task 5: Mağaza, Hero ve Rozet Yönetim Sekmeleri
**Files:**
- Create: `src/components/admin/tabs/StoreInfoTab.tsx`
- Create: `src/components/admin/tabs/HeroBannerTab.tsx`
- Create: `src/components/admin/tabs/TrustBadgesTab.tsx`

- [ ] **Step 1: Telefon, adres, Google puanı, çalışma saatleri düzenleme formunu oluştur**
- [ ] **Step 2: Duyuru bandı, Hero başlıkları, alt metinler ve görsel linki editörünü yaz**
- [ ] **Step 3: 4 adet güven rozeti düzenleme formunu oluştur**

---

### Task 6: Kapsamlı Ürün Yönetimi (CRUD & Gramaj Editörü)
**Files:**
- Create: `src/components/admin/tabs/ProductManagerTab.tsx`
- Create: `src/components/admin/ProductEditModal.tsx`

- [ ] **Step 1: Ürün arama, kategori filtresi, hızlı fiyat düzenleme ve silme tablosunu oluştur**
- [ ] **Step 2: Yeni ürün ekleme ve düzenleme modalını (dinamik gramaj & fiyat satırları, görsel önizleme, fayda listesi) tamamla**

---

### Task 7: Şifa Rehberi, Yorumlar ve Ayarlar Sekmeleri
**Files:**
- Create: `src/components/admin/tabs/RemediesTab.tsx`
- Create: `src/components/admin/tabs/ReviewsTab.tsx`
- Create: `src/components/admin/tabs/SettingsTab.tsx`

- [ ] **Step 1: Şifa kategorilerini ve reçete metinlerini düzenleme formunu yaz**
- [ ] **Step 2: Google yorumu ekleme/silme yönetimini ekle**
- [ ] **Step 3: JSON yedek indirme, yedekten yükleme, şifre değiştirme ve fabrika ayarlarına dönme panelini kodla**

---

### Task 8: Canlı Sitedeki Bileşenlerin Dinamik Veriye Bağlanması
**Files:**
- Modify: `src/components/layout/TopBanner.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/components/home/TrustBadges.tsx`
- Modify: `src/components/remedy/RemedyAssistant.tsx`
- Modify: `src/components/products/ProductCatalog.tsx`
- Modify: `src/components/store/StoreSection.tsx`
- Modify: `src/components/store/GoogleReviews.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

- [ ] **Step 1: Tüm vitrin bileşenlerini statik veriler yerine SiteDataContext üzerinden besle**
- [ ] **Step 2: App.tsx içinde `#/admin` rotasını dinleyip Admin paneli ile vitrin arasında pürüzsüz geçiş sağla**
- [ ] **Step 3: Footer ve Navbar'a yetkili giriş linki ekle**

---

### Task 9: Derleme Doğrulaması ve Test
- [ ] **Step 1: `npm run build` ile TypeScript ve Vite derlemesini doğrula**
- [ ] **Step 2: Git commit kaydını tamamla**
