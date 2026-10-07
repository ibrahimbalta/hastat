# HAS-TAT Admin & Canlı İçerik Yönetim Paneli (CMS) Tasarım Spesifikasyonu

**Tarih:** 2026-10-07  
**Modül:** Tam Kapsamlı Admin Paneli & Dinamik İçerik Yönetimi (CMS)  
**Erişim:** `#/admin` veya `/admin` rotası  
**Varsayılan Şifre:** `admin123`

---

## 1. Mimari Genel Bakış

Kullanıcının web sitesindeki **tüm alanları** (mağaza iletişim bilgileri, adres, çalışma saatleri, duyuru bandı, hero manşetleri, görsel URL'leri, güven rozetleri, ürünler, gramajlar, fiyatlar, şifa rehberi ve Google müşteri yorumları) tarayıcı üzerinden kolayca düzenleyebilmesini sağlayan bir reaktif yönetim sistemi (CMS) inşa edilir.

Tüm veriler `SiteDataContext` üzerinden merkezi olarak yönetilir, `localStorage`'da kalıcı hale getirilir ve sitede anında canlı olarak güncellenir.

---

## 2. Veri Modeli ve Dinamik Alanlar

1. **Mağaza Bilgileri (`storeInfo`):**
   - Mağaza adı, unvanı, telefon (`0507 200 00 28`), WhatsApp numarası, açık adres, ilçe, şehir, çalışma saatleri, Google puanı, Google Harita linki, Instagram.

2. **Hero & Duyuru Yapılandırması (`heroData`):**
   - Üst duyuru bandı metni,
   - Hero manşet satır 1, manşet satır 2,
   - Hero açıklama paragrafı,
   - Birincil ve ikincil buton metinleri,
   - Vitrin görsel URL'si (`/hero-showcase.jpg` veya özel URL).

3. **Güven Rozetleri (`trustBadges`):**
   - 4 rozetin her biri için başlık, açıklama ve vurgu etiketi.

4. **Ürün Kataloğu (`products`):**
   - Ürün ID, isim, kategori, kısa açıklama, detaylı açıklama, rozet, menşei, görsel URL'si, stok durumu,
   - Gramaj ve fiyat dizisi (`weightOptions: [{ weight: '250g', price: 285 }, ...]`),
   - Faydalar listesi, kullanım ve saklama tavsiyeleri.

5. **Şifa Rehberi (`remedies`):**
   - Başlık, slogan, açıklama, hedeflenen şikayetler, aktar reçetesi, kullanım rutini, önerilen ürün ID'leri.

6. **Google Yorumları (`reviews`):**
   - Müşteri adı, puanı, tarihi, yorum içeriği, doğrulanmış durumu.

---

## 3. Güvenlik & Yetkilendirme

- URL `#/admin` veya `/admin` olduğunda yetki kontrolü yapılır.
- Giriş yapılmamışsa şık bir **Yönetici Giriş Ekranı (Login)** gösterilir.
- Varsayılan şifre: `admin123`.
- Panel içerisinden şifre değiştirilebilir.
- Giriş yapıldığında oturum `localStorage` üzerinde saklanır.
- Panelden çıkış yapıldığında oturum sonlandırılır.

---

## 4. Admin Paneli Kullanıcı Arayüzü (UI)

- **Üst Çubuk (Header):** HAS-TAT Yönetim Konsolu logosu, "Canlı Siteyi Görüntüle ↗" butonu, bildirim rozetleri, "Çıkış Yap" butonu.
- **Sol Menü (Sidebar):**
  1. `📊 Genel Bakış`: Ürün sayısı, aktif şifa kürü sayısı, mağaza puanı, hızlı istatistikler.
  2. `🏢 Mağaza & İletişim`: Telefon, adres, saatler vb. form alanları.
  3. `📢 Hero & Duyuru`: Manşet, duyuru bandı ve görsel düzenleyici.
  4. `✨ Güven Rozetleri`: 4 temel değer metni editörü.
  5. `📦 Ürün Yönetimi`: Ürün listesi, arama, filtreleme, "Yeni Ürün Ekle" modalı, "Düzenle" ve "Sil" aksiyonları.
  6. `🌿 Şifa Rehberi`: Kür ve reçete düzenleme.
  7. `⭐ Google Yorumları`: Müşteri yorumu ekleme/düzenleme/silme.
  8. `💾 Yedekleme & Sıfırlama`: JSON Dışa Aktar (Export), JSON İçe Aktar (Import), Fabrika Ayarlarına Dön.
