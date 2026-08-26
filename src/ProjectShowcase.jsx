import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  '/assets/projects/001.webp',
  '/assets/projects/20140426_170648.webp',
  '/assets/projects/20140426_170711.webp',
  '/assets/projects/20140502_110913.webp',
  '/assets/projects/20140517_154345.webp',
  '/assets/projects/20140517_160506.webp',
  '/assets/projects/20140723_135235.webp',
  '/assets/projects/20141120_160630.webp',
  '/assets/projects/20160110_090655.webp',
  '/assets/projects/20160806_142125.webp',
  '/assets/projects/20171009_125059.webp',
  '/assets/projects/5kw.webp',
  '/assets/projects/6kw.webp',
  '/assets/projects/IMG-20160829-WA0051.webp',
  '/assets/projects/IMG-20170725-WA0054.webp',
  '/assets/projects/IMG-20170725-WA0055.webp',
  '/assets/projects/IMG-20170725-WA0056.webp',
  '/assets/projects/IMG-20170725-WA0057.webp',
  '/assets/projects/IMG-20170905-WA0031.webp',
  '/assets/projects/IMG-20170905-WA0032.webp',
  '/assets/projects/IMG-20170905-WA0034.webp',
  '/assets/projects/IMG-20170905-WA0035.webp',
  '/assets/projects/IMG-20170905-WA0037.webp',
  '/assets/projects/IMG-20170905-WA0038.webp',
  '/assets/projects/IMG-20170905-WA0039.webp',
  '/assets/projects/IMG-20170905-WA0040.webp',
  '/assets/projects/P1.webp',
  '/assets/projects/PANL.webp',
  '/assets/projects/PHOTO (2).webp',
  '/assets/projects/PHOTO3.webp',
  '/assets/projects/PIC 001.webp',
  '/assets/projects/SOLAR PIS (2).webp',
  '/assets/projects/T satya narayana.webp',
  '/assets/projects/T.webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.19.webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.20 (1).webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.20 (2).webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.20.webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.21 (1).webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.21 (2).webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.21.webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.22 (1).webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.22 (2).webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.22.webp',
  '/assets/projects/WhatsApp Image 2026-08-15 at 08.08.23.webp',
  '/assets/projects/arunakumari.webp',
  '/assets/projects/chagallu.webp',
  '/assets/projects/d sireesha.webp',
  '/assets/projects/gokavaram.webp',
  '/assets/projects/jagampeta.webp',
  '/assets/projects/jangareddy gudem.webp',
  '/assets/projects/lakshmi.webp',
  '/assets/projects/p kanka durga.webp',
  '/assets/projects/panel.webp',
  '/assets/projects/pic (1).webp',
  '/assets/projects/pic (2).webp',
  '/assets/projects/pic.webp',
  '/assets/projects/pnl.webp',
  '/assets/projects/prasad k.webp',
  '/assets/projects/raja rajeswari.webp',
  '/assets/projects/ramesh.webp',
  '/assets/projects/raviteja.webp',
  '/assets/projects/sarma.webp',
  '/assets/projects/ta.webp',
  '/assets/projects/uma.webp',
  '/assets/projects/y satyanarayana.webp'
];

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 60 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="projects" 
      className="project-showcase-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Deep Space Gradients & Animated Orbs */}
      <div className="ps-bg-glow orb-blue"></div>
      <div className="ps-bg-glow orb-orange"></div>
      <div className="ps-grid-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="ps-header">
          <motion.h2 
            className="h2-section" 
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            Solar Installations in <span style={{ color: 'var(--accent-yellow)', fontStyle: 'italic' }}>Action</span>
          </motion.h2>
        </div>

        {/* 3D Carousel Container */}
        <div className="ps-carousel-container group" style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div 
            className="ps-carousel-wrapper"
            style={{
              rotateX,
              rotateY,
              transformPerspective: 2000,
            }}
          >
          <Swiper
            modules={[EffectCreative, Autoplay, Navigation]}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-120%', 0, -500],
                rotate: [0, 0, -10],
                opacity: 0,
              },
              next: {
                shadow: true,
                translate: ['120%', 0, -500],
                rotate: [0, 0, 10],
                opacity: 0,
              },
              active: {
                shadow: true,
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
              }
            }}
            loop={true}
            onSwiper={setSwiperInstance}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="ps-swiper"
          >
            {projects.map((src, idx) => (
              <SwiperSlide key={idx} className="ps-slide">
                <div className="ps-image-wrapper">
                  <img src={src} alt={`Solar Project ${idx + 1}`} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </motion.div>
          
          {/* Custom Navigation */}
          <div className="ps-navigation">
            <button className="ps-button-prev" onClick={() => swiperInstance?.slidePrev()}>
              <ChevronLeft size={32} />
            </button>
            <button className="ps-button-next" onClick={() => swiperInstance?.slideNext()}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
