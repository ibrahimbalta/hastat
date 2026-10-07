import { CartItem } from '../types';
import { STORE_INFO } from '../data/storeInfo';

export interface OrderCustomerInfo {
  fullName: string;
  phone: string;
  address: string;
  cityDistrict: string;
  orderNote?: string;
  deliveryPreference: 'bartin-teslimat' | 'kargo';
}

export const generateWhatsAppOrderUrl = (
  items: CartItem[], 
  customer: OrderCustomerInfo,
  totalPrice: number
): string => {
  const deliveryText = customer.deliveryPreference === 'bartin-teslimat'
    ? '📍 Bartın Merkez İçi Kapıya Teslimat'
    : '📦 Türkiye Geneli Adrese Kargo';

  const itemsList = items.map((item, idx) => {
    const itemTotal = item.unitPrice * item.quantity;
    return `${idx + 1}. *${item.name}* (${item.selectedWeight})\n   └ Adet: ${item.quantity} x ₺${item.unitPrice} = *₺${itemTotal}*`;
  }).join('\n\n');

  const message = `🌿 *HAS-TAT AKTAR & KURUYEMİŞ - WEB SİPARİŞİ* 🌿
━━━━━━━━━━━━━━━━━━━━
👤 *Müşteri Bilgileri:*
• *Ad Soyad:* ${customer.fullName || 'Belirtilmedi'}
• *Telefon:* ${customer.phone || 'Belirtilmedi'}
• *Teslimat Tercihi:* ${deliveryText}
• *Adres:* ${customer.address || 'Belirtilmedi'}
• *İlçe / İl:* ${customer.cityDistrict || 'Bartın Merkez'}
${customer.orderNote ? `• *Sipariş Notu:* ${customer.orderNote}\n` : ''}
━━━━━━━━━━━━━━━━━━━━
🛒 *Sipariş Detayı (${items.length} Kalem Ürün):*

${itemsList}

━━━━━━━━━━━━━━━━━━━━
💰 *GENEL TOPLAM:* *₺${totalPrice}*
━━━━━━━━━━━━━━━━━━━━

Merhaba HAS-TAT Aktar, web siteniz üzerinden sepetimi oluşturdum. Siparişimi teyit edip hazırlık sürecini başlatabilir misiniz? Teşekkür ederim!`;

  return `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
};
