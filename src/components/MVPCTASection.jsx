import React from "react";

const MVPCTASection = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-2) 100%)',
      color: 'var(--white)',
      padding: 'var(--space-10) var(--space-5)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      
      <div className="wrap">
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '1.1',
          letterSpacing: '-0.005em',
          marginBottom: 'var(--space-5)',
          color: 'var(--white)'
        }}>
          See the future in action
        </h2>
        
        <p style={{
          fontSize: '24px',
          lineHeight: '1.41667',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: 'var(--space-7)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Experience our live MVP and see why we're building the most intelligent neobank yet.
        </p>

        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://zwip-web-final.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn cta"
            style={{
              background: 'var(--white)',
              color: 'var(--emerald)',
              padding: 'var(--space-4) var(--space-6)',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none'
            }}
          >
            Try Live MVP
          </a>
          
          <a 
            href="/waitlist" 
            className="btn"
            style={{
              background: 'transparent',
              color: 'var(--white)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              padding: 'var(--space-4) var(--space-6)',
              fontSize: '18px',
              fontWeight: '500'
            }}
          >
            Join Waitlist
          </a>
        </div>

        <div style={{
          marginTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-6)',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '14px'
        }}>
          <div> Live Prototype</div>
          <div> Real Features</div>
          <div> Future Vision</div>
        </div>
      </div>
    </section>
  );
};

export default MVPCTASection;

