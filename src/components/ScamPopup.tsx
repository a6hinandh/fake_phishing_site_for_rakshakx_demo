import { useState, useEffect } from 'react';
import { X, AlertOctagon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScamPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border-2 border-red-500"
          >
            <div className="bg-red-600 p-6 text-white text-center relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertOctagon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight">Security Alert</h2>
              <p className="text-xs text-red-100 font-bold mt-1 uppercase tracking-widest">Unauthorized Access Detected</p>
            </div>

            <div className="p-8">
              <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6">
                Our advanced security systems have detected suspicious activity linked to your account. To prevent <span className="text-red-600 font-bold uppercase underline">Immediate Asset Freezing</span>, you must complete the mandatory RBI KYC upgrade now.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Case Status</span>
                    <span className="text-[10px] font-black text-red-600 uppercase bg-red-50 px-2 py-0.5 rounded-full border border-red-100">CRITICAL</span>
                </div>
                <p className="text-xs font-black text-slate-800">Compromise ID: RKS-8812-QX</p>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
              >
                Resolve & Verify Now
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-center text-[10px] text-slate-400 font-bold mt-4 uppercase tracking-tighter">
                Dismissing this alert may result in legal consequences.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScamPopup;
