import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const DifferencePage = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground count={4} />
      
      <section className="difference" style={{ padding: 'var(--space-10) var(--space-5)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="wrap">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 className="reveal-up" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
              Why Zwip stands apart
            </h1>
            
            <p className="reveal-up delay-1" style={{ 
              textAlign: 'center', 
              fontSize: '24px', 
              lineHeight: '1.41667',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: 'var(--space-9)',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Zwip is born for emerging markets with global reach. We prioritize speed, 
              inclusion and an ecosystem-first approach that puts users first.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div className="feature dark reveal-up delay-2" style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: 'var(--space-6)',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: 'white', marginBottom: 'var(--space-3)' }}>Born for Mobile</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', lineHeight: '1.47059', margin: 0 }}>
                  Optimized UX for high mobile usage and low bandwidth environments, 
                  ensuring smooth performance everywhere.
                </p>
              </div>
              
              <div className="feature dark reveal-up delay-3" style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: 'var(--space-6)',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: 'white', marginBottom: 'var(--space-3)' }}>Local-first</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', lineHeight: '1.47059', margin: 0 }}>
                  Solves remittance, FX and local payout friction natively with deep 
                  integration into regional payment systems.
                </p>
              </div>
              
              <div className="feature dark reveal-up delay-4" style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: 'var(--space-6)',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <h4 style={{ color: 'white', marginBottom: 'var(--space-3)' }}>Intelligent</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '17px', lineHeight: '1.47059', margin: 0 }}>
                  AI-driven insights and tailored finance flows that learn from your 
                  behavior to provide personalized recommendations.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-9)' }} className="reveal-up delay-4">
              <p style={{ 
                fontSize: '19px', 
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Join the movement towards smarter, faster, and more inclusive banking.
              </p>
              <a href="/waitlist" className="btn cta" style={{ marginTop: 'var(--space-5)' }}>
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default DifferencePage;
