import React from 'react';
import { TopBanner } from './components/layout/TopBanner';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { TrustBadges } from './components/home/TrustBadges';
import { RemedyAssistant } from './components/remedy/RemedyAssistant';
import { ProductCatalog } from './components/products/ProductCatalog';
import { StoreSection } from './components/store/StoreSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { ProductModal } from './components/products/ProductModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Toast } from './components/common/Toast';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A1615] font-sans antialiased selection:bg-[#D49B44] selection:text-[#1B382B]">
      {/* Top Delivery & Contact Announcement Bar */}
      <TopBanner />

      {/* Main Luxury Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Editorial Hero Section */}
        <HeroSection />

        {/* 4 Brand Pillars / Trust Badges */}
        <TrustBadges />

        {/* Interactive "Şifa & İhtiyaç Rehberi" Assistant */}
        <RemedyAssistant />

        {/* Full Products Showcase & Dynamic Categories */}
        <ProductCatalog />

        {/* Bartın Merkez Store, Location & 5.0 Google Reviews */}
        <StoreSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Slide-over Cart Drawer with WhatsApp Order Generator */}
      <CartDrawer />

      {/* Quick Product Detail Modal */}
      <ProductModal />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Toast Notification */}
      <Toast />
    </div>
  );
};

export default App;
