import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Eye, Heart, ShieldCheck, Settings, Users, Lightbulb } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AboutUsPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Solar Installations",
      desc: "From residential rooftops (PM Surya Ghar Muft Bijli Yojana) to large-scale commercial implementations, we design and install high-efficiency solar power plants perfectly tailored to your energy needs.",
      image: "/assets/solar-panels.jpeg"
    },
    {
      title: "Solar Lights",
      desc: "Reliable, robust, and automatic solar lighting solutions for streets, campuses, and agricultural lands, ensuring safety and visibility without electricity costs.",
      image: "/assets/solar-lights.jpeg"
    },
    {
      title: "Solar Water Heaters",
      desc: "Energy-efficient thermal solutions that provide consistent hot water for domestic and commercial applications, significantly cutting down electricity usage.",
      image: "/assets/solar-water-heater.png"
    },
    {
      title: "Solar Fencing",
      desc: "Secure your agricultural lands and properties with advanced solar security fencing that delivers non-lethal shocks to deter intruders and animals while being completely off-grid.",
      image: "/assets/solar-fencing.jpg"
    },
    {
      title: "Solar Cleaning",
      desc: "Maximize your system's efficiency with our professional solar panel cleaning and maintenance services, ensuring peak energy generation all year round.",
      image: "/assets/solar-cleaning.jpeg"
    }
  ];

  return (
    <div className="page-transition" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* HEADER SECTION */}
      <div style={{ backgroundColor: 'var(--primary-navy)', padding: '60px 0 60px 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '400px', height: '400px', background: 'var(--accent-yellow)', opacity: '0.1', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <button 
            onClick={onBack}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '100px', cursor: 'pointer', marginBottom: '40px', fontWeight: '600', transition: 'all 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}
              >
                About <span style={{ color: 'var(--accent-yellow)' }}>Aditya Solar Solutions</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: '18px', maxWidth: '600px', opacity: 0.9, lineHeight: '1.6' }}
              >
                Pioneering the transition to clean, reliable, and sustainable energy in Andhra Pradesh through engineering excellence and transparent business practices.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{ flex: '0 0 auto' }}
            >
              <img 
                src="/assets/logoaboutus.png" 
                alt="Aditya Solar Solutions Logo" 
                style={{ width: '220px', height: '220px', objectFit: 'contain', background: 'white', borderRadius: '32px', padding: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Main Content Column */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* What We Do */}
            <motion.section variants={fadeUpVariant} style={{ background: 'transparent' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#fef08a', padding: '12px', borderRadius: '12px' }}><Settings size={28} color="#ca8a04"/></div>
                <h2 style={{ fontSize: '32px', color: 'var(--primary-navy)', fontWeight: '800', margin: 0 }}>What We Do</h2>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeUpVariant}
                    style={{ 
                      display: 'flex', 
                      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
                      gap: '30px', 
                      background: 'white', 
                      padding: '24px', 
                      borderRadius: '24px', 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.03)', 
                      border: '1px solid #f1f5f9',
                      alignItems: 'center',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{ flex: '1 1 300px' }}>
                      <img src={service.image} alt={service.title} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' }} />
                    </div>
                    <div style={{ flex: '1 1 300px' }}>
                      <h3 style={{ fontSize: '22px', color: 'var(--primary-navy)', fontWeight: '800', marginBottom: '12px' }}>{service.title}</h3>
                      <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why We Are Here */}
            <motion.section variants={fadeUpVariant} style={{ background: 'var(--primary-navy)', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', color: 'white' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--accent-yellow)', fontWeight: '800', marginBottom: '16px' }}>Why We Lead the Industry</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', opacity: 0.9, marginBottom: '16px' }}>
                With over 16+ years of rigorous experience and more than 1,200 successful projects under our belt, Aditya Solar Solutions stands as a beacon of trust and engineering excellence in Andhra Pradesh. We don't just install panels; we build sustainable energy ecosystems tailored to the unique demands of each client.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', opacity: 0.9 }}>
                Our position in the market is driven by our unwavering commitment to using only Tier-1 components, delivering flawless professional installations, and offering long-term support that ensures our customers reap the maximum financial and environmental benefits for decades.
              </p>
            </motion.section>

            {/* Core Values */}
            <motion.section variants={fadeUpVariant} style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#e0e7ff', padding: '12px', borderRadius: '12px' }}><Heart size={28} color="#4f46e5"/></div>
                <h2 style={{ fontSize: '28px', color: 'var(--primary-navy)', fontWeight: '800', margin: 0 }}>Our Core Values</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px' }}>
                  <ShieldCheck size={24} color="var(--primary-navy)" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '18px', color: 'var(--primary-navy)', fontWeight: '700', marginBottom: '8px' }}>Integrity</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Transparent pricing, honest assessments, and no hidden surprises.</p>
                </div>
                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px' }}>
                  <Settings size={24} color="var(--primary-navy)" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '18px', color: 'var(--primary-navy)', fontWeight: '700', marginBottom: '8px' }}>Excellence</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Flawless execution using the best materials available in the market.</p>
                </div>
                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px' }}>
                  <Users size={24} color="var(--primary-navy)" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '18px', color: 'var(--primary-navy)', fontWeight: '700', marginBottom: '8px' }}>Customer First</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Long-term support and relationships that extend far beyond installation.</p>
                </div>
                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px' }}>
                  <Lightbulb size={24} color="var(--primary-navy)" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '18px', color: 'var(--primary-navy)', fontWeight: '700', marginBottom: '8px' }}>Innovation</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Constantly adapting to new technologies to maximize efficiency.</p>
                </div>
              </div>
            </motion.section>

          </motion.div>

          {/* Sidebar Column */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Mission */}
            <motion.div variants={fadeUpVariant} style={{ background: 'linear-gradient(135deg, var(--primary-navy), #1e3a8a)', padding: '40px', borderRadius: '24px', color: 'white', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
              <Target size={36} color="var(--accent-yellow)" style={{ marginBottom: '20px' }} />
              <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>Our Mission</h2>
              <p style={{ fontSize: '15px', lineHeight: '1.7', opacity: 0.9 }}>
                To accelerate the adoption of solar energy by providing highly efficient, accessible, and customized solar solutions. We aim to empower households and businesses to achieve energy independence while significantly reducing their carbon footprint and energy expenditures.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUpVariant} style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Eye size={36} color="var(--accent-green)" style={{ marginBottom: '20px' }} />
              <h2 style={{ fontSize: '24px', color: 'var(--primary-navy)', fontWeight: '800', marginBottom: '16px' }}>Our Vision</h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
                To be the most trusted and technically proficient renewable energy partner in India, transforming the energy landscape by making clean, sustainable power the standard for generations to come.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
