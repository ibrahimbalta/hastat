# Mimari Tasarım Dokümanı: HAS-TAT "Atelier Haute-Couture Botanique" Lüks Tasarım & Efekt Mimarisi

- **Tarih:** 2026-10-08
- **Proje:** HAS-TAT Aktar & Kuruyemiş (Bartın)
- **Vizyon:** 20 yıllık baş tasarımcı ve sanat yönetmeni vizyonuyla, ziyaretçiyi ilk saniyede büyüleyen, uluslararası lüks gurme evleri standardında interaktif, 3D derinlikli ve akıcı bir aktar/kuruyemiş web deneyimi.

---

## 1. Görsel Atmosfer & Estetik Mimarisi

### 1.1 Renk Paleti & Doku
- **Zümrüt Yeşili Derinliği:** `#0B1B13` (koyu zümrüt gece), `#1B382B` (marka ana zümrüdü), `#27523E` (ipeksi vurgu yeşili).
- **Fırçalanmış Varak Altın:** `#D49B44` (fırçalanmış kehribar altın), `#F3C978` (altın parıltı), `#8C5A14` (derin altın gölge).
- **İpeksi Parşömen & Alabaster Krem:** `#FAF7F2` (lüks ipeksi zemin), `#F4EFE6` (sıcak krem kart zeminleri), `#EAE3D2` (zarif sınır çizgileri).
- **Tipografi:** Başlıklarda yüksek prestijli serif `Cormorant Garamond` (italik ve display varyasyonlarıyla), gövdede ultra okunabilir `Plus Jakarta Sans`.

### 1.2 İnteraktif Ambiyans & Efekt Sistemi
- **Mouse Spotlight Glow (`MouseSpotlightGlow.tsx`):**
  - Sayfa boyunca fare imlecini takip eden, pürüzsüz yaylanma (linear interpolation / lerp) ile çalışan 450px yarıçaplı radial altın ışık aurası (`rgba(212, 155, 68, 0.08)`).
  - Karanlık hero alanında ve aydınlık ürün bölümlerinde farklı ışık şiddeti.
  - Dokunmatik ekranlarda (touch devices) performans için otomatik statik ambiyansa geçiş.
- **Süzülen Botanik & Altın Polenleri (`BotanicalCanvas.tsx`):**
  - Hero bölümünün arkasında hafifçe dönen, süzülen altın ışıltılar ve stilize botanik parçacıklar.
  - HTML5 Canvas ve `requestAnimationFrame` tabanlı, 60 FPS garantili, sıfır CPU ağırlıklı sistem.

---

## 2. Bileşen Mimarisi & İmza Özellikler

### 2.1 3D Tilt Kart Mimarisi (`TiltCard.tsx`)
- **İşlev:** İçerisine sarılan herhangi bir bileşene (ürün kartı, rozet, kür kutusu) derinlikli 3D perspektif eğilme ve dinamik cam parıltısı (specular glare) kazandırır.
- **Mekanizma:**
  - `onMouseMove` ile kartın genişlik/yükseklik ve merkez koordinatlarına göre `rotateX` ve `rotateY` (maksimum ±6 derece) hesaplanır.
  - Kartın üzerine fare açısına göre hareket eden saydam beyaz-altın yansıma gradyanı (`linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)`) düşer.
  - `onMouseLeave` durumunda kart pürüzsüzce normal konumuna geri döner.
- **Entegrasyon Alanları:**
  - `ProductCard.tsx` (Tüm ürün kartları)
  - `TrustBadges.tsx` (4 adet güven rozeti)
  - `RemedyAssistant.tsx` (Şifa kürü kartları)
  - `StoreSection.tsx` (Bartın mağaza vitrin kartı)

