import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.18 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please provide your email');
      return;
    }
    alert(`Demo: Thank you! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="section light">
        <div className="wrap reveal-up">
          <h1>Join the waitlist</h1>
          <p>Sign up to get early access and priority invites.</p>

          <form onSubmit={handleSubmit} style={{marginTop: '18px', display: 'flex', gap: '8px', alignItems: 'center'}}>
            <input 
              type="email" 
              placeholder="you@domain.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.06)', width: '300px'}} 
            />
            <button type="submit" className="btn cta">Notify Me</button>
          </form>
        </div>
      </section>
    </motion.main>
  );
};

export default WaitlistPage;
