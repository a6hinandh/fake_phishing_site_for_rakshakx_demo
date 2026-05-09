import React from 'react';
import { ShieldCheck, Lock, Globe, Server, CheckSquare } from 'lucide-react';

const SecurityBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6">
      <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-100 rounded-lg">
        <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
        <span className="text-[9px] font-black text-green-700 uppercase leading-none">256-bit SSL<br/>Active Protection</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg">
        <Lock className="w-4 h-4 text-blue-600 shrink-0" />
        <span className="text-[9px] font-black text-blue-700 uppercase leading-none">AES-256<br/>Data Integrity</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg">
        <Globe className="w-4 h-4 text-slate-600 shrink-0" />
        <span className="text-[9px] font-black text-slate-700 uppercase leading-none">RBI Compliance<br/>Node Verified</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-100 rounded-lg">
        <Server className="w-4 h-4 text-amber-600 shrink-0" />
        <span className="text-[9px] font-black text-amber-700 uppercase leading-none">Safe Terminal<br/>#V-2901-X</span>
      </div>
    </div>
  );
};

export default SecurityBadges;
