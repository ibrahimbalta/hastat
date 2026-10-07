# HAS-TAT Aktar & Kuruyemiş Web Sitesi Uygulama Planı (Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** HAS-TAT Aktar & Kuruyemiş için ultra lüks, estetik, mobil uyumlu ve WhatsApp sipariş entegrasyonlu modern web sitesini eksiksiz inşa etmek.

**Architecture:** Vite + React 18 (TypeScript) mimarisi üzerine kurulu tek sayfa / modüler SPA. Tailwind CSS ile organik lüks renk paleti ve tipografi sistemi. React Context ile sepet, filtreleme ve modal durum yönetimi. Lucide React ve Framer Motion ile mikro animasyonlar.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Framer Motion, Canvas Confetti.

**Spec:** [docs/superpowers/specs/2026-10-07-has-tat-website-design.md](file:///c:/Users/A/Desktop/KOLAYWEBCİ/kuruyemiş/docs/superpowers/specs/2026-10-07-has-tat-website-design.md)

## Global Constraints

- Marka Renkleri: Primary Keten `#FDFBF7`, Koyu Orman Yeşili `#1B382B`, Bal/Fındık Altını `#D49B44`, Kiremit `#C86446`, Espresso `#1A1615`.
- Mağaza Bilgileri: HAS-TAT AKTAR & KURUYEMİŞ, Bülent Ecevit Bulvarı, 15 Temmuz Şehitler Okulu Karşısı, Bartın Merkez. Tel: 0507 200 00 28.
- WhatsApp Sipariş Numarası: 905072000028.
- Tipografi: Playfair Display / Cormorant Garamond serif başlıklar, Plus Jakarta Sans gövde metinleri.

---

### Task 1: Scaffolding Vite + React + TypeScript + Tailwind CSS

**Files:**
- Create: `package.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`, `index.html`, `src/index.css`, `src/main.tsx`

- [ ] **Step 1: Scaffolding Vite React TypeScript projesi oluştur ve bağımlılıkları yükle**
- [ ] **Step 2: Tailwind CSS, Lucide React ve Framer Motion kurulumunu tamamla**
- [ ] **Step 3: Google Fonts (Cormorant Garamond, Plus Jakarta Sans) ve renk paletini tailwind.config.js dosyasına tanımla**
- [ ] **Step 4: Vite dev sunucusunu test et ve başarılı derlendiğini doğrula**

---

### Task 2: Veri Modelleri ve Zengin İçerik (Types & Data)

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/products.ts`
- Create: `src/data/remedies.ts`
- Create: `src/data/storeInfo.ts`

- [ ] **Step 1: Product, CartItem, Remedy, Review tip tanımlarını oluştur**
- [ ] **Step 2: Taze Kuruyemiş, Baharat, Şifalı Otlar, Soğuk Sıkım Yağlar ürün listesini (fiyatlar, gramajlar, açıklamalar, görseller) hazırla**
- [ ] **Step 3: "Şifa & İhtiyaç Rehberi" için semptom ve doğal çözüm önerileri veri setini oluştur**
- [ ] **Step 4: Bartın mağazası Google 5.0 yorumları ve iletişim verilerini tanımla**

---

### Task 3: Sepet ve Uygulama Durum Yönetimi (Cart Context)

**Files:**
- Create: `src/context/CartContext.tsx`

- [ ] **Step 1: Sepete ekle, çıkar, miktar güncelle, sepeti temizle fonksiyonları içeren CartContext yaz**
- [ ] **Step 2: Gramaj bazlı dinamik fiyat hesaplama mantığını doğrula**
- [ ] **Step 3: LocalStorage persistansı ekle**

---

### Task 4: Navigasyon ve Üst Bar (Header & TopBar)

**Files:**
- Create: `src/components/layout/TopBanner.tsx`
- Create: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Bartın içi hızlı teslimat ve kargo duyuru bandını oluştur**
- [ ] **Step 2: Lüks serif logolu, navigasyon linkli, arama ve sepet sayaçlı Navbar bileşenini tasarla**
- [ ] **Step 3: Mobil hamburger menü etkileşimini ekle**

---

### Task 5: Hero Bölümü ve Değer Önerileri (Hero & Trust Badges)

**Files:**
- Create: `src/components/home/HeroSection.tsx`
- Create: `src/components/home/TrustBadges.tsx`

- [ ] **Step 1: Hero görseli, editoryal başlık, etiketler ve CTA butonları barındıran HeroSection oluştur**
- [ ] **Step 2: Google 5.0 Yıldız, Günlük Taze Kavrum, %100 Doğallık güven rozetlerini tasarla**

---

### Task 6: İnteraktif Şifa & İhtiyaç Rehberi (Remedy Finder)

**Files:**
- Create: `src/components/remedy/RemedyAssistant.tsx`

- [ ] **Step 1: İhtiyaç sekmeleri (Bağışıklık, Mide, Enerji, Uyku, Cilt) ile filtreleme arayüzünü oluştur**
- [ ] **Step 2: Seçilen ihtiyaca özel doğal şifa reçetesi kartlarını ve doğrudan sepete ekleme butonlarını bağla**

---

### Task 7: Ürün Kataloğu, Gramaj Seçimi ve Hızlı İnceleme Modalı

**Files:**
- Create: `src/components/products/ProductCard.tsx`
- Create: `src/components/products/ProductCatalog.tsx`
- Create: `src/components/products/ProductModal.tsx`

- [ ] **Step 1: Ürün kartı (görsel, gramaj hapları, dinamik fiyat, sepete ekle butonu) bileşenini yaz**
- [ ] **Step 2: Kategori filtreleme ve anlık arama desteğiyle ürün kataloğunu oluştur**
- [ ] **Step 3: Tıklanınca açılan detay modalını (faydalar, saklama, kullanım) hazırla**

---

### Task 8: Bartın Mağazası & Google 5.0 Müşteri Yorumları

**Files:**
- Create: `src/components/store/StoreSection.tsx`
- Create: `src/components/store/GoogleReviews.tsx`

- [ ] **Step 1: Gerçek dükkan fotoğrafını, adres bilgisini ve doğrudan yol tarifi / arama butonlarını oluştur**
- [ ] **Step 2: Google 5.0 puan rozetini ve müşteri değerlendirmelerini sergile**

---

### Task 9: Lüks Sepet Çekmecesi & WhatsApp Sipariş Çözümü

**Files:**
- Create: `src/components/cart/CartDrawer.tsx`
- Create: `src/utils/whatsapp.ts`

- [ ] **Step 1: Slide-over animasyonlu sepet çekmecesini oluştur**
- [ ] **Step 2: Müşteri Ad, Telefon ve Adres giriş formunu ekle**
- [ ] **Step 3: WhatsApp sipariş fişi metni oluşturup `wa.me/905072000028` linkini açan algoritmayı kodla**

---

### Task 10: Footer, Yüzen WhatsApp Düğmesi ve Üretim Derlemesi

**Files:**
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/common/FloatingWhatsApp.tsx`
- Create: `src/App.tsx`

- [ ] **Step 1: Kapsamlı Footer ve sabit WhatsApp destek düğmesini ekle**
- [ ] **Step 2: Tüm bileşenleri App.tsx içinde birleştir**
- [ ] **Step 3: `npm run build` ile üretim derlemesini doğrula ve hatasız çalıştığını test et**