### 2.2 Canlı Taze Fırın / Kavrum Göstergesi (`LiveRoastBadge.tsx`)
- **İşlev:** Hero bölümünde yer alan, fırından yeni çıkmış sıcak kuruyemiş tazeliğini hissettiren dinamik rozet.
- **Özellikler:**
  - Nabız gibi atan kor altın ışık efekti (`animate-pulse`).
  - Minik duman/sıcaklık dalgası mikro ikonu.
  - "🔥 Fırından Yeni Çıktı: Taze Çifte Kavrulmuş Fındık (Son Parti: 12 dk önce)" mesajı.
  - Tıklandığında doğrudan fırın kuruyemiş kategorisine pürüzsüz kaydırma.

### 2.3 Gelişmiş Ürün Kartı Deneyimi (`ProductCard.tsx`)
- 3D Tilt ve cam parıltısı entegrasyonu.
- Görsel üzerinde asil altın mühür etiketleri ("Taş Değirmen", "İlk Soğuk Sıkım", "Taze Fırın").
- Gramaj seçiminde altın çerçeveli ipeksi haplar.
- Fiyat değişiminde yumuşak geçiş.
- Sepete ekleme anında mini altın ışıltı konfeti efekti ve anlık onay animasyonu.
- "Hızlı İncele" butonu ile lüks detay modalına geçiş.

### 2.4 Zenginleştirilmiş Hızlı İnceleme Modalı (`ProductModal.tsx`)
- Fotoğraf zoom/büyüteç etkisi.
- "Aktarın Özel Notu" ve "Nasıl Tüketilmeli?" rehber sekmeleri.
- Taze hasat ve orijin sertifikası rozeti.
- Tek tıkla sepete ekleme ve WhatsApp ile anında danışma butonu.

### 2.5 Şifa & İhtiyaç Rehberi Asistanı (`RemedyAssistant.tsx`)
- Saray reçetesi dokusunda parşömen kartlar.
- Kullanım sıklığı, demleme süresi ve uyarılar için stilize ikonik adımlar.
- "Tüm Kürü Tek Tıkla Sepete Ekle" toplu aksiyon butonu.

### 2.6 Mağaza Vitrini & Google Yorumları (`StoreSection.tsx`)
- 5.0 Google yıldız puanını vurgulayan altın plaka.
- Harita yol tarifi ve WhatsApp tek tıkla konum alma butonları.
- Ziyaretçi yorum kartlarında 3D tilt ve doğrulanmış müşteri mühürleri.

---

## 3. Veri Akışı ve CMS Uyumluluğu

- Mevcut `SiteDataContext` ve `CartContext` yapıları eksiksiz korunur.
- Yönetim paneli (`#admin` / `useAdminAuth`) ile tam senkronize çalışır; ürün ekleme, çıkarma, fiyat ve görsel değişiklikleri anında yansır.
- Yeni bileşenler (Canlı Fırın vb.) için akıllı varsayılanlar (`defaultCms.ts`) tanımlanır.

---

## 4. Performans & 60 FPS Standartları

- Tüm 3D ve hareket efektleri CSS GPU hızlandırması (`transform: perspective(...) rotateX(...) rotateY(...)`, `will-change: transform`) kullanır.
- Sayfa kaydırma ve mouse takibi `requestAnimationFrame` ile optimize edilmiştir; reflow veya layout thrashing oluşturmaz.
- Mobil cihazlar ve dokunmatik ekranlar `pointer: coarse` / `matchMedia` ile tespit edilir; 3D tilt kartlar mobilde statik lüks görünüme dönüştürülerek pil ve performans korunur.

---

## 5. Doğrulama ve Test Adımları

1. **TypeScript Derleme Kontrolü:** `npm run build` ile sıfır tip hatası.
2. **Animasyon & 60 FPS Testi:** Hero partikülleri, mouse spotlight ve kart tiltlerinin pürüzsüz çalışması.
3. **Fonksiyonel Testler:**
   - Gramaj değiştirme ve sepete ekleme.
   - WhatsApp sipariş metninin tam doğruluğu.
   - Kategori filtreleme ve anlık ürün arama.
   - Yönetici paneline (`#admin`) erişim ve veri düzenleme.
   - Mobil menü ve sepet çekmecesinin (CartDrawer) açılıp kapanması.
