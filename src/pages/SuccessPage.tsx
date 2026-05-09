import React from 'react';
import { CheckCircle2, ShieldCheck, Download, Clock, AlertTriangle, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      <div className="max-w-md mx-auto px-4 py-12 w-full flex-1 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="glass-card p-10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          
          <div className="mb-10">
            <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
              <CheckCircle2 className="w-14 h-14 text-green-600" />
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border-2 border-green-500">
                <ShieldCheck className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter uppercase">Submission Success</h1>
            <p className="text-sm text-gray-500 font-bold leading-relaxed">
                Your Digital KYC Compliance Update has been <span className="text-sbi-blue">successfully transmitted</span> to the RBI Central Repository.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="p-6 bg-slate-50 rounded-3xl border-2 border-slate-100 grid grid-cols-1 gap-6 text-left">
                <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Transaction Reference</p>
                    <p className="text-sm font-black text-slate-800 uppercase tabular-nums tracking-widest">RBI-2024-KYC-{Math.floor(100000 + Math.random() * 900000)}</p>
                </div>
                <div className="h-px bg-slate-200"></div>
                <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Current Account Status</p>
                    <div className="flex items-center gap-2 text-sm font-black text-amber-600">
                        <Clock className="w-4 h-4" />
                        <span className="uppercase tracking-tight">Pending Manual Verification (72h)</span>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 p-5 rounded-3xl border-2 border-red-100 flex items-start gap-4 text-left">
                <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-red-900 font-bold leading-relaxed italic">
                    <span className="uppercase font-black block mb-1">Important Legal Notice:</span>
                    Your account suspension has been deferred. However, do not initiate any international transactions until the final "Verification Completed" SMS is received. Unauthorized activity may trigger an automatic asset freeze under the PMLA Act.
                </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-sm shadow-xl">
                <Download className="w-5 h-5" />
                GET COMPLIANCE RECEIPT (PDF)
            </button>
            <div className="flex items-center justify-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Scale className="w-4 h-4" />
                Monitored by Financial Security Division
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8 text-center px-8">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter leading-relaxed">
                © 2024 RakshakBank Digital Identity Systems. This session was authenticated via 256-bit RSA encryption and verified by RBI nodal servers.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
