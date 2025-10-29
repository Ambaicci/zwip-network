import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Import custom hooks
import { useScrollProgress, useScrollHeader, useTilt } from "./hooks/useAnimations";

// Import components
import ParticleBackground from "./components/ParticleBackground";
import AppleHeader from "./components/AppleHeader";
import AppleFooter from "./components/AppleFooter";
import MVPCTASection from "./components/MVPCTASection";

// Import page components
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import DifferencePage from "./pages/DifferencePage";
import WaitlistPage from "./pages/WaitlistPage";

// Scroll Progress Component
const ScrollProgress = ({ progress }) => (
  <div className="scroll-progress" style={{ width: `${progress}%` }} />
);

// Enhanced Apple-style Modal
const InvestorModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="modal-backdrop" 
      style={{ display: 'flex' }} 
      aria-hidden="false"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="modal"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -20 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300,
          duration: 0.4
        }}
        style={{
          width: '620px',
          maxWidth: '90vw',
          background: 'var(--surface-elevated)',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 50px 100px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            margin: 0, 
            fontSize: '28px',
            fontWeight: '700',
            lineHeight: '1.14286',
            letterSpacing: '0.007em'
          }}>
            Investor Kit & Contact
          </h3>
          <button 
            className="btn" 
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
          >
            
          </button>
        </div>
        <p style={{
          fontSize: '19px',
          lineHeight: '1.47059',
          color: 'rgba(29, 29, 31, 0.8)',
          margin: '0 0 24px 0'
        }}>
          Request the investor deck, traction hypothesis and financial plan. 
          For demonstration purposes, this opens your email client pre-filled with a request.
        </p>
        <div style={{ textAlign: 'right' }}>
          <a 
            className="btn cta" 
            href="mailto:invest@zwip.example?subject=Request%20Investor%20Kit%20-%20ZWIP"
            style={{
              padding: '12px 24px',
              fontSize: '17px',
              fontWeight: '500'
            }}
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Apple-inspired Home Page
const HomePage = ({ onInvestorClick }) => {
  const cardTilt = useTilt();

  useEffect(() => {
    // Scroll reveal animation setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => observer.observe(el));
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground count={8} />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="wrap" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <div className="hero-copy">
            <h1 className="reveal-up">
              Revolut made banking mobile.<br />
              We're making it brilliant.
            </h1>
            <p className="reveal-up delay-1">
              Zwip is the intelligent evolution of neo-banking  AI-powered insights, 
              truly seamless global payments, and business tools that scale with your ambitions. 
              Everything Revolut promised, actually delivered.
            </p>
            <div className="hero-actions reveal-up delay-2">
              <a href="/waitlist" className="btn cta">Get Early Access</a>
              <a href="/services" className="btn">See How We're Better</a>
            </div>
          </div>

          <div className="card-column">
            <div 
              className="zwip-card reveal-right" 
              {...cardTilt}
            >
              <div className="card-top">
                <div className="chip" aria-hidden="true"></div>
                <div className="zwip-mark">ZWIP</div>
              </div>
              <div className="card-number">5390  00  00  1234</div>
              <div className="card-meta">
                <div>
                  <div className="small-muted">CARDHOLDER</div>
                  <div className="bold">AMBAIC CI</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="small-muted">VALID THRU</div>
                  <div className="bold">09/28</div>
                </div>
              </div>
              <div className="card-footer">Intelligent Banking</div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP CTA Section */}
      <MVPCTASection />

      {/* Features Section */}
      <section className="section light">
        <div className="wrap">
          <div className="section-head reveal-up">
            <h2>Everything Revolut should have been.<br />And much more.</h2>
            <p>
              We took the best of mobile banking and made it brilliant with AI-powered insights, 
              truly transparent fees, and tools that work for both personal and business needs.
            </p>
          </div>

          <div className="features-grid">
            <article className="feature reveal-up delay-1">
              <h3>Smarter FX</h3>
              <p>Real-time rates with zero hidden fees. AI that finds you the best transfer times automatically.</p>
            </article>
            <article className="feature reveal-up delay-2">
              <h3>AI Insights</h3>
              <p>Cashflow predictions that are scary accurate. Spending insights that lead to real savings.</p>
            </article>
            <article className="feature reveal-up delay-3">
              <h3>Business Ready</h3>
              <p>From personal spending to global business - one fluid experience with powerful APIs.</p>
            </article>
            <article className="feature reveal-up delay-4">
              <h3>Global Scale</h3>
              <p>Multi-currency accounts that actually work seamlessly across 50+ countries.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="difference">
        <ParticleBackground count={4} />
        <div className="wrap">
          <div className="difference-inner">
            <div className="diff-left">
              <h2 className="reveal-up">
                The neo-bank evolution<br />
                is here.
              </h2>
              <p className="reveal-up delay-1">
                While others stopped at mobile convenience, we're building intelligent finance. 
                AI-driven insights, truly borderless accounts, and tools that understand both 
                your personal life and business ambitions.
              </p>
              <ul>
                <li className="reveal-up delay-2">AI that actually helps you save and grow money</li>
                <li className="reveal-up delay-3">Global payments that feel truly instant</li>
                <li className="reveal-up delay-4">Business tools that don't require compromises</li>
              </ul>
            </div>
            <div className="diff-right">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop" 
                alt="Zwip app interface showing AI-powered banking features"
                className="reveal-right"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

// AnimatedRoutes Component
const AnimatedRoutes = ({ onInvestorClick }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage onInvestorClick={onInvestorClick} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/difference" element={<DifferencePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Component
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  return (
    <Router>
      <div className="App">
        <ScrollProgress progress={scrollProgress} />
        <AppleHeader onInvestorClick={() => setIsModalOpen(true)} />
        
        <div style={{ paddingTop: '44px' }}>
          <AnimatedRoutes onInvestorClick={() => setIsModalOpen(true)} />
        </div>
        
        <AppleFooter />
        
        <AnimatePresence>
          {isModalOpen && (
            <InvestorModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
