import React from "react";
import { useScrollHeader } from "../hooks/useAnimations";

const AppleHeader = ({ onInvestorClick }) => {
  const isScrolled = useScrollHeader();

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="wrap brand-row">
        {/* Brand Section - Apple-style minimalism */}
        <div className="brand">
          <div className="logo">Z</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <div 
              className="brand-name" 
              style={{ 
                fontSize: '21px', 
                fontWeight: '700', 
                letterSpacing: '-0.01em',
                lineHeight: '1.1'
              }}
            >
              ZWIP
            </div>
            <div 
              className="brand-tag" 
              style={{ 
                fontSize: '11px', 
                fontWeight: '400',
                letterSpacing: '0.01em',
                lineHeight: '1.1'
              }}
            >
              Bank. Smarter. Faster.
            </div>
          </div>
        </div>

        {/* Navigation - Apple-style clean and minimal */}
        <nav className="nav" style={{ gap: 'var(--space-4)' }}>
          <a 
            href="/" 
            style={{ 
              fontSize: '14px', 
              fontWeight: '400',
              letterSpacing: '-0.01em',
              padding: '8px 12px'
            }}
          >
            Home
          </a>
          <a 
            href="/about" 
            style={{ 
              fontSize: '14px', 
              fontWeight: '400',
              letterSpacing: '-0.01em',
              padding: '8px 12px'
            }}
          >
            About
          </a>
          <a 
            href="/services" 
            style={{ 
              fontSize: '14px', 
              fontWeight: '400',
              letterSpacing: '-0.01em',
              padding: '8px 12px'
            }}
          >
            What
          </a>
          <a 
            href="/difference" 
            style={{ 
              fontSize: '14px', 
              fontWeight: '400',
              letterSpacing: '-0.01em',
              padding: '8px 12px'
            }}
          >
            Why
          </a>
          
          {/* Action Buttons - Apple-style subtle and refined */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
            <a 
              href="/waitlist" 
              className="btn small"
              style={{ 
                fontSize: '14px',
                fontWeight: '500',
                padding: '8px 16px',
                background: 'transparent',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                color: 'var(--graph)'
              }}
            >
              Join Waitlist
            </a>
            <button 
              className="btn small"
              onClick={onInvestorClick}
              style={{ 
                fontSize: '14px',
                fontWeight: '500',
                padding: '8px 16px',
                background: 'var(--emerald)',
                border: 'none',
                color: 'var(--white)'
              }}
            >
              Investor Corner
            </button>
          </div>
        </nav>
      </div>

      {/* Apple-style subtle separator */}
      <div 
        style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
          transition: 'background 0.3s var(--ease-apple)'
        }} 
      />
    </header>
  );
};

export default AppleHeader;
