import React from 'react';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
              <Shield className="w-6 h-6 text-sbi-blue" />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase">RBI Compliance</span>
            <p className="text-[10px] text-gray-500">Adhering to RBI/2023-24/Security Standards for Digital Banking.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
              <Lock className="w-6 h-6 text-sbi-blue" />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase">256-bit AES Encryption</span>
            <p className="text-[10px] text-gray-500">Your data is secured with industry-standard bank-grade encryption.</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-sbi-blue" />
            </div>
            <span className="text-xs font-bold text-gray-700 uppercase">Verified Secure</span>
            <p className="text-[10px] text-gray-500">Monitored by RakshakX Advanced Security Infrastructure.</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" alt="UPI" className="h-6 grayscale opacity-60 mb-1" />
            <span className="text-xs font-bold text-gray-700 uppercase">Payment Security</span>
            <p className="text-[10px] text-gray-500">Certified UPI Partner for secure merchant transactions.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-[10px] font-medium text-gray-500 uppercase tracking-tighter">
            <a href="#" className="hover:text-sbi-blue">Privacy Policy</a>
            <a href="#" className="hover:text-sbi-blue">Terms of Service</a>
            <a href="#" className="hover:text-sbi-blue">RBI Guidelines</a>
            <a href="#" className="hover:text-sbi-blue">Cyber Security</a>
          </div>
          <p className="text-[10px] text-gray-400 font-medium tracking-tight">
            © 2024 RakshakBank Digital Services. All rights reserved. Registered with RBI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
