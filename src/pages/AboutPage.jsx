import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const AboutPage = () => {
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
      <ParticleBackground count={6} />
      
      <section className="section light" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
        <div className="wrap">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="reveal-up" style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
              Who we are
            </h1>
            
            <p className="reveal-up delay-1" style={{ textAlign: 'center', fontSize: '24px', marginBottom: 'var(--space-8)' }}>
              Zwip is building a modern neobank that is fast, simple, and inclusive. 
              We design products around people  their needs, rhythms and aspirations.
            </p>

            <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
              <div className="reveal-up delay-2">
                <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--emerald)' }}>Mission</h3>
                <p style={{ fontSize: '19px', lineHeight: '1.47059', margin: 0 }}>
                  To make banking effortless and intelligent, so users can focus on what matters in their lives and businesses.
                </p>
              </div>

              <div className="reveal-up delay-3">
                <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--emerald)' }}>Vision</h3>
                <p style={{ fontSize: '19px', lineHeight: '1.47059', margin: 0 }}>
                  To be the platform that makes money fluid, accessible and useful to everyone, 
                  breaking down barriers in global finance.
                </p>
              </div>

              <div className="reveal-up delay-4">
                <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--emerald)' }}>Values</h3>
                <p style={{ fontSize: '19px', lineHeight: '1.47059', margin: 0 }}>
                  Speed without compromise, transparency as standard, and inclusion by design  
                  these principles guide every decision we make.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutPage;
