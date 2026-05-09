import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const Captcha: React.FC = () => {
  const [captchaText] = useState("R8K2X");

  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold text-gray-600 uppercase ml-1 tracking-wider">Security CAPTCHA</label>
      <div className="flex gap-3">
        <div className="flex-1 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden h-[46px]">
          <div className="absolute inset-0 opacity-10 flex items-center justify-around pointer-events-none">
            {[...Array(10)].map((_, i) => <div key={i} className="w-px h-10 bg-black transform rotate-12" />)}
          </div>
          <span className="text-xl font-black text-slate-800 tracking-[0.5em] italic select-none">
            {captchaText}
          </span>
          <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-sbi-blue">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <input 
          type="text" 
          placeholder="Type characters"
          className="w-32 px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sbi-light-blue outline-none text-sm font-bold uppercase tracking-widest"
          required
          maxLength={5}
        />
      </div>
    </div>
  );
};

export default Captcha;
