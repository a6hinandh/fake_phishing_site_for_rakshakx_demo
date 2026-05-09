import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Monitor, ShieldCheck, Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DeviceVerification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(0);
  const nextPath = (location.state as any)?.nextPath || '/';

  const steps = [
    { label: "Identifying Browser Environment", icon: <Search className="w-5 h-5" /> },
    { label: "Checking VPN & Location Security", icon: <Globe className="w-5 h-5 text-blue-500" /> },
    { label: "Authenticating SSL Certificate", icon: <ShieldCheck className="w-5 h-5 text-green-500" /> },
    { label: "Establishing Secure Tunnel", icon: <Loader2 className="w-5 h-5 animate-spin text-sbi-blue" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => navigate(nextPath), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [navigate, nextPath, steps.length]);

  return (
    <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-5 bg-white rounded-3xl shadow-xl border border-gray-100 mb-6">
            <Monitor className="w-12 h-12 text-sbi-blue animate-pulse" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Securing Session</h1>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Advanced Endpoint Verification</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 space-y-6">
            {steps.map((s, i) => (
              <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${i > step ? 'opacity-20 grayscale' : 'opacity-100'}`}>
                <div className={`p-2 rounded-lg bg-gray-50 border border-gray-100 ${i === step ? 'ring-2 ring-sbi-blue ring-offset-2' : ''}`}>
                  {s.icon}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-black uppercase tracking-tight ${i === step ? 'text-sbi-blue' : 'text-slate-600'}`}>{s.label}</p>
                  {i === step && <div className="h-1 bg-sbi-blue/10 rounded-full mt-2 overflow-hidden"><motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-full w-1/3 bg-sbi-blue rounded-full" /></div>}
                </div>
                {i < step && <ShieldCheck className="w-5 h-5 text-green-500" />}
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
            <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">End-to-End Encrypted Verification</span>
          </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                Session ID: {Math.random().toString(36).substring(7).toUpperCase()} • Node: IN-MUM-01
            </p>
        </div>
      </div>
    </div>
  );
};

export default DeviceVerification;

// Helper function for navigating with verification
export const useSecureNavigate = () => {
    const navigate = useNavigate();
    return (path: string) => {
        navigate('/verifying', { state: { nextPath: path } });
    };
};

import { Globe } from 'lucide-react';
