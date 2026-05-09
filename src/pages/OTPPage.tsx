import React, { useState, useEffect } from 'react';
import { ShieldAlert, RefreshCw, PhoneCall, CheckCircle2, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import WarningBanner from '../components/WarningBanner';
import { motion } from 'framer-motion';
import { useSecureNavigate } from './DeviceVerification';
import CountdownTimer from '../components/CountdownTimer';

const OTPPage: React.FC = () => {
  const secureNavigate = useSecureNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join('').length === 6) {
      secureNavigate('/kyc-payment');
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      <WarningBanner message="ACTION REQUIRED: Enter the High Security Password (OTP) sent to your mobile. Permanent suspension of UPI services will occur if verification is not completed within 5 minutes." />
      
      <div className="max-w-md mx-auto px-4 py-8 w-full flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-0 border-b-8 border-b-sbi-blue overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-900 p-8 text-white text-center">
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="bg-sbi-blue w-20 h-20 rounded-3xl rotate-12 flex items-center justify-center">
                        <MessageSquare className="w-10 h-10 text-white -rotate-12" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-red-600 p-2 rounded-xl shadow-lg">
                        <ShieldAlert className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Two-Step Verification</h2>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Protecting Your Digital Identity</p>
          </div>

          <div className="p-8">
            <div className="space-y-6">
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">Urgent Notice</span>
                    </div>
                    <p className="text-[11px] text-amber-900 font-bold leading-relaxed">
                        A one-time high security password has been dispatched to your Registered Mobile ending in <span className="text-red-600">****-8892</span>. Enter it immediately to authorize the KYC compliance patch.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex justify-between gap-2">
                    {otp.map((digit, idx) => (
                        <input
                        key={idx}
                        id={`otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-12 h-16 text-center text-3xl font-black border-2 border-slate-200 rounded-2xl focus:border-sbi-blue focus:ring-4 focus:ring-sbi-blue/10 outline-none transition-all"
                        required
                        />
                    ))}
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3 py-2 px-4 bg-slate-50 border border-slate-100 rounded-2xl">
                            <span className="text-[10px] font-black text-slate-400 uppercase">OTP Valid For</span>
                            <CountdownTimer initialSeconds={300} />
                        </div>
                        
                        <button 
                            type="button"
                            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sbi-blue hover:underline"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Resend High Security Password
                        </button>
                    </div>

                    <button type="submit" className="btn-primary w-full py-5 font-black text-lg shadow-2xl shadow-sbi-blue/30 group">
                        <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        VERIFY & ACTIVATE
                    </button>
                </form>

                <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                        <PhoneCall className="w-4 h-4 text-sbi-blue" />
                        <span className="text-[10px] font-black text-slate-800 uppercase">Support: 1800-425-XXXX</span>
                    </div>
                    <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-[10px] font-black text-green-700 uppercase">RBI Certified</span>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 px-6">
            <p className="text-[10px] text-gray-400 font-bold text-center leading-relaxed italic uppercase tracking-tighter">
                Note: This is a secure session monitored by RakshakX advanced behavioral intelligence. Your IP address and device fingerprint have been logged for compliance reporting.
            </p>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
