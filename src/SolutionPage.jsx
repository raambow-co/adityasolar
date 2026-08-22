import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const SolutionPage = ({ solution, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!solution) return null;

  return (
    <div className="page-transition" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* HEADER HERO */}
      <div style={{ backgroundColor: 'var(--primary-navy)', paddingTop: '140px', paddingBottom: '0px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'var(--accent-yellow)', opacity: '0.05', borderRadius: '50%', filter: 'blur(100px)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={onBack}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '10px 24px', borderRadius: '100px', cursor: 'pointer', marginBottom: '40px', fontWeight: '600', transition: 'all 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ArrowLeft size={18} /> Back to Products
          </button>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', paddingBottom: '60px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--accent-yellow)' }}>
                Aditya Solar Division
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1.5px', lineHeight: '1.1' }}
              >
                {solution.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '20px', maxWidth: '600px', opacity: 0.9, lineHeight: '1.6', marginBottom: '40px' }}
              >
                {solution.subtitle}
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="btn btn-yellow" 
                style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '16px', border: 'none', cursor: 'pointer' }}
                onClick={() => {
                   onBack();
                   setTimeout(() => {
                     document.getElementById('contact-new')?.scrollIntoView({ behavior: 'smooth' });
                   }, 100);
                }}
              >
                Request a Consultation
              </motion.button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ flex: '1 1 400px', position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', border: '4px solid rgba(255,255,255,0.1)' }}>
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Main Description */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ flex: '1 1 600px', background: 'white', padding: '50px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}
          >
            <h2 style={{ fontSize: '32px', color: 'var(--primary-navy)', fontWeight: '800', marginBottom: '24px' }}>Overview</h2>
            <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
              {solution.fullDescription}
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ background: 'var(--accent-yellow)', padding: '24px', borderRadius: '24px', color: 'var(--primary-navy)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Key Benefits</h3>
              <p style={{ opacity: 0.9, fontSize: '15px', margin: 0 }}>Why choose our {solution.title}?</p>
            </div>
            
            {solution.features.map((feature, idx) => (
              <div key={idx} style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: '0 10px 20px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', display: 'flex', gap: '16px' }}>
                <div style={{ flexShrink: 0, marginTop: '4px' }}>
                  <CheckCircle2 size={24} color="var(--accent-green)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', color: 'var(--primary-navy)', fontSize: '18px', fontWeight: '700' }}>{feature.title}</h4>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '15px', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
