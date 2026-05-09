import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';

interface WarningBannerProps {
  message: string;
  urgent?: boolean;
}

const WarningBanner: React.FC<WarningBannerProps> = ({ message, urgent = true }) => {
  return (
    <div className={`w-full ${urgent ? 'bg-amber-50 border-y border-amber-100' : 'bg-blue-50 border-y border-blue-100'} py-3 px-4`}>
      <div className="max-w-7xl mx-auto flex items-start gap-3">
        <div className={`mt-0.5 p-1 rounded-full ${urgent ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <p className={`text-sm font-semibold ${urgent ? 'text-amber-800' : 'text-blue-800'} leading-relaxed`}>
            {urgent && <span className="uppercase text-xs font-bold mr-2 tracking-wider underline">Urgent Action Required:</span>}
            {message}
          </p>
          {urgent && (
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-amber-600 font-bold uppercase tracking-tight">
              <Clock className="w-3 h-3" />
              <span>Deadline: Today, 11:59 PM (IST)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;
