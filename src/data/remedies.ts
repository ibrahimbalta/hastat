import { Remedy } from '../types';

export const REMEDIES: Remedy[] = [
  {
    id: "bagisiklik",
    title: "Bağışıklık & Kış Kalkanı",
    slug: "bagisiklik-kalkanı",
    iconName: "ShieldCheck",
    tagline: "Vücut direncini doğal kalkanla zırhlandırın",
    description: "Mevsim geçişlerinde virüslere ve soğuk algınlığına karşı vücudun savunma mekanizmasını harekete geçiren geleneksel bitkisel güç paketi.",
    symptoms: [
      "Sık sık nezle/grip olma",
      "Sürekli yorgunluk ve halsizlik hissi",
      "Mevsimsel hava değişimlerine karşı hassasiyet",
      "Boğazda hafif yanma veya kaşıntı"
    ],
    recommendedProductIds: ["kis-cayi-atom", "corek-otu-yagi", "ihlamur-cicek", "karakovan-bali"],
    herbalRecipe: {
      preparation: "Sabah aç karnına 1 tatlı kaşığı soğuk sıkım çörek otu yağı içiniz. Gün içinde 1 fincan HAS-TAT Kış Çayı'nı 1 tatlı kaşığı karakovan balı ve taze limon ile demleyiniz.",
      routine: "14 gün boyunca aralıksız uygulayınız, ardından 1 hafta ara veriniz.",
      caution: "Hamilelerin bitki çaylarını tüketmeden önce hekimine danışması önerilir."
    }
  },
  {
    id: "sindirim",
    title: "Mide & Sindirim Rahatlığı",
    slug: "mide-sindirim",
    iconName: "HeartPulse",
    tagline: "Yemeklerden sonra hafif ve huzurlu bir mide",
    description: "Reflü, mide yanması, şişkinlik ve hazımsızlık çekenler için Batı Karadeniz yaylalarının asırlık kantaron ve tıbbi bitki formülü.",
    symptoms: [
      "Midede ekşime, yanma ve reflü hissi",
      "Yemek sonrası gaz ve karında gerginlik",
      "Bağırsak tembelliği ve yavaş metabolizma"
    ],
    recommendedProductIds: ["kantaron-yagi-kirmizi", "adacayi-tibbi", "zerdecal-altin"],
    herbalRecipe: {
      preparation: "Sabah uyanınca hiçbir şey yemeden önce 1 çay kaşığı saf kırmızı kantaron yağı içiniz ve 20 dakika bir şey yemeyiniz. Akşam yemeklerinden yarım saat sonra 1 fincan ılık adaçayı tüketiniz.",
      routine: "Mide hassasiyeti yatışana kadar en az 21 gün düzenli sürdürülmelidir.",
      caution: "Açık yara veya cerrahi operasyon öncesi kantaron tüketimini kesiniz."
    }
  },
  {
    id: "enerji",
    title: "Doğal Zindelik & Beyin Gücü",
    slug: "dogal-enerji",
    iconName: "Zap",
    tagline: "Kafeinsiz, katkısız, saf topraktan gelen dinamizm",
    description: "Yoğun çalışma temposu, sınav dönemleri ve sporcular için zihinsel odaklanmayı artıran taze kavrum çerez ve saf bal kombinasyonu.",
    symptoms: [
      "Öğleden sonra gelen ani uyku ve dikkat dağınıklığı",
      "Fiziksel güç kaybı ve kas yorgunluğu",
      "Sürekli kahveye ve rafine şekere ihtiyaç duyma"
    ],
    recommendedProductIds: ["fistik-duble", "findik-giresun", "ceviz-kelebek", "karakovan-bali"],
    herbalRecipe: {
      preparation: "Sabah kahvaltısında 2 adet kelebek ceviz içi ve 1 tatlı kaşığı karakovan petek balı. İkindi saatlerinde (15:00-16:00) fındık ve Antep fıstığından oluşan 1 avuç taze çerez.",
      routine: "Günlük sağlıklı beslenme rutinine kalıcı olarak dahil edilebilir."
    }
  },
  {
    id: "uyku",
    title: "Derin Uyku & Akşam Huzuru",
    slug: "derin-uyku",
    iconName: "MoonStar",
    tagline: "Günün stresini geride bırakıp huzurla dinlenin",
    description: "Gece kafasını yastığa koyduğunda düşüncelerden uyuyamayanlar ve hafif uykusu olanlar için sinir sistemini yatıştırıcı kadife dokunuş.",
    symptoms: [
      "Gece yatakta dönüp durma ve uykuya dalma güçlüğü",
      "Günün getirdiği zihinsel stres ve kas gerginliği",
      "Sabah yorgun ve dinlenmemiş uyanma"
    ],
    recommendedProductIds: ["ihlamur-cicek", "adacayi-tibbi", "kaju-kavrulmus"],
    herbalRecipe: {
      preparation: "Yatmadan 45 dakika önce 1 kupa sıcak suya ıhlamur ve bir tutam adaçayı ekleyip 6 dakika demlendiriniz. Yanında 5-6 adet kaju (magnezyum kaynağı) tüketiniz.",
      routine: "Akşamları mavi ekran ışığını azalttığınız bir rutinle birleştiriniz."
    }
  },
  {
    id: "solunum",
    title: "Solunum & Boğaz Ferahlığı",
    slug: "solunum-ferahligi",
    iconName: "Wind",
    tagline: "Göğsünüzü açan, derin ve rahat nefes sağlayan şifa",
    description: "Mevsimsel hava kirliliği, sigara dumanı veya kuru öksürükten etkilenen bronşları temizlemeye yardımcı geleneksel andız ve kış şifası.",
    symptoms: [
      "İnatçı kuru veya balgamlı öksürük",
      "Nefes alırken göğüste hırıltı veya tıkanıklık hissi",
      "Sabah boğaz kuruluğu"
    ],
    recommendedProductIds: ["andiz-pekmezi", "kis-cayi-atom", "corek-otu-yagi"],
    herbalRecipe: {
      preparation: "Her sabah aç karnına 1 yemek kaşığı Toros andız pekmezi alınız. Gün içinde ılık kış çayına 1 tatlı kaşığı bal ilave ederek boğazınızı sürekli nemli tutunuz.",
      routine: "10 gün boyunca uygulayınız."
    }
  }
];
