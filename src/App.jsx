import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Menu, X, Sun, ShieldCheck, Settings, LineChart, 
  ArrowRight, Home, Building2, Factory, CheckCircle2,
  Phone, MessageCircle, MapPin, Mail, Send,
  Plus, Minus, ArrowLeft, ChevronDown, Briefcase, Zap, Award
} from 'lucide-react';

import ProjectShowcase from './ProjectShowcase';
import SolutionPage from './SolutionPage';
import AboutUsPage from './AboutUsPage';
import SolarCalculator from './SolarCalculator';
import Testimonials from './Testimonials';
import SplashScreen from './SplashScreen';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const AnimatedStat = ({ end, suffix, label, onClick }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    } else {
      setCount(0);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      ref={ref} 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', padding: '20px', borderRadius: '16px', transition: 'background 0.3s' }}
      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
      onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{ fontSize: '56px', fontWeight: '800', color: 'var(--accent-yellow)', marginBottom: '8px', lineHeight: '1' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '14px', color: '#e2e8f0', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', textAlign: 'center' }}>
        {label}
      </div>
    </motion.div>
  );
};

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

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const faqs = [
  {
    question: "How much can I save on my electricity bills with solar panels?",
    answer: "Most of our customers see a reduction of up to 90% in their monthly electricity bills. The exact savings depend on your energy consumption, roof space, and the capacity of the solar plant installed."
  },
  {
    question: "What is the lifespan of a solar power system?",
    answer: "Our premium tier-1 solar panels are built to last over 25-30 years. With proper maintenance, the system will continue to generate clean energy efficiently throughout its lifespan."
  },
  {
    question: "How does a solar water heater work during cloudy days?",
    answer: "Our solar water heaters are highly efficient and can absorb diffused sunlight even on cloudy days. Additionally, they come equipped with an inbuilt electrical backup element to ensure you have hot water 24/7 regardless of the weather."
  },
  {
    question: "Are solar lights bright enough for security purposes?",
    answer: "Yes, absolutely! Our commercial-grade solar street and flood lights use high-efficiency LEDs that provide intense, wide-area illumination. They are specifically designed for robust security and perimeter lighting."
  },
  {
    question: "How often do solar panels require cleaning?",
    answer: "To maintain peak energy generation, we recommend professional solar cleaning every 2 to 4 weeks depending on the dust levels in your area. Our dedicated maintenance team uses specialized equipment to safely remove dust without scratching the panels."
  }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.question}</span>
        <div className="faq-icon-wrapper">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const teamMembers = [
  {
    id: 'vikas-teja',
    name: 'M. Vikas Teja',
    role: 'MANAGING DIRECTOR',
    edu: 'B.Tech (EE)',
    image: '/assets/team/md-aditya-solar.jpg',
    about: 'Vikas Teja M. is the Managing Director of Aditya Solar Solutions. With a strong background in Electrical Engineering, he leads the company with a focus on technically appropriate system design, safe electrical practices, and uncompromising quality in project execution.',
    stats: [
      { label: 'Education', value: 'B.Tech EE' },
      { label: 'Solar Installations', value: '450+' },
      { label: 'System Design', value: 'Advanced' }
    ]
  },
  {
    id: 'vaddikasulu',
    name: 'M. Vaddikasulu',
    role: 'FOUNDER',
    edu: 'Founder',
    image: '/assets/team/proprietor-aditya-solar.png',
    about: 'M. Vaddikasulu is the foundation of Aditya Solar Solutions, bringing unparalleled wisdom and deep-rooted knowledge to the company. His commitment to renewable energy and sustainable practices has been the driving force behind the business. With over 18+ years of extensive experience in the solar industry, he has a profound practical knowledge of solar products, installation practices, system design, and field-level challenges.',
    stats: [
      { label: 'Years Experience', value: '18+' },
      { label: 'Industry Knowledge', value: 'Expert' },
      { label: 'Projects Guided', value: '450+' }
    ]
  },
  {
    id: 'kiran-sai',
    name: 'M. Kiran Sai',
    role: 'TECHNICAL MANAGER',
    edu: 'Technical Lead',
    image: '/assets/team/kiran-sai.jpeg',
    about: 'M. Kiran Sai serves as the Technical Manager, ensuring that every installation meets the highest standards of safety and efficiency. He brings hands-on problem-solving skills and technical rigor to the operations team. He contributes 6+ years of hands-on solar industry experience. His practical field expertise in electrical works, testing, and commissioning plays a crucial role in the successful deployment of solar projects.',
    stats: [
      { label: 'Years Experience', value: '6+' },
      { label: 'Field Execution', value: 'Lead' },
      { label: 'Quality Control', value: '100%' }
    ]
  }
];

