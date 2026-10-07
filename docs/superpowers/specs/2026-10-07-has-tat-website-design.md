# HAS-TAT Aktar & Kuruyemiş Web Sitesi Tasarım Spesifikasyonu (Design Spec)

**Tarih:** 2026-10-07  
**Marka:** HAS-TAT Aktar & Kuruyemiş (Bartın)  
**Hedef:** Ultra lüks, modern organik, mobil uyumlu, interaktif kurumsal vitrin ve hibrit e-ticaret (WhatsApp siparişli) platformu.

---

## 1. Marka Kimliği ve Tasarım Dili

- **Tasarım Felsefesi:** Warm Organic Luxury (Organik Modernizm ve Minimalist Lüks).
- **Renk Paleti:**
  - `bg-cream` / Keten: `#FDFBF7`
  - `forest-green` / Koyu Orman Yeşili: `#1B382B`
  - `nut-gold` / Kavrulmuş Fındık & Bal: `#D49B44`
  - `terra-cotta` / Toprak Kiremit: `#C86446`
  - `espresso` / Koyu Kahve-Siyah: `#1A1615`
  - `soft-beige` / Krem Vurgu: `#F4EFE6`
- **Tipografi:**
  - Başlıklar: Cormorant Garamond / Playfair Display (Serif, asil, lüks)
  - Gövde Metinleri: Plus Jakarta Sans / Inter (Temiz, son derece okunaklı)

---

## 2. Gerçek Mağaza Bilgileri (Görsel Verisi)

- **İşletme Adı:** HAS-TAT AKTAR & KURUYEMİŞ
- **Puan / İtibar:** 5.0 ★★★★★ (10 Google Yorumu)
- **Adres:** Bülent Ecevit Bulvarı, 15 Temmuz Şehitler Okulu Karşısı, 74100 Merkez / Bartın
- **Telefon:** 0507 200 00 28
- **WhatsApp Hattı:** 905072000028
- **Mağaza Özellikleri:** Taze kavrum kuru yemişler, doğal şifalı bitkiler, petek ballar, soğuk sıkım yağlar, baharatlar.

---

## 3. Teknoloji Yığını (Tech Stack)

- **Frontend:** React 18, TypeScript, Vite
- **Stil & Tasarım:** Tailwind CSS, PostCSS, Autoprefixer
- **İkonlar & Animasyonlar:** Lucide React, Framer Motion (akıcı sayfa geçişleri, drawer animasyonları, buton mikro etkileşimleri)
- **Durum Yönetimi:** React Context / Custom Hooks (Sepet, ürün arama, modal ve şifa rehberi filtreleri)

---

## 4. Sayfa ve Bileşen Mimarisi

1. **Top Bar & Navigation (Header):**
   - Bartın yerel teslimat & Türkiye geneli taze kargo duyuru bandı.
   - Logo ("HAS-TAT" zarif serif monogram & tipografi).
   - Menü linkleri: Ana Sayfa, Kuruyemiş, Şifalı Bitkiler, Baharatlar, Şifa Rehberi, Bartın Mağazamız, İletişim.
   - Hızlı Arama, Mağaza İletişim Butonu ve Rozetli Sepet Çekmecesi Butonu.

2. **Hero Section:**
   - Lüks editoryal arka plan, zarif altın ve yeşil tonlar.
   - Vurgulu manşet: *"Doğanın Saf Şifası ve En Taze Kavrum Lezzetler Sofranızda"*.
   - Hızlı aksiyon butonları: "Kataloğu İncele", "Şifa Rehberiyle Keşfet".

3. **Güven Rozetleri (Brand Pillars):**
   - 5.0 Google Müşteri Memnuniyeti
   - Günlük Taze Kavrum & Tazelik Garantisi
   - %100 Katkısız & Organik Baharatlar
   - Özel Hava Almaz Kilitli/Vakumlu Ambalaj

4. **İnteraktif "Şifa & İhtiyaç Rehberi" (Remedy Assistant):**
   - İhtiyaç kategorileri:
     - Bağışıklık & Kış Kalkanı
     - Mide & Sindirim Rahatlığı
     - Doğal Enerji & Zindelik
     - Derin Uyku & Rahatlama
     - Cilt, Saç & Doğal Güzellik
   - Ziyaretçi ihtiyacı seçtiğinde, aktarın uzman tavsiyesiyle eşleşen bitki çayı, baharat ve soğuk sıkım yağları reçete formatında önerir.

5. **Ürün Kataloğu & Dinamik Filtreleme:**
   - Kategoriler:
     - Taze Kuruyemişler (Fıstık, fındık, kaju, badem, ceviz içi)
     - Şifalı Bitkiler & Kış Çayları (Ihlamur, adaçayı, papatya, kış çayı)
     - Doğal Baharatlar & Çeşniler (Pul biber, sumak, zerdeçal, tane karabiber)
     - Soğuk Sıkım Yağlar (Çörek otu yağı, kantaron yağı, zeytinyağı)
     - Doğal Bal, Pekmez & Macunlar (Karakovan petek balı, andız pekmezi, mesir macunu)
   - Her üründe:
     - Gramaj seçimi (250g, 500g, 1000g) ile dinamik fiyatlama
     - Sepete ekleme butonu
     - "Hızlı İncele" modalı (faydaları, kullanım tavsiyesi, saklama şekli)

6. **Lüks Sepet Çekmecesi & WhatsApp Sipariş Entegrasyonu (Cart Drawer):**
   - Kayar çekmece (Slide-over drawer).
   - Eklenen ürünler, gramajlar, adetler ve dinamik sepet toplamı.
   - Ziyaretçi Ad-Soyad, Telefon ve Adres/Not bilgi alanları.
   - Tek tıkla `wa.me/905072000028` linkine formatlı sipariş metni üretme:
     *"Merhaba HAS-TAT Aktar, web sitenizden sipariş vermek istiyorum: [Ürünler + Gramajlar + Toplam Tutar + Adres]"*.

7. **Bartın Mağazamız & Google 5.0 Deneyimi:**
   - Gerçek dükkan fotoğrafı ve Google harita görünümü.
   - Adres: Bülent Ecevit Bulvarı, Bartın Merkez.
   - Yol Tarifi Al ve Hemen Ara (`0507 200 00 28`) doğrudan butonları.
   - Google doğrulanmış müşteri yorumları (5.0 yıldız).

8. **Footer & İletişim:**
   - Çalışma saatleri (Haftanın her günü 08:30 - 21:00).
   - Sosyal medya, e-posta, hızlı linkler, kurumsal haklar.
