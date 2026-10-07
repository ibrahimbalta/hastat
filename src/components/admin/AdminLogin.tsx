import React, { useState } from 'react';
import { Lock, ArrowRight, ArrowLeft, ShieldCheck, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
  onBackToSite: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBackToSite }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Lütfen yönetici şifresini giriniz.');
      return;
    }

    const success = onLogin(password);
    if (!success) {
      setError('Hatalı şifre! (Varsayılan şifre: admin123)');
    }
  };

  return (
    <div className="min-h-screen bg-[#142a20] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D49B44]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1B382B]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#D49B44]/30 p-8 sm:p-10">
        
        {/* Back to Site Button */}
        <button
          onClick={onBackToSite}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B382B] hover:text-[#D49B44] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Canlı Siteye Dön</span>
        </button>

        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#1B382B] text-[#D49B44] flex items-center justify-center mx-auto shadow-lg mb-3">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1B382B]">
            HAS-TAT Yönetim
          </h2>
          <p className="text-xs text-[#1A1615]/70 mt-1">
            İçerik & Mağaza Yönetim Paneli Girişi
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1.5">
              Yönetici Şifresi:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Şifrenizi giriniz..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-[#e8e2d5] text-sm outline-none focus:border-[#1B382B] bg-white pr-10 shadow-xs"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <p className="text-xs text-red-600 mt-1.5 font-medium">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#1B382B] hover:bg-[#142a20] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
          >
            <span>Panele Giriş Yap</span>
            <ArrowRight className="w-4 h-4 text-[#D49B44]" />
          </button>
        </form>

        {/* Default Password Hint */}
        <div className="mt-6 pt-5 border-t border-[#eee7d9] text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B382B]/5 text-[11px] text-[#1B382B] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D49B44]" />
            <span>Varsayılan Şifre: <strong>admin123</strong></span>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">
            Şifrenizi panel içerisindeki 'Ayarlar' sekmesinden değiştirebilirsiniz.
          </p>
        </div>

      </div>
    </div>
  );
};
