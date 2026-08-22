import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, Users, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const teamMembers = [
  {
    id: 'vikas-teja',
    name: 'Vikas Teja M.',
    role: 'Founder & Proprietor',
    desc: 'B.Tech Electrical Engineer ensuring safe, technically appropriate system designs.',
    image: '/assets/team/md-aditya-solar.jpg'
  },
  {
    id: 'vaddikasulu',
    name: 'M. Vaddikasulu',
    role: 'Father / Senior Advisor',
    desc: '16+ years of practical experience in solar products, installation, and field operations.',
    image: '/assets/team/proprietor-aditya-solar.png'
  },
  {
    id: 'kiran-sai',
    name: 'M. Kiran Sai',
    role: 'Brother / Technical Manager',
    desc: '6+ years of hands-on execution, testing, and system commissioning expertise.',
    image: '/assets/team/kiran-sai.jpeg'
  }
];

const AboutUsPage = ({ onBack, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStrength, setShowStrength] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-transition" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* HEADER SECTION */}
      <div style={{ backgroundColor: 'var(--primary-navy)', paddingTop: 'clamp(100px, 15vw, 140px)', paddingBottom: 'clamp(40px, 8vw, 60px)', color: 'white', position: 'relative', overflow: 'hidden' }}>
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
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(36px, 8vw, 48px)', fontWeight: '800', marginBottom: '16px', letterSpacing: '-1px' }}
          >
            About <span style={{ color: 'var(--accent-yellow)' }}>Aditya Solar</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '20px', maxWidth: '700px', opacity: 0.9, lineHeight: '1.6' }}
          >
            A professionally managed solar energy company focused on delivering reliable and technically sound solar solutions across Andhra Pradesh.
          </motion.p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px' }}>
        
        {/* SPLIT LAYOUT: Text Left, Slider Right */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'stretch' }}>
          
          {/* LEFT: Content */}
          <div style={{ flex: '1 1 min(100%, 500px)', display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 4vw, 30px)' }}>
            
            {/* Who We Are */}
            <div style={{ background: 'white', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--primary-navy)', fontWeight: '800', marginBottom: '16px' }}>
                Who We Are
              </h2>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                <strong>Aditya Solar Solutions</strong> is a professionally managed solar energy company dedicated to delivering reliable, safe, and technically sound solar solutions. We specialize in bringing high-quality renewable energy projects to life—from initial planning and system design to installation, testing, commissioning, and dedicated after-sales support.
              </p>
            </div>

            {/* Our Value Proposition */}
            <div style={{ background: 'white', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Award size={28} color="var(--accent-yellow)" />
                <h2 style={{ fontSize: '24px', color: 'var(--primary-navy)', fontWeight: '800', margin: 0 }}>
                  Our Value Proposition
                </h2>
              </div>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                We bridge the gap between deep-rooted industry wisdom and modern engineering practices. Our strength lies in:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#fef08a', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#ca8a04', flexShrink: 0 }}>1</div>
                  <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    <strong style={{ color: 'var(--primary-navy)' }}>16+ Years of Collective Wisdom:</strong> Unmatched practical knowledge of solar products and field-level challenges.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#fef08a', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#ca8a04', flexShrink: 0 }}>2</div>
                  <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    <strong style={{ color: 'var(--primary-navy)' }}>Technical Excellence:</strong> Led by electrical engineers who prioritize appropriate, high-efficiency system designs.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#fef08a', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#ca8a04', flexShrink: 0 }}>3</div>
                  <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    <strong style={{ color: 'var(--primary-navy)' }}>End-to-End Execution:</strong> A dedicated professional team that handles everything from PM Surya Ghar subsidies to residential, commercial, and agricultural solar installations (including solar fencing and water heaters).
                  </p>
                </div>
              </div>
            </div>

            {/* Impact & Track Record */}
            <div style={{ background: 'linear-gradient(135deg, var(--primary-navy), #1e3a8a)', padding: 'clamp(24px, 5vw, 40px)', borderRadius: '32px', color: 'white', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
              <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '24px' }}>
                Impact & Track Record
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-yellow)" />
                  <span style={{ fontSize: '16px', opacity: 0.9 }}><strong>1,200+</strong> Total Projects Completed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-yellow)" />
                  <span style={{ fontSize: '16px', opacity: 0.9 }}><strong>150+</strong> Solar Power Projects (inc. PM Surya Ghar)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-yellow)" />
                  <span style={{ fontSize: '16px', opacity: 0.9 }}><strong>1,000+</strong> Solar Fencing, Water Heaters, & Street Lights installed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-yellow)" />
                  <span style={{ fontSize: '16px', opacity: 0.9 }}><strong>5,000+</strong> Happy Customers served over the years</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent-yellow)" />
                  <span style={{ fontSize: '16px', opacity: 0.9 }}><strong>1,100+ Kgs</strong> of CO2 emissions reduced annually</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Image Slider */}
          <div style={{ flex: '1 1 min(100%, 500px)', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ position: 'relative', flex: 1, minHeight: 'clamp(400px, 60vh, 600px)', background: 'white', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '-100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ flex: '1', background: 'white', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img 
                      src={teamMembers[currentSlide].image} 
                      alt={teamMembers[currentSlide].name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'white', minHeight: '180px' }}>
                    <div>
                      <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '4px' }}>
                        {teamMembers[currentSlide].name}
                      </h3>
                      <div style={{ color: 'var(--accent-green)', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        {teamMembers[currentSlide].role}
                      </div>
                      <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                        {teamMembers[currentSlide].desc}
                      </p>
                    </div>
                    <button 
                      onClick={() => onNavigate(teamMembers[currentSlide].id)}
                      style={{ alignSelf: 'flex-start', background: 'transparent', border: 'none', color: 'var(--primary-navy)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: 0 }}
                    >
                      VIEW PROFILE <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Slider Dots */}
              <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '8px', zIndex: 10 }}>
                {teamMembers.map((_, idx) => (
                  <div 
                    key={idx}
                    style={{ width: idx === currentSlide ? '24px' : '8px', height: '8px', borderRadius: '4px', background: idx === currentSlide ? 'var(--accent-yellow)' : 'rgba(255,255,255,0.5)', transition: 'all 0.3s' }}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
