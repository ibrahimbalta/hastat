import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // KURUYEMİŞ
  {
    id: "fistik-duble",
    name: "Özel Kavrum Duble Antep Fıstığı",
    category: "kuruyemis",
    categoryLabel: "Taze Kuruyemiş",
    shortDesc: "Gaziantep menşeili, iri taneli, hafif tuzlu günlük taze çıtır kavrum.",
    longDesc: "En taze hasat Gaziantep fıstıkları, ustalarımızın özel fırınlama tekniğiyle hafif tuzla çıtır çıtır kavrulur. İçi dolgun, çatlak oranı yüksek ve kesinlikle boş dane içermez.",
    badge: "Günlük Taze Kavrum",
    basePrice: 285,
    weightOptions: [
      { weight: "250g", price: 285 },
      { weight: "500g", price: 540 },
      { weight: "1000g", price: 1040 },
    ],
    rating: 5.0,
    reviewCount: 38,
    imageUrl: "https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Yüksek oranda bitkisel protein ve lif içerir",
      "Kalp ve damar sağlığını destekleyen doymamış yağlar barındırır",
      "B6 vitamini ve antioksidan zenginidir"
    ],
    usageAdvice: "Günlük ara öğünlerde 1 avuç (30g) tüketilmesi zindelik ve enerji verir.",
    storageConditions: "Hava almayan kilitli ambalajında, serin ve kuru yerde saklayınız.",
    origin: "Gaziantep / Türkiye",
    inStock: true
  },
  {
    id: "findik-giresun",
    name: "Giresun Tombul Fındık (Kavrulmuş)",
    category: "kuruyemis",
    categoryLabel: "Taze Kuruyemiş",
    shortDesc: "Dünyanın en lezzetli Giresun kalite fındığı, altın sarısı tam kavrum.",
    longDesc: "Giresun'un yüksek rakımlı bahçelerinden toplanan birinci sınıf tombul fındıklar. İnce zarlı, bol yağlı ve yoğun aromalıdır. Ağızda dağılan çıtırlığıyla benzersiz bir lezzet sunar.",
    badge: "Çok Satan",
    basePrice: 240,
    weightOptions: [
      { weight: "250g", price: 240 },
      { weight: "500g", price: 460 },
      { weight: "1000g", price: 890 },
    ],
    rating: 4.9,
    reviewCount: 29,
    imageUrl: "https://images.unsplash.com/photo-1599863339023-eb33d16858e7?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Güçlü bir E vitamini kaynağıdır, cildi besler",
      "Kötü kolesterolü dengelemeye yardımcı olur",
      "Hafıza ve odaklanmayı güçlendirir"
    ],
    usageAdvice: "Kahvaltılarda veya ikindi çayının yanında taze olarak tüketebilirsiniz.",
    storageConditions: "Oda sıcaklığında, nemsiz ortamda muhafaza ediniz.",
    origin: "Giresun / Türkiye",
    inStock: true
  },
  {
    id: "kaju-kavrulmus",
    name: "Lüks Fırınlanmış Kaju",
    category: "kuruyemis",
    categoryLabel: "Taze Kuruyemiş",
    shortDesc: "W320 sınıfı iri taneli, tereyağımsı kıvamda fırınlanmış kaju.",
    longDesc: "İthalatından hemen sonra dükkanımızda fırınlanan, düşük tuzlu ve dolgun taneli lüks kaju. Yumuşak kıvamı ve tatlımsı cevizimsi dokusuyla damakta eşsiz bir iz bırakır.",
    badge: "Lüks Seri",
    basePrice: 220,
    weightOptions: [
      { weight: "250g", price: 220 },
      { weight: "500g", price: 420 },
      { weight: "1000g", price: 810 },
    ],
    rating: 4.9,
    reviewCount: 21,
    imageUrl: "https://images.unsplash.com/photo-1509912760195-555375f42621?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Magnezyum ve fosfor bakımından çok zengindir",
      "Kemik gelişimini ve kas gevşemesini destekler",
      "Serotonin öncülü triptofan içerir"
    ],
    usageAdvice: "Akşamüstü atıştırmalıklarında 8-10 adet tüketilebilir.",
    storageConditions: "Ağzı kapalı kavanozda veya ambalajında saklayınız.",
    origin: "Vietnam (Özel İthalat)",
    inStock: true
  },
  {
    id: "ceviz-kelebek",
    name: "Yerli İri Kelebek Ceviz İçi",
    category: "kuruyemis",
    categoryLabel: "Taze Kuruyemiş",
    shortDesc: "Açık renkli, acılık barındırmayan saf taze kelebek ceviz içi.",
    longDesc: "Özenle kırılıp ayıklanmış, yarım kelebek formunu koruyan yerli ceviz içi. Acı tat bırakmaz, son derece taze ve yağ oranı dengelidir.",
    badge: "Doğal & Çiğ",
    basePrice: 195,
    weightOptions: [
      { weight: "250g", price: 195 },
      { weight: "500g", price: 380 },
      { weight: "1000g", price: 730 },
    ],
    rating: 5.0,
    reviewCount: 34,
    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Bitkisel Omega-3 (ALA) yağ asitleri deposudur",
      "Beyin sağlığını ve zihinsel performansı artırır",
      "Damar elastikiyetini korur"
    ],
    usageAdvice: "Her sabah aç karnına 2-3 adet ceviz içi veya ceviz suyu kürü olarak tüketebilirsiniz.",
    storageConditions: "Tazeliğini korumak için buzdolabında veya serin kilerde saklayınız.",
    origin: "Kahramanmaraş / Türkiye",
    inStock: true
  },

  // ŞİFALI BİTKİLER & ÇAYLAR
  {
    id: "kis-cayi-atom",
    name: "HAS-TAT Özel Şifa Kış Çayı",
    category: "bitkicay",
    categoryLabel: "Şifalı Bitkiler",
    shortDesc: "12 farklı tıbbi bitki, kabuk tarçın, zencefil ve hatmi çiçeği harmanı.",
    longDesc: "HAS-TAT aktarlık tecrübemizle hazırladığımız bağışıklık deposu. Ihlamur, adaçayı, zencefil, zerdeçal, havlıcan, hatmi çiçeği, kuşburnu, elma kurusu ve çubuk tarçının dengeli harmanı.",
    badge: "Özel Karışım",
    basePrice: 130,
    weightOptions: [
      { weight: "150g", price: 130 },
      { weight: "300g", price: 240 },
      { weight: "500g", price: 380 },
    ],
    rating: 5.0,
    reviewCount: 46,
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Soğuk algınlığı ve grip semptomlarına karşı korur",
      "Boğazı yumuşatır, öksürüğü hafifletir",
      "Bağışıklık mekanizmasını kuvvetlendirir"
    ],
    usageAdvice: "1 tatlı kaşığı karışımı 1 fincan kaynar suda 6-8 dakika demleyiniz. Bal ve limonla servis ediniz.",
    storageConditions: "Işık almayan kuru bir dolapta saklayınız.",
    origin: "HAS-TAT Özel Reçetesi",
    inStock: true
  },
  {
    id: "ihlamur-cicek",
    name: "Hakiki Dağ Ihlamuru (Çiçek & Yaprak)",
    category: "bitkicay",
    categoryLabel: "Şifalı Bitkiler",
    shortDesc: "Yüksek yaylalardan toplanmış, sarı çiçek oranı yüksek mis kokulu ıhlamur.",
    longDesc: "Karadeniz ve Bolu yaylalarından elle hasat edilen saf çiçek ıhlamur. Kimyasal kurutma görmemiş, gölgede kurutulmuş ve aroması ilk günkü gibi tazedir.",
    badge: "Doğal Hasat",
    basePrice: 175,
    weightOptions: [
      { weight: "100g", price: 175 },
      { weight: "250g", price: 390 },
      { weight: "500g", price: 740 },
    ],
    rating: 4.9,
    reviewCount: 27,
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Doğal terletici etkisiyle toksin atımını hızlandırır",
      "Göğsü yumuşatır ve bronşları rahatlatır",
      "Stresi azaltarak rahat bir uyku sağlar"
    ],
    usageAdvice: "Kaynar suda 5-7 dakika üstü kapalı demleyiniz. Kaynatmayınız.",
    storageConditions: "Havadar bez torbada veya cam kavanozda muhafaza ediniz.",
    origin: "Karadeniz Yaylaları",
    inStock: true
  },
  {
    id: "adacayi-tibbi",
    name: "Ege Tıbbi Adaçayı (Salvia Officinalis)",
    category: "bitkicay",
    categoryLabel: "Şifalı Bitkiler",
    shortDesc: "Geniş yapraklı, uçucu yağ oranı yüksek aromatik doğal adaçayı.",
    longDesc: "Ege dağlarından özenle toplanan geniş yapraklı şifalı adaçayı. Yoğun esansiyel yağ barındıran yapraklarıyla hem çay olarak hem de doğal boğaz gargarası olarak mükemmeldir.",
    badge: "%100 Saf",
    basePrice: 110,
    weightOptions: [
      { weight: "100g", price: 110 },
      { weight: "250g", price: 230 },
      { weight: "500g", price: 420 },
    ],
    rating: 4.8,
    reviewCount: 19,
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Ağız içi yaraları ve aftlara karşı doğal antiseptiktir",
      "Sindirim gazlarını giderir ve mideyi rahatlatır",
      "Aşırı gece terlemelerini dengelemeye destek olur"
    ],
    usageAdvice: "Demlendikten sonra ılıtılıp gargara yapılabilir veya balla tatlandırılarak içilebilir.",
    storageConditions: "Kuru ve karanlık ortamda saklayınız.",
    origin: "Muğla / Türkiye",
    inStock: true
  },

  // BAHARATLAR
  {
    id: "pul-biber-ipek",
    name: "Gaziantep İpek Değirmen Pul Biber",
    category: "baharat",
    categoryLabel: "Organik Baharatlar",
    shortDesc: "Hakiki zeytinyağlı, tohumsuz, tatlı-orta acı kadife yaprak pul biber.",
    longDesc: "Gaziantep İslahiye bölgesinin en seçkin biberlerinden, çekirdekleri ayıklanarak taş değirmende ezilmiş ve saf sızma zeytinyağı ile terbiye edilmiştir. Boyasız, tuz dengesi kusursuzdur.",
    badge: "Taş Değirmen",
    basePrice: 140,
    weightOptions: [
      { weight: "250g", price: 140 },
      { weight: "500g", price: 260 },
      { weight: "1000g", price: 490 },
    ],
    rating: 5.0,
    reviewCount: 31,
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Metabolizmayı hızlandırır, yağ yakımını destekler",
      "Kapsaisin içeriğiyle doğal ağrı kesici ve antioksidandır",
      "Yemeklere doğal parlak kırmızı renk ve derin aroma katar"
    ],
    usageAdvice: "Çorbalara, zeytinyağlılara ve et yemeklerine pişme esnasında veya sofrada eklenir.",
    storageConditions: "Rengini ve yağını kaybetmemesi için buzdolabında cam kavanozda saklanması önerilir.",
    origin: "Gaziantep / Türkiye",
    inStock: true
  },
  {
    id: "zerdecal-altin",
    name: "Özel Çekim Altın Zerdeçal (Kurkumin %5+)",
    category: "baharat",
    categoryLabel: "Organik Baharatlar",
    shortDesc: "Yüksek kurkumin oranına sahip, katkısız parlak sarı taze öğütülmüş kök zerdeçal.",
    longDesc: "Dükkanımızda taze çekilen, yüksek kurkumin etken maddeli taze zerdeçal tozu. İltihap savar altın süt kürlerinin ve sağlıklı yemeklerin vazgeçilmez şifası.",
    badge: "Taze Çekim",
    basePrice: 120,
    weightOptions: [
      { weight: "250g", price: 120 },
      { weight: "500g", price: 220 },
      { weight: "1000g", price: 410 },
    ],
    rating: 4.9,
    reviewCount: 22,
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Vücuttaki kronik enflamasyonu ve eklem ağrılarını azaltır",
      "Karaciğer detoksunu ve safra akışını destekler",
      "Hücresel yenilenmeyi tetikler"
    ],
    usageAdvice: "Emilimini 20 kat artırmak için karabiber ve zeytinyağı ile birlikte tüketiniz (Altın Süt).",
    storageConditions: "Hava almayan kapalı cam kavanozda saklayınız.",
    origin: "Hindistan (Sertifikalı Tıbbi Kök)",
    inStock: true
  },

  // SOĞUK SIKIM YAĞLAR
  {
    id: "corek-otu-yagi",
    name: "Soğuk Sıkım Saf Çörek Otu Yağı",
    category: "yag",
    categoryLabel: "Soğuk Sıkım Yağlar",
    shortDesc: "İlk pres, ısıl işlem görmemiş, yüksek timokinon oranlı hakiki çörek otu yağı.",
    longDesc: "Yerli tohumlardan düşük ısıda soğuk pres yöntemiyle elde edilen %100 saf çörek otu yağı. Filtre edilmemiş doğal tortusuyla birlikte şişelenir, şifası korunur.",
    badge: "1. Soğuk Sıkım",
    basePrice: 190,
    weightOptions: [
      { weight: "100ml", price: 190 },
      { weight: "250ml", price: 380 },
      { weight: "500ml", price: 690 },
    ],
    rating: 5.0,
    reviewCount: 52,
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Güçlü bir bağışıklık modülatörüdür (Timokinon zengini)",
      "Alerjik reaksiyonları ve astım semptomlarını hafifletir",
      "Kan şekerini dengelemeye destek olur"
    ],
    usageAdvice: "Her sabah aç karnına 1 tatlı kaşığı içilmesi veya salatalara eklenmesi tavsiye edilir.",
    storageConditions: "Koyu renkli cam şişede, güneş görmeyen serin yerde saklayınız.",
    origin: "Konya / Türkiye",
    inStock: true
  },
  {
    id: "kantaron-yagi-kirmizi",
    name: "Hakiki Kırmızı Kantaron Yağı",
    category: "yag",
    categoryLabel: "Soğuk Sıkım Yağlar",
    shortDesc: "Erken hasat sızma zeytinyağında güneşte olgunlaştırılmış yakut kırmızısı şifa.",
    longDesc: "Dağlardan toplanan taze sarı kantaron çiçeklerinin saf erken hasat zeytinyağı içinde 40 gün boyunca güneşte masere edilmesiyle elde edilen geleneksel cilt ve mide merhemi.",
    badge: "Geleneksel Maserat",
    basePrice: 160,
    weightOptions: [
      { weight: "100ml", price: 160 },
      { weight: "250ml", price: 320 },
      { weight: "500ml", price: 580 },
    ],
    rating: 5.0,
    reviewCount: 39,
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Yara, yanık, pişik ve cilt tahrişlerinde hızlı doku yenilenmesi sağlar",
      "Mide asidini dengelemeye ve reflü rahatsızlıklarına iyi gelir",
      "Hücre yenileyici ve leke karşıtıdır"
    ],
    usageAdvice: "Haricen cilde masajla uygulanır veya mide için sabahları aç karnına 1 çay kaşığı içilir.",
    storageConditions: "Işıktan koruyunuz, karanlık ortamda muhafaza ediniz.",
    origin: "Bartın / Batı Karadeniz Dağları",
    inStock: true
  },

  // DOĞAL BAL & MACUNLAR
  {
    id: "karakovan-bali",
    name: "Hakiki Karakovan Ham Petek Balı",
    category: "balmacun",
    categoryLabel: "Doğal Bal & Macun",
    shortDesc: "Yapay mum içermeyen, arının tamamen kendisinin ördüğü saf yayla petek balı.",
    longDesc: "Yüksek rakımlı çiçek florasından, insan müdahalesi ve şeker şurubu olmadan üretilen saf karakovan balı. Petek mumu tamamen doğaldır, ağızda sakız gibi kalmaz.",
    badge: "%100 Ham Bal",
    basePrice: 420,
    weightOptions: [
      { weight: "500g", price: 420 },
      { weight: "1000g (Tam Petek)", price: 790 },
    ],
    rating: 5.0,
    reviewCount: 41,
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Enzimleri ölmemiş ham bal formatındadır",
      "Doğal antibakteriyel ve enerji vericidir",
      "Çocukların ve yetişkinlerin direncini artırır"
    ],
    usageAdvice: "Tahta veya porselen kaşıkla doğrudan peteğiyle çiğnenerek tüketilmesi önerilir.",
    storageConditions: "Oda sıcaklığında saklayınız. Buzdolabına koymayınız.",
    origin: "Artvin & Rize Yaylaları",
    inStock: true
  },
  {
    id: "andiz-pekmezi",
    name: "Doğal Toros Andız Pekmezi (Karasız)",
    category: "balmacun",
    categoryLabel: "Doğal Bal & Macun",
    shortDesc: "Toros dağları andız kozalağından şeker ilavesiz soğuk kaynatım koyu pekmez.",
    longDesc: "Akdeniz'in yüksek andız ağaçlarının kozalaklarından geleneksel kazanlarda yakılmadan kıvam verilen yoğun şifalı pekmez. Bronşlar ve nefes açma için asırlık şifadır.",
    badge: "Şeker İlavesiz",
    basePrice: 175,
    weightOptions: [
      { weight: "400g", price: 175 },
      { weight: "800g", price: 330 },
    ],
    rating: 4.9,
    reviewCount: 26,
    imageUrl: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "İnatçı öksürük ve balgam söktürücü etkiye sahiptir",
      "Akciğerleri ve solunum yollarını temizlemeye destek olur",
      "Kan yapıcı ve demir açısından zengindir"
    ],
    usageAdvice: "Her sabah aç karnına 1 yemek kaşığı tüketilmesi tavsiye edilir.",
    storageConditions: "Güneş görmeyen serin yerde saklayınız.",
    origin: "Toros Dağları / Antalya",
    inStock: true
  }
];
