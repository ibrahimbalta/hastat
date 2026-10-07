import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { Download, Upload, Key, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';

interface SettingsTabProps {
  onChangePassword: (newPass: string) => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({ onChangePassword }) => {
  const { exportDataJson, importDataJson, resetToDefaults } = useSiteData();
  const [newPassword, setNewPassword] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleExport = () => {
    const json = exportDataJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hastat-yedek-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importJsonText.trim()) return;

    const ok = importDataJson(importJsonText);
    if (ok) {
      setImportStatus('success');
      setImportJsonText('');
      setTimeout(() => setImportStatus('idle'), 3000);
    } else {
      setImportStatus('error');
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword.trim()) return;
    onChangePassword(newPassword.trim());
    setPasswordSuccess(true);
    setNewPassword('');
    setTimeout(() => setPasswordSuccess(false), 3000);
  };

  const handleReset = () => {
    resetToDefaults();
    setShowResetConfirm(false);
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      
      {/* Password Management */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e8e2d5] shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#eee7d9]">
          <Key className="w-5 h-5 text-[#D49B44]" />
          <h3 className="font-bold text-sm text-[#1B382B]">
            Yönetici Panel Şifresini Değiştir
          </h3>
        </div>

        <form onSubmit={handlePasswordSubmit} className="space-y-3 max-w-md">
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Yeni Yönetici Şifresi:
            </label>
            <input
              type="text"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Yeni şifrenizi giriniz..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#1B382B] text-white hover:bg-[#142a20] text-xs font-bold transition-all"
            >
              Şifreyi Güncelle
            </button>
            {passwordSuccess && (
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Şifre başarıyla güncellendi!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Backup and Restore */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e8e2d5] shadow-xs space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-[#eee7d9]">
          <Download className="w-5 h-5 text-[#D49B44]" />
          <h3 className="font-bold text-sm text-[#1B382B]">
            Veri Yedekleme & Geri Yükleme (JSON)
          </h3>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-[#1A1615]/70">
            Sitedeki tüm ürünleri, metinleri, görselleri ve şifa kürlerini bilgisayarınıza tek tıkla dosya olarak indirin.
          </p>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D49B44] text-[#1B382B] hover:bg-[#b67e2b] text-xs font-bold shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Tüm Site Verilerini Yedek Olarak İndir (JSON)</span>
          </button>
        </div>

        {/* Import */}
        <form onSubmit={handleImport} className="pt-4 border-t border-[#eee7d9] space-y-3">
          <label className="text-xs font-bold text-[#1A1615]/80 block">
            Yedekten Geri Yükle (JSON Yapıştır):
          </label>
          <textarea
            rows={3}
            value={importJsonText}
            onChange={(e) => setImportJsonText(e.target.value)}
            placeholder="İndirdiğiniz yedek JSON dosyasının içeriğini buraya yapıştırın..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs font-mono outline-none focus:border-[#1B382B]"
          />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1B382B] text-white hover:bg-[#142a20] text-xs font-bold"
            >
              <Upload className="w-4 h-4 text-[#D49B44]" />
              <span>Yedeği Sisteme Yükle</span>
            </button>
            {importStatus === 'success' && (
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Yedek başarıyla yüklendi!
              </span>
            )}
            {importStatus === 'error' && (
              <span className="text-xs text-red-600 font-bold">
                Geçersiz JSON verisi!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Factory Reset */}
      <div className="bg-red-50 p-6 sm:p-8 rounded-3xl border border-red-200 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-red-800">
          <AlertTriangle className="w-5 h-5" />
          <h3 className="font-bold text-sm">
            Fabrika Ayarlarına Sıfırla
          </h3>
        </div>
        <p className="text-xs text-red-700/80">
          Tüm düzenlemeleri sıfırlayarak HAS-TAT Aktar web sitesini ilk orijinal verilerine döndürür.
        </p>

        {showResetConfirm ? (
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700"
            >
              Evet, Tümünü Sıfırla
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-4 py-2 bg-white text-gray-700 rounded-xl text-xs font-bold border border-gray-300"
            >
              Vazgeç
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 text-xs font-bold transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Varsayılanlara Sıfırla</span>
          </button>
        )}
      </div>

    </div>
  );
};
