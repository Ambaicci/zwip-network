import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const ServicesPage = () => {
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
      <ParticleBackground count={8} />
      
      <section className="section light" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
        <div className="wrap">
          <div className="section-head reveal-up">
            <h1>Core services</h1>
            <p>
              Zwip provides essential banking building blocks wrapped in delightful UX. 
              Everything you need to manage your money, designed around your life.
            </p>
          </div>

          <div className="features-grid">
            <section className="feature reveal-up delay-1">
              <h3>Accounts</h3>
              <p>Primary accounts, multi-currency wallets, instant statements with real-time insights and categorization.</p>
            </section>
            <section className="feature reveal-up delay-2">
              <h3>Cards</h3>
              <p>Physical + virtual cards with granular controls, instant freezing, and smart spending limits.</p>
            </section>
            <section className="feature reveal-up delay-3">
              <h3>Payments</h3>
              <p>Seamless local and cross-border transfers with simple rails and competitive exchange rates.</p>
            </section>
            <section className="feature reveal-up delay-4">
              <h3>Business Tools</h3>
              <p>APIs for merchants, automated payouts, invoicing workflows, and team spending controls.</p>
            </section>
          </div>

          <div style={{ marginTop: 'var(--space-10)', textAlign: 'center' }} className="reveal-up">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Built for modern life</h3>
            <p style={{ fontSize: '19px', maxWidth: '600px', margin: '0 auto' }}>
              Whether you're managing personal finances or running a business, 
              Zwip adapts to your needs with intuitive tools and powerful features.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ServicesPage;