const TeamProfilePage = ({ member, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const icons = [
    <Briefcase size={24} />,
    <Zap size={24} />,
    <Award size={24} />
  ];

  const iconColors = ['#3b82f6', '#10b981', '#f5b82e'];
  const iconBgs = ['rgba(59,130,246,0.15)', 'rgba(16,185,129,0.15)', 'rgba(245,184,46,0.15)'];

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh', 
      padding: '160px 20px 80px 20px', 
      fontFamily: '"Inter", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Orbs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'var(--accent-yellow)', opacity: '0.02', borderRadius: '50%', filter: 'blur(100px)' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: '#3b82f6', opacity: '0.02', borderRadius: '50%', filter: 'blur(100px)' }}></div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '40px' }}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack} 
            style={{ 
              background: 'white', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '100px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '13px', 
              fontWeight: '700', 
              color: '#334155', 
              letterSpacing: '1.5px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              textTransform: 'uppercase'
            }}
          >
            <ArrowLeft size={16} /> BACK TO TEAM
          </motion.button>
        </div>

        {/* Main Card (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            background: 'white', 
            borderRadius: '40px', 
            overflow: 'hidden', 
            display: 'flex', 
            flexWrap: 'wrap',
            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
            marginBottom: '40px'
          }}
        >
          {/* Left: Image */}
          <div style={{ 
            flex: '1 1 450px', 
            position: 'relative', 
            minHeight: '600px',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: `url('${member.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}></div>
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              height: '50%',
              background: 'linear-gradient(to top, var(--primary-navy) 0%, transparent 100%)',
            }}></div>
            <div style={{ 
              position: 'absolute', 
              bottom: '40px', 
              left: '40px', 
              right: '40px'
            }}>
              <div style={{ 
                display: 'inline-block',
                background: 'rgba(245, 184, 46, 0.2)',
                border: '1px solid rgba(245, 184, 46, 0.5)',
                color: 'var(--accent-yellow)',
                padding: '6px 16px',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '2px',
                marginBottom: '16px'
              }}>
                {member.role}
              </div>
              <h2 style={{ color: 'white', fontSize: '48px', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1.1' }}>
                {member.name}
              </h2>
            </div>
          </div>

          {/* Right: Content */}
          <div style={{ flex: '1 1 500px', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent-yellow)' }}></div>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>The Visionary</h3>
            </div>
            <h4 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '24px', lineHeight: '1.3' }}>About {member.name.split(' ')[member.name.split(' ').length - 1]}</h4>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8', marginBottom: '48px', fontWeight: '400' }}>
              {member.about}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent-green)' }}></div>
              <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Track Record</h3>
            </div>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.8', fontWeight: '400' }}>
              He holds a {member.edu} and has successfully overseen the execution of over <span style={{ color: '#0f172a', fontWeight: '700' }}>{member.stats && member.stats.length > 1 ? member.stats[1].value : 'multiple'} installations</span>, ranging from residential PM Surya Ghar projects to large-scale off-grid commercial applications.
            </p>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {member.stats && member.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              whileHover={{ y: -5 }}
              style={{ 
                background: 'white', 
                borderRadius: '24px', 
                padding: '30px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                cursor: 'default'
              }}
            >
              <div style={{ 
                width: '64px', 
                height: '64px', 
                background: iconBgs[i % 3], 
                color: iconColors[i % 3], 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {icons[i] || <Award size={28} />}
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export const solutionsData = [
  {
    id: 'pm-surya-ghar',
    title: 'PM Surya Ghar',
    subtitle: 'Free Electricity Scheme by Govt of India',
    fullDescription: 'PM Surya Ghar Muft Bijli Yojana is a groundbreaking government initiative designed to provide up to 300 units of free electricity every month to 1 crore households across India. By installing a solar rooftop system, you not only eliminate your monthly electricity bills but also contribute to a greener, more sustainable future.\n\nAs a Govt Approved Vendor, Aditya Solar Solutions provides end-to-end support for this scheme. We handle everything from the initial application and subsidy processing to the expert installation of high-quality solar panels and final net-metering setup. Take advantage of significant government subsidies and secure your energy independence today.',
    image: '/assets/hero-pm.png',
    features: [
      { title: 'Free Electricity', desc: 'Up to 300 units free every month.' },
      { title: 'Govt Subsidy', desc: 'Massive financial support for installation.' },
      { title: 'Hassle-Free', desc: 'We manage all paperwork and approvals.' }
    ]
  },
  {
    id: 'solar-panels',
    title: 'Solar Panels',
    subtitle: 'High-efficiency monocrystalline panels for residential & commercial use.',
    fullDescription: 'Our premium solar panels are designed to maximize energy production even in low-light conditions. Built with the latest Tier-1 monocrystalline technology, they offer superior efficiency, long-term durability, and an excellent return on your investment.\n\nWhether you are looking to drastically reduce your home electricity bills through the PM Surya Ghar Muft Bijli Yojana, or aiming to offset heavy commercial loads, our solar power plants are engineered for maximum yield. We handle everything from site inspection and structural mounting to grid synchronization and net-metering approval. Our panels come with an industry-leading 25-year performance warranty, ensuring decades of clean, reliable, and free electricity generation for your property.',
    image: '/assets/solar-panels.jpeg',
    features: [
      { title: 'High Efficiency', desc: 'Industry-leading conversion rates up to 22%.' },
      { title: 'Durability', desc: 'Built to withstand harsh weather conditions.' },
      { title: 'Warranty', desc: '25-year performance warranty guaranteed.' }
    ]
  },
  {
    id: 'solar-heater',
    title: 'Solar Water Heater',
    subtitle: 'Cost-effective thermal solutions for instant hot water.',
    fullDescription: 'Reduce your electricity bills significantly with our advanced solar water heating systems. Using highly efficient Evacuated Tube Collector (ETC) or Flat Plate Collector (FPC) technology, they rapidly absorb solar radiation to provide hot water for your entire household or commercial facility, year-round.\n\nWater heating accounts for a massive portion of monthly electricity consumption. By switching to our solar thermal solutions, you can cut your heating costs by up to 80%. Our systems are built with specialized anti-corrosion inner tanks, ensuring they withstand hard water scaling over the years. With minimal maintenance required and a rapid return on investment (usually within 2-3 years), our solar heaters are the smartest upgrade for modern homes, hospitals, and hotels.',
    image: '/assets/solar-water-heater.png',
    features: [
      { title: 'Energy Saving', desc: 'Cuts water heating costs by up to 80%.' },
      { title: 'Fast Heating', desc: 'Advanced tubes retain heat longer.' },
      { title: 'Low Maintenance', desc: 'Requires minimal upkeep over its lifespan.' }
    ]
  },
  {
    id: 'solar-lights',
    title: 'Solar Lights',
    subtitle: 'Bright, autonomous lighting for streets & gardens.',
    fullDescription: 'Illuminate your pathways, gardens, and streets with zero electricity cost. Our premium solar lighting systems are entirely autonomous, requiring no underground trenching, complicated wiring, or grid connections. They feature high-capacity built-in lithium-ion batteries and smart ambient sensors that automatically turn the lights on at dusk and off at dawn.\n\nDesigned to withstand extreme weather conditions, our IP65-rated solar lights provide brilliant, long-lasting illumination through heavy rain and high heat. We offer a wide range of solutions, including integrated street lights for municipalities, decorative garden lamps, and powerful floodlights for security. By utilizing ultra-bright LED technology paired with intelligent energy management, our lights ensure your premises remain bright and secure all night long.',
    image: '/assets/solar-lights.jpeg',
    features: [
      { title: 'Auto On/Off', desc: 'Smart sensors detect ambient light levels.' },
      { title: 'Weatherproof', desc: 'IP65 rated for total water resistance.' },
      { title: 'Easy Install', desc: 'No trenching or wiring required.' }
    ]
  },
  {
    id: 'solar-fencing',
    title: 'Solar Fencing',
    subtitle: 'Secure your perimeter with eco-friendly electric fencing.',
    fullDescription: 'Protect your agricultural land, remote farmhouses, or commercial property perimeters with our highly effective solar-powered electric fencing. It delivers a safe, non-lethal, but extremely strong deterrent shock to keep unauthorized intruders and wild animals away, without relying on the unreliable electrical grid.\n\nSecurity shouldn\'t stop when the power goes out. Our solar fencing systems run independently, utilizing a dedicated solar panel that continuously charges a heavy-duty battery backup. This guarantees uninterrupted 24/7 protection. The system is designed with intelligent zone monitoring and alarm triggers that instantly notify you of any breach attempts. Far more cost-effective and intimidating than traditional brick walls or barbed wire, our solar fencing is the ultimate perimeter defense solution.',
    image: '/assets/solar-fencing.jpg',
    features: [
      { title: '24/7 Protection', desc: 'Battery backup ensures continuous security.' },
      { title: 'Non-Lethal', desc: 'Safe for humans and animals.' },
      { title: 'Cost Effective', desc: 'Cheaper than traditional brick walls.' }
    ]
  },
  {
    id: 'solar-cleaning',
    title: 'Solar Cleaning',
    subtitle: 'Professional maintenance to maximize power output.',
    fullDescription: 'Dust, bird droppings, and environmental debris can drastically reduce your solar panel efficiency by up to 30%. Our professional solar cleaning service ensures your investment continues to operate at absolute peak performance.\n\nWe utilize specialized, ultra-soft non-abrasive brushes combined with purified, deionized water to safely remove grime without leaving micro-scratches or hard water stains on the delicate panel glass. Regular maintenance not only instantly boosts your daily energy generation, but also prevents long-term hot-spot damage to the solar cells. Whether it\'s a one-time deep clean or a scheduled automated maintenance plan, our expert technicians ensure your system runs exactly as it did on day one.',
    image: '/assets/solar-cleaning.jpeg',
    features: [
      { title: 'Yield Boost', desc: 'Instantly increases energy generation.' },
      { title: 'Safe Cleaning', desc: 'Prevents micro-scratches on panel glass.' },
      { title: 'Scheduled Plans', desc: 'Automated recurring maintenance available.' }
    ]
  }
];

const statContentMap = {
  projects: {
    title: "1200+ Projects Completed",
    subtitle: "Our Track Record",
    sections: [
      {
        heading: "150+ Solar Power Projects",
        desc: "Residential & Commercial Solar Power Systems, including PM Surya Ghar Muft Bijli Yojana installations. We ensure high efficiency and reliability."
      },
      {
        heading: "1000+ Fencing, Heater & Lights Projects",
        desc: "Extensive experience in installing solar water heaters, solar security fencing, and solar street lights across various locations.",
        bullets: ["Solar Fencing", "Solar Water Heaters", "Solar Street Lights"]
      }
    ]
  },
  experience: {
    title: "18+ Years Experience",
    subtitle: "Our Leadership & Experience",
    sections: [
      {
        heading: "M. Vaddikasulu - Founder",
        desc: "25+ Years Experience. M. Vaddikasulu is the foundation of Aditya Solar Solutions. With 25+ years of extensive experience in the industry, he has profound practical knowledge of solar products, installation practices, system design, and field-level challenges. His expertise ensures that every project is built on reliable and proven methodologies."
      },
      {
        heading: "M. Vikas Teja - Managing Director",
        desc: "3+ Years Experience. Vikas Teja M. leads the company with a focus on technically appropriate system design. He holds a B.Tech in Electrical Engineering and has successfully overseen the execution of over 450+ solar installations, ranging from residential PM Surya Ghar projects to large-scale off-grid applications."
      },
      {
        heading: "M. Kiran Sai - Technical Manager",
        desc: "6+ Years Experience. M. Kiran Sai serves as the Technical Manager, ensuring that every installation meets the highest standards. His practical field expertise in electrical works, testing, and commissioning plays a crucial role in the successful deployment of solar projects."
      }
    ]
  },
  customers: {
    title: "5000+ Happy Customers",
    subtitle: "Building Trust",
    sections: [
      {
        desc: "Over the past 16+ years, Aditya Solar Solutions has proudly served more than 5,000 satisfied customers across residential, commercial, and agricultural sectors. Our commitment to quality, reliable after-sales service, and efficient solar installations has earned us the trust of thousands of families and businesses."
      },
      {
        heading: "Top-Rated Service",
        desc: "We ensure 100% customer satisfaction through premium solar products and dedicated support."
      },
      {
        heading: "Trusted Partner",
        desc: "From consultation to installation, we guide our customers every step of the way towards energy independence."
      }
    ]
  },
  co2: {
    title: "1100+ Kgs of CO2 Reduced",
    subtitle: "Environmental Impact",
    sections: [
      {
        desc: "By shifting to renewable solar energy, our projects have collectively reduced over 1100 kilograms of carbon dioxide emissions. This is equivalent to planting thousands of trees and creating a greener, more sustainable future for the next generation."
      },
      {
        heading: "Cleaner Air",
        desc: "Every solar panel installed directly contributes to minimizing harmful greenhouse gases in our atmosphere."
      },
      {
        heading: "Sustainable Energy",
        desc: "We harness the infinite power of the sun, promoting eco-friendly energy independence."
      }
    ]
  }
};

const StatModal = ({ statId, onClose }) => {
  const content = statContentMap[statId];
  if (!content) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(5px)' }} onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'white', borderRadius: '24px', padding: '40px', maxWidth: '700px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary-navy)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', paddingBottom: '4px' }}>&times;</button>
        
        <div style={{ marginBottom: '32px' }}>
          <span style={{ color: 'var(--accent-yellow)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>{content.subtitle}</span>
          <h2 style={{ fontSize: '36px', color: 'var(--primary-navy)', fontWeight: '800', marginTop: '8px', lineHeight: '1.2' }}>{content.title}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {content.sections.map((sec, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              {sec.heading && <h3 style={{ fontSize: '20px', color: 'var(--primary-navy)', fontWeight: '800', marginBottom: '12px' }}>{sec.heading}</h3>}
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{sec.desc}</p>
              {sec.bullets && (
                <ul style={{ marginTop: '12px', paddingLeft: '20px', color: '#475569', lineHeight: '1.7' }}>
                  {sec.bullets.map((b, bi) => <li key={bi} style={{ marginBottom: '8px' }}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TrustedPartners = () => {
  const partners = [
    '/assets/partners/waaree.png',
    '/assets/partners/vikram.png',
    '/assets/partners/renew.jpg',
    '/assets/partners/partner1.jpg',
    '/assets/partners/partner2.jpg',
    '/assets/partners/partner1.jpeg',
    '/assets/partners/partner2.jpeg',
    '/assets/partners/partner3.jpeg',
    '/assets/partners/partner4.jpeg',
    '/assets/partners/deye.png',
    '/assets/partners/waacab.jpeg'
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-header">
          <div className="line line-left"></div>
          <h2>TRUSTED BRAND PARTNERS</h2>
          <div className="line line-right"></div>
        </div>
      </div>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <div className="marquee-container">
          {[...partners, ...partners, ...partners, ...partners].map((logo, index) => (
            <div key={index} className="partner-card">
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrochureModal = ({ onClose }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open('/assets/aditya_solar_brochure.pdf', '_blank');
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(5px)' }} onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'white', borderRadius: '24px', padding: '40px', maxWidth: '450px', width: '100%', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', color: 'var(--primary-navy)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', paddingBottom: '4px', transition: 'background 0.2s' }}>&times;</button>
        
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--primary-navy)', fontWeight: '800', marginBottom: '8px' }}>Download Brochure</h2>
          <p style={{ color: '#475569', fontSize: '15px' }}>Enter your details below to get our complete product catalog.</p>
        </div>

        <form className="enquiry-form" onSubmit={handleDownload} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Full Name</label>
            <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '15px' }} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Phone Number</label>
            <input type="tel" placeholder="+91 94936 85963" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '15px' }} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>Email Address</label>
            <input type="email" placeholder="youremail@example.com" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '15px' }} />
          </div>
          <button type="submit" className="btn btn-yellow submit-btn" style={{ marginTop: '12px', width: '100%', justifyContent: 'center', borderRadius: '12px', padding: '14px' }}>
            Get Brochure <Send size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activePage, setActivePage] = useState('home');
  const [activeStatModal, setActiveStatModal] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  useEffect(() => {
    if (showSplash) return;
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % solutionsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showSplash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { 
      name: 'PRODUCTS', 
      id: 'solutions',
      dropdown: [
        { label: 'Solar Panels', id: 'solar-panels' },
        { label: 'Solar Fencing', id: 'solar-fencing' },
        { label: 'Solar Lights', id: 'solar-lights' },
        { label: 'Solar Heater', id: 'solar-heater' },
        { label: 'Solar Cleaning', id: 'solar-cleaning' }
      ]
    },
    { name: 'PM SURYA GHAR', id: 'pm-surya-ghar' },
    { name: 'TEAM', id: 'team' },
    { name: 'CONTACT', id: 'contact-new' }
  ];

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* 1. NAVBAR */}
      <header className={`navbar-new ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container" style={{ padding: '0' }}>
          <a href="#" className="nav-logo-link" onClick={() => setActivePage('home')}>
            <img src="/assets/adityasolar.jpg" alt="Aditya Solar Logo" style={{ height: '48px', objectFit: 'contain' }} />
          </a>
          
          <nav className="nav-links">
            {navItems.map((item) => (
              <div key={item.name} className="nav-item-group" style={{ position: 'relative' }}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link-new ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setActivePage('home')}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="nav-underline"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
                
                {item.dropdown && (
                  <div className="nav-dropdown">
                    {item.dropdown.map(drop => (
                      <a 
                        key={drop.label} 
                        href={`#${drop.id}`} 
                        className="dropdown-link"
                        onClick={(e) => {
                          e.preventDefault();
                          setActivePage(drop.id);
                        }}
                      >
                        {drop.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <a href="#contact-new" className="btn btn-yellow nav-cta">GET QUOTE</a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className={`mobile-menu ${isScrolled ? 'scrolled' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => { setIsMobileMenuOpen(false); setActivePage('home'); }}
                >
                  {item.name}
                </a>
                {item.dropdown && item.dropdown.map(drop => (
                  <a 
                    key={drop.label}
                    href={`#${drop.id}`} 
                    className="nav-link sub-link"
                    style={{ paddingLeft: '40px', fontSize: '15px', color: '#666' }}
                    onClick={(e) => { 
                      e.preventDefault();
                      setIsMobileMenuOpen(false); 
                      setActivePage(drop.id); 
                    }}
                  >
                    {drop.label}
                  </a>
                ))}
              </React.Fragment>
            ))}
            <a href="#contact-new" className="btn btn-yellow" style={{ width: '100%', marginTop: '16px', textAlign: 'center' }}>
              GET QUOTE
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeStatModal && <StatModal statId={activeStatModal} onClose={() => setActiveStatModal(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isBrochureModalOpen && <BrochureModal onClose={() => setIsBrochureModalOpen(false)} />}
      </AnimatePresence>

      {activePage !== 'home' ? (
        activePage.startsWith('solar-') 
          ? <SolutionPage solution={solutionsData.find(s => s.id === activePage)} onBack={() => {
              setActivePage('home');
              setTimeout(() => {
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} />
          : activePage === 'about-us'
            ? <AboutUsPage onBack={() => setActivePage('home')} onNavigate={setActivePage} />
            : <TeamProfilePage member={teamMembers.find(m => m.id === activePage)} onBack={() => setActivePage('home')} />
      ) : (
        <main>
          {/* 2. HERO SECTION NEW */}
          <section id="home" className="hero-section-new">
            <div className="hero-overlay"></div>
            <div className="hero-content-wrapper">
              {/* Left Content */}
              <motion.div 
                className="hero-left"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
              <motion.div className="hero-badge" variants={fadeUpVariant}>
                <div className="hero-badge-dot"></div>
                <span style={{ color: 'white' }}>ANDHRA'S MOST TRUSTED SOLAR PARTNER</span>
              </motion.div>
              
              <motion.h1 className="hero-heading" variants={fadeUpVariant}>
                <div style={{ whiteSpace: 'nowrap' }}>Power your future</div>
                <span>Switch to solar</span>
              </motion.h1>
              
              <motion.div className="hero-checks" variants={fadeUpVariant}>
                {[
                  "Solar Panels and Structures",
                  "Solar Lights",
                  "Solar Heater",
                  "Solar Cleaning"
                ].map((item, idx) => (
                  <div key={idx} className="hero-check-item">
                    <CheckCircle2 size={24} color="#F5B82E" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div className="hero-actions" variants={fadeUpVariant}>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsBrochureModalOpen(true); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '16px', fontWeight: '800', background: 'white', color: 'var(--primary-navy)', border: 'none', borderRadius: '100px', cursor: 'pointer', textDecoration: 'none' }}>
                  Download Brochure
                </a>
                <a href="https://www.instagram.com/adityasolarsolutions.info/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', background: 'var(--accent-yellow)', color: 'var(--primary-navy)', border: 'none', borderRadius: '50%', cursor: 'pointer', textDecoration: 'none' }}>
                  <InstagramIcon />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div 
              className="hero-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-right-card" style={{ padding: '12px', background: 'white', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}>
                <h2 className="card-title" style={{ color: '#16a34a', marginBottom: '12px', textTransform: 'uppercase' }}>
                  {solutionsData[currentProductIndex].id === 'pm-surya-ghar' ? 'PM Surya Ghar' : 'Our Products'}
                </h2>
                <div className="product-slider" style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '24px', overflow: 'hidden' }}>
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={currentProductIndex}
                      src={solutionsData[currentProductIndex].image}
                      alt={solutionsData[currentProductIndex].title}
                      initial={{ opacity: 0, x: '100%' }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: '-100%' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: solutionsData[currentProductIndex].id === 'solar-lights' ? 'center 5%' : 'center' }}
                    />
                  </AnimatePresence>

                  {/* Black Gradient Overlay */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', zIndex: 5, pointerEvents: 'none' }} />
                  
                  {/* Glowing Title inside slider */}
                  <div className="card-footer-text" style={{ position: 'absolute', bottom: '30px', left: '0', right: '0', textAlign: 'center', zIndex: 10 }}>
                    {solutionsData[currentProductIndex].title.toUpperCase()}
                  </div>
                  
                  <div style={{ position: 'absolute', bottom: '12px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '6px', zIndex: 10 }}>
                    {solutionsData.map((_, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          width: idx === currentProductIndex ? '16px' : '6px', 
                          height: '6px', 
                          borderRadius: '4px', 
                          background: idx === currentProductIndex ? '#16a34a' : 'rgba(255, 255, 255, 0.6)', 
                          transition: 'all 0.3s ease' 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sexy Slide Bar Scroll Indicator */}
          <div className="modern-scroll-indicator" style={{ left: 'auto', right: '40px', transform: 'none' }} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <div className="scroll-text">EXPLORE</div>
            <div className="scroll-track">
              <motion.div 
                className="scroll-thumb"
                animate={{ y: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </section>

        {/* TRUSTED BRAND PARTNERS */}
        <TrustedPartners />

        {/* 5. INTRODUCTION SECTION */}
        <section id="about" className="section" style={{ backgroundColor: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative Background Elements */}
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'var(--accent-yellow)', opacity: '0.1', borderRadius: '50%', filter: 'blur(60px)' }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'var(--accent-green)', opacity: '0.1', borderRadius: '50%', filter: 'blur(60px)' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="intro-grid">
              <motion.div 
                className="intro-image-wrapper"
                variants={scaleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ position: 'relative' }}
              >
                <img 
                  src="/assets/logoaboutus.png" 
                  alt="Aditya Solar Solutions Logo" 
                  className="intro-image"
                />
                
                {/* Overlay & Text */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '140px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingBottom: '24px',
                  pointerEvents: 'none'
                }}>
                  <span style={{
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '800',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Govt Approved Vendor
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div style={{ marginBottom: '16px' }} variants={fadeUpVariant}>
                  <span style={{ display: 'inline-block', color: 'var(--accent-yellow)', fontSize: '13px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    ABOUT US
                  </span>
                </motion.div>
                
                <motion.h2 className="h2-section" style={{ color: 'var(--primary-navy)', fontSize: '46px', lineHeight: '1.1', fontWeight: '800', marginBottom: '24px', letterSpacing: '-1px' }} variants={fadeUpVariant}>
                  Reliable Solar Solutions.<br/>
                  <span style={{ color: 'var(--accent-green)' }}>Built Around Your Needs.</span>
                </motion.h2>
                
                <motion.p className="text-body" style={{ color: '#475569', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px', maxWidth: '90%' }} variants={fadeUpVariant}>
                  Aditya Solar Solutions is a trusted, professional solar energy company focused on delivering highly dependable and sustainable solar solutions for homes, businesses, and industrial energy requirements. We bring transparency and engineering excellence to every project.
                </motion.p>
                
                <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }} variants={fadeUpVariant}>
                  <div style={{ background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #f1f5f9' }}>
                    <div style={{ background: '#fef08a', padding: '10px', borderRadius: '10px' }}><ShieldCheck size={24} color="#ca8a04"/></div>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: 'var(--primary-navy)' }}>Premium Quality<br/><span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Tier-1 Components</span></span>
                  </div>
                  <div style={{ background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid #f1f5f9' }}>
                    <div style={{ background: '#bbf7d0', padding: '10px', borderRadius: '10px' }}><Settings size={24} color="#16a34a"/></div>
                    <span style={{ fontWeight: '700', fontSize: '15px', color: 'var(--primary-navy)' }}>Expert Installation<br/><span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Professional Team</span></span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpVariant} style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="#projects" className="btn btn-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}>
                    Discover Our Impact <ArrowRight size={18} />
                  </a>
                  <button onClick={() => setActivePage('about-us')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', backgroundColor: 'transparent', border: '2px solid var(--primary-navy)', color: 'var(--primary-navy)', borderRadius: '100px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-navy)'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--primary-navy)'; }}>
                    Read More
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated Impact / Stats Section */}
        <section style={{ backgroundColor: 'var(--primary-navy)', padding: '60px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <AnimatedStat end={18} suffix="+" label="Years Experience" onClick={() => setActiveStatModal('experience')} />
              <AnimatedStat end={1100} suffix="+" label="Kgs CO2 Reduced" onClick={() => setActiveStatModal('co2')} />
              <AnimatedStat end={5000} suffix="+" label="Happy Customers" onClick={() => setActiveStatModal('customers')} />
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <AnimatedStat end={1200} suffix="+" label="Projects Completed" onClick={() => setActiveStatModal('projects')} />
              </div>
              <a href="#projects" className="btn btn-yellow" style={{ marginTop: '20px', padding: '8px 24px', fontSize: '14px' }}>OUR IMPACT</a>
            </div>
          </div>
        </section>

        {/* 6. PRODUCTS SECTION (BENTO GRID) */}
        <section id="solutions" className="section solutions-section" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <motion.div 
              className="section-header text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}
            >
              <div className="label-small" style={{ marginBottom: '16px', background: 'rgba(22, 163, 74, 0.1)', color: 'var(--accent-green)', padding: '6px 16px', borderRadius: '100px', fontWeight: '700', letterSpacing: '1px' }}>
                OUR PORTFOLIO
              </div>
              <h2 className="h2-section" style={{ fontSize: '42px', fontWeight: '800', letterSpacing: '-0.5px' }}>
                Solar Products for <span style={{ color: 'var(--accent-yellow, #F5B82E)' }}>Every Need</span>
              </h2>

            </motion.div>

            <div className="bento-grid">
              {solutionsData.filter(sol => sol.id !== 'pm-surya-ghar').map((sol, i) => (
                <motion.div 
                  key={sol.id} 
                  className={`bento-card ${i < 2 ? 'bento-large' : 'bento-small'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setActivePage(sol.id)}
                  style={{ 
                    backgroundImage: `url('${sol.image}')`,
                    backgroundPosition: sol.id === 'solar-heater' ? 'center 25%' : (sol.id === 'solar-lights' ? 'center 5%' : 'center'),
                    cursor: 'pointer'
                  }}
                >
                  <div className="bento-overlay"></div>
                  <div className="bento-content" style={{ justifyContent: 'flex-end' }}>
                    <div className="bento-text">
                      <h3 className="bento-title">{sol.title}</h3>
                      <button 
                        className="bento-explore-btn"
                      >
                        EXPLORE DIVISION <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PM SURYA GHAR SECTION */}
        <section id="pm-surya-ghar" className="section pm-surya-ghar-section" style={{ overflow: 'hidden' }}>
          <div className="container">
            <div className="intro-grid">
              {/* Left Side: Text Content */}
              <motion.div 
                className="pm-content"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="label-small" style={{ marginBottom: '12px' }}>GOVERNMENT INITIATIVE</div>
                <h2 className="h2-section" style={{ color: 'var(--primary-navy)', marginBottom: '24px' }}>
                  PM Surya Ghar <br/><span style={{ color: 'var(--accent-yellow)' }}>Muft Bijli Yojana</span>
                </h2>
                <p className="text-body" style={{ marginBottom: '20px' }}>
                  Empower your home with free electricity through the Prime Minister's flagship solar scheme. Get significant subsidies and reduce your electricity bill to zero.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 color="var(--accent-yellow)" size={20} /> <span>Up to 300 units of free electricity per month</span></li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 color="var(--accent-yellow)" size={20} /> <span>Massive government subsidies up to ₹78,000</span></li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 color="var(--accent-yellow)" size={20} /> <span>Easy application and approval process</span></li>
                </ul>
                <a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noreferrer" className="btn btn-yellow">
                  View Official Portal
                </a>
              </motion.div>

              {/* Right Side: Image with Overlay */}
              <motion.div 
                className="pm-image-wrapper"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: '#ffffff', display: 'flex', flexDirection: 'column' }}
              >
                <img 
                  src="/assets/pm-surya-ghar.png" 
                  alt="PM Surya Ghar Rooftop Solar" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', minHeight: '400px' }} 
                />
                {/* Black Gradient Overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', pointerEvents: 'none' }} />
                
                {/* Overlay Text */}
                <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px', color: 'white' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.2' }}>
                    Join 1 Crore+ Households
                  </div>
                  <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                    Benefiting from sustainable solar energy and massive government subsidies.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5.5 PROJECT SHOWCASE (3D Carousel) */}
        <ProjectShowcase />

        {/* TEAM SECTION */}
        <section id="team" className="section team-section">
          <div className="container">
            <motion.div 
              className="team-header"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="team-badge">OUR TEAM</div>
              <h2 className="h2-section" style={{ textAlign: 'center', marginTop: '16px' }}>
                Meet the <span style={{ color: 'var(--accent-yellow, #F5B82E)', fontStyle: 'italic' }}>Experts</span>
              </h2>
              <p className="text-body" style={{ textAlign: 'center', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
                The brilliant minds driving the solar revolution forward with decades of combined experience.
              </p>
            </motion.div>

            <div className="team-layout">
              {/* Left: MD */}
              <motion.div 
                className="team-member small"
                onClick={() => setActivePage('vikas-teja')}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="team-avatar-wrapper">
                  <img src="/assets/team/md-aditya-solar.jpg" alt="M. Vikas Teja" />
                </div>
                <h3 className="team-name">M. Vikas Teja</h3>
                <div className="team-designation">MANAGING DIRECTOR</div>
              </motion.div>

              {/* Middle: Founder (Featured) */}
              <motion.div 
                className="team-member large"
                onClick={() => setActivePage('vaddikasulu')}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="team-avatar-wrapper">
                  <img src="/assets/team/proprietor-aditya-solar.png" alt="M. Vaddikasulu" />
                </div>
                <h3 className="team-name">M. Vaddikasulu</h3>
                <div className="team-designation">FOUNDER</div>
              </motion.div>

              {/* Right: Technical Manager */}
              <motion.div 
                className="team-member small"
                onClick={() => setActivePage('kiran-sai')}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="team-avatar-wrapper">
                  <img src="/assets/team/kiran-sai.jpeg" alt="M. Kiran Sai" />
                </div>
                <h3 className="team-name">M. Kiran Sai</h3>
                <div className="team-designation">TECHNICAL MANAGER</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. SOLAR CALCULATOR */}
        <SolarCalculator />

        {/* ENQUIRY & MAP SECTION */}
        <section id="contact-new" className="section enquiry-section">
          <div className="container">
            <motion.div 
              className="enquiry-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2-section" style={{ textAlign: 'center' }}>
                Enquiry & <span style={{ color: 'var(--accent-yellow, #F5B82E)' }}>Location</span>
              </h2>
              <p className="text-body" style={{ textAlign: 'center', marginBottom: '40px' }}>
                Get in touch with us for a free quote, or visit our office in Kovvur.
              </p>
            </motion.div>

            <div className="enquiry-grid">
              {/* Left: Form */}
              <motion.div 
                className="enquiry-form-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
                  <h3 style={{ marginBottom: '20px', color: 'var(--primary-navy)', fontSize: '24px' }}>Send an Enquiry</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 94936 85963" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="adityasolarsolution.info@gmail.com" required />
                    </div>
                    <div className="form-group">
                      <label>Service of Interest</label>
                      <select required defaultValue="" className="service-select">
                        <option value="" disabled>Select a service...</option>
                        <option value="residential">Solar Residential</option>
                        <option value="commercial">Solar Commercial</option>
                        <option value="lights">Solar Lights</option>
                        <option value="heater">Solar Water Heater</option>
                        <option value="cleaning">Solar Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Location</label>
                      <input type="text" placeholder="Your City/Area" required />
                    </div>
                    <div className="form-group">
                      <label>How did you hear about us?</label>
                      <input type="text" placeholder="E.g., Google, Friend's Name, Social Media" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="How can we help you with solar?" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-yellow submit-btn" style={{ display: 'flex', gap: '8px' }}>
                    Submit Enquiry <Send size={18} />
                  </button>
                </form>
              </motion.div>

              {/* Right: Map */}
              <motion.div 
                className="enquiry-map-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <iframe 
                  src="https://maps.google.com/maps?q=aditya+solar+solutions,+opposite+Sai+Teja+gardens,+Kovvur,+Andhra+Pradesh+534350&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kovvur Map"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="section faq-section">
          <div className="container">
            <motion.div 
              className="faq-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2-section" style={{ textAlign: 'center' }}>
                Frequently Asked <span style={{ color: 'var(--accent-yellow, #F5B82E)' }}>Questions</span>
              </h2>
              <p className="text-body" style={{ textAlign: 'center', marginBottom: '40px' }}>Everything you need to know about switching to solar.</p>
            </motion.div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <Testimonials />
      </main>
      )}

      {/* 10. PREMIUM FOOTER */}
      <footer className="footer-new">
        {/* Newsletter CTA Strip */}
        <div className="footer-cta-strip">
          <div className="container">
            <div className="footer-cta-content">
              <div className="cta-text-wrapper">
                <h3 className="cta-title">Ready to embrace solar energy?</h3>
                <p className="cta-desc">Get a free consultation and personalized quote for your property.</p>
              </div>
              <a href="#contact-new" className="btn btn-yellow cta-button">
                Get Your Free Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer-grid-new">
            {/* Brand Column */}
            <div className="footer-col-brand">
              <div className="footer-logo-box">
                <img src="/assets/adityasolar.jpg" alt="Aditya Solar Logo" className="footer-logo-img" />
              </div>
              <p className="footer-desc-new">
                Empowering Andhra Pradesh with premium, tailored solar solutions. Reduce your bills and transition to clean, reliable energy independence today.
              </p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/adityasolarsolutions.info/" target="_blank" rel="noopener noreferrer" className="social-icon-new" style={{ color: '#E1306C', borderColor: '#E1306C' }}><InstagramIcon /></a>
                <a href="#" className="social-icon-new" style={{ color: '#1877F2', borderColor: '#1877F2' }}><FacebookIcon /></a>
                <a href="#" className="social-icon-new" style={{ color: '#0A66C2', borderColor: '#0A66C2' }}><LinkedinIcon /></a>
                <a href="#" className="social-icon-new" style={{ color: '#FF0000', borderColor: '#FF0000' }}><YoutubeIcon /></a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links-new">
                {['Home', 'About Us', 'Our Process', 'Projects', 'Careers', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.split(' ')[0].toLowerCase()}`} className="footer-link-item">
                      <ArrowRight size={14} className="link-arrow" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solutions */}
            <div className="footer-col">
              <h4 className="footer-heading">Our Solutions</h4>
              <ul className="footer-links-new">
                <li>
                  <a href="#solutions" className="footer-link-item">
                    <ArrowRight size={14} className="link-arrow" /> Residential Solar
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="footer-link-item">
                    <ArrowRight size={14} className="link-arrow" /> Commercial Solar
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="footer-link-item">
                    <ArrowRight size={14} className="link-arrow" /> Industrial Solar
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="footer-link-item">
                    <ArrowRight size={14} className="link-arrow" /> Solar Maintenance
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="footer-contact-list">
                <li>
                  <div className="contact-icon-box"><MapPin size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Kovvur, Andhra Pradesh, India - 534350</span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box"><Phone size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">Call Us</span>
                    <a href="tel:+919493685963" className="contact-value" style={{marginBottom: '4px'}}>+91 94936 85963</a>
                    <a href="tel:+918341701555" className="contact-value">+91 83417 01555</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-box"><Mail size={16} /></div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <a href="mailto:adityasolarsolution.info@gmail.com" className="contact-value" style={{wordBreak: 'break-all'}}>adityasolarsolution.info@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom-new">
            <div className="footer-bottom-flex">
              <p>&copy; {new Date().getFullYear()} Aditya Solar Solutions. All rights reserved.</p>
              <div className="footer-legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 9999 }}>
        <a href="tel:+919493685963" style={{ width: 'clamp(45px, 8vw, 60px)', height: 'clamp(45px, 8vw, 60px)', borderRadius: '50%', background: '#1877F2', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'transform 0.2s', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <Phone size={28} />
        </a>
        <a href="https://wa.me/919493685963" target="_blank" rel="noreferrer" style={{ width: 'clamp(45px, 8vw, 60px)', height: 'clamp(45px, 8vw, 60px)', borderRadius: '50%', background: '#25D366', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'transform 0.2s', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <MessageCircle size={28} />
        </a>
      </div>
    </>
  );
}

export default App;
