import { StoreInfo, GoogleReview } from '../types';

export const STORE_INFO: StoreInfo = {
  name: "HAS-TAT",
  title: "HAS-TAT Aktar & Kuruyemiş",
  phone: "+905072000028",
  phoneDisplay: "0507 200 00 28",
  whatsapp: "905072000028",
  address: "Bülent Ecevit Bulvarı, 15 Temmuz Şehitler Okulu Karşısı",
  district: "Merkez",
  city: "Bartın",
  googleRating: 5.0,
  reviewCount: 10,
  workingHours: "Her gün: 08:30 - 21:30",
  googleMapsUrl: "https://maps.google.com/?q=HAS-TAT+AKTAR+%26+KURUYEM%C4%B0%C5%9E+Bart%C4%B1n",
  instagram: "https://instagram.com/hastat_aktar",
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Mehmet Yılmaz",
    rating: 5,
    date: "1 hafta önce",
    comment: "Bartın'da bu kadar taze kuruyemiş ve kaliteli şifalı bitki bulabileceğimiz tek adres. Fındık ve fıstık kavrumu efsane sıcak ve taze. Güler yüzlü esnaflık.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Elif Demirtaş",
    rating: 5,
    date: "2 hafta önce",
    comment: "Kış çayı karışımı ve soğuk sıkım çörek otu yağı aldım, gerçekten çok memnun kaldım. Dükkan tertemiz ve buram buram doğal baharat kokuyor. 5 yıldızı sonuna kadar hak ediyor.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Serkan Özkan",
    rating: 5,
    date: "3 hafta önce",
    comment: "15 Temmuz okulu karşısında yeri çok merkezi. Ürünlerin gramajı tam, ambalajları hava almaz kilitli poşette veriyorlar. İkram ettikleri taze çerezler harikaydı.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Ayşe Kaya",
    rating: 5,
    date: "1 ay önce",
    comment: "Mide rahatsızlığım için tavsiye ettikleri kudret narı ve kantaron yağı çok iyi geldi. Bilgili ve samimi tavsiyeleri için teşekkür ederim.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Burak Çetinkaya",
    rating: 5,
    date: "1 ay önce",
    comment: "Lüks kuruyemiş kalitesini Bartın'a getiren harika bir işletme. Antep fıstığı iri boy ve sıfır bayatlık. Kesinlikle tavsiye ederim.",
    verified: true
  }
];
