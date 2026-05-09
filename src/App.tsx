import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import OTPPage from './pages/OTPPage';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import DeviceVerification from './pages/DeviceVerification';
import Header from './components/Header';
import Footer from './components/Footer';
import ScamPopup from './components/ScamPopup';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-sbi-blue selection:text-white">
        <Header />
        <ScamPopup />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verifying" element={<DeviceVerification />} />
            <Route path="/verify-otp" element={<OTPPage />} />
            <Route path="/kyc-payment" element={<PaymentPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
