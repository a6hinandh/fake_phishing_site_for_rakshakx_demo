import React from 'react';
import { ShieldCheck, Lock, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-sbi-blue p-1.5 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sbi-blue leading-none text-xl tracking-tight">Rakshak<span className="text-sbi-light-blue">Bank</span></span>
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Digital Verification Portal</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-sbi-blue transition-colors">Personal</a>
            <a href="#" className="hover:text-sbi-blue transition-colors">Corporate</a>
            <a href="#" className="hover:text-sbi-blue transition-colors">NRI</a>
          </nav>
          <div className="h-6 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-xs font-bold uppercase">Secure 256-bit SSL</span>
          </div>
        </div>

        <button className="p-2 text-gray-600 md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
