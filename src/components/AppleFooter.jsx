import React from "react";
import ParticleBackground from "./ParticleBackground";

const AppleFooter = () => {
  return (
    <footer className="site-footer">
      <ParticleBackground count={4} />
      <div className="wrap">
        {/* Main Footer Content */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: 'var(--space-7) 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Brand Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <div 
              style={{ 
                width: '24px', 
                height: '24px', 
                borderRadius: '6px',
                background: 'linear-gradient(135deg, var(--emerald), var(--emerald-2))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontSize: '12px',
                fontWeight: '700'
              }}
            >
              Z
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <div style={{ 
                fontSize: '17px', 
                fontWeight: '700', 
                color: 'var(--white)',
                letterSpacing: '-0.01em'
              }}>
                ZWIP
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.01em'
              }}>
                Bank. Smarter. Faster.
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
            <a 
              href="/about" 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease-apple)',
                fontWeight: '400'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              About
            </a>
            <a 
              href="/services" 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease-apple)',
                fontWeight: '400'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              Services
            </a>
            <a 
              href="/waitlist" 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease-apple)',
                fontWeight: '400'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              Waitlist
            </a>
            <a 
              href="/privacy" 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease-apple)',
                fontWeight: '400'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
            >
              Privacy Policy
            </a>
          </nav>
        </div>

        {/* Copyright Section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: 'var(--space-5) 0',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          <div style={{ fontSize: '13px', fontWeight: '400' }}>
            Copyright  2025 ZWIP Inc. All rights reserved.
          </div>
          
          {/* Additional Links */}
          <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
            <a 
              href="/terms" 
              style={{ 
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease-apple)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Terms of Service
            </a>
            <a 
              href="/legal" 
              style={{ 
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease-apple)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Legal
            </a>
            <div style={{ 
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.4)'
            }}>
              
            </div>
            <div style={{ 
              fontSize: '13px'
            }}>
              Made with  for better banking
            </div>
          </div>
        </div>
      </div>

      {/* Apple-style subtle top border */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--emerald), transparent)'
        }} 
      />
    </footer>
  );
};

export default AppleFooter;
