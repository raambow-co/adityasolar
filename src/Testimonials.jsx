import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Kovvur, AP",
    rating: 5,
    date: "2 weeks ago",
    text: "Installed a 5kW system for my home. The entire process was seamless, and the team at Aditya Solar is highly professional. My electricity bill is practically zero now!"
  },
  {
    name: "Sneha Reddy",
    location: "Rajahmundry, AP",
    rating: 5,
    date: "1 month ago",
    text: "Excellent service and top-notch quality! They guided me through the PM Surya Ghar subsidies perfectly. Highly recommend their solar water heaters and rooftop panels."
  },
  {
    name: "Venkat Rao",
    location: "Kakinada, AP",
    rating: 5,
    date: "3 months ago",
    text: "The solar fencing provided by Aditya Solar is very robust. It gives us great peace of mind for our agricultural land. Very prompt after-sales support."
  },
  {
    name: "Priya Sharma",
    location: "Eluru, AP",
    rating: 5,
    date: "4 months ago",
    text: "I was skeptical about solar initially, but the detailed explanation and ROI calculation convinced me. Best investment for our commercial building."
  },
  {
    name: "Anand G",
    location: "Tanuku, AP",
    rating: 5,
    date: "5 months ago",
    text: "Great experience! The installation team was very polite and left the site clean. The panels are performing better than expected."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '100px 0', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{ 
            display: 'inline-block',
            background: 'rgba(22, 163, 74, 0.1)',
            color: 'var(--accent-green)',
            padding: '6px 16px',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: '800',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Google Reviews
          </div>
          <h2 style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '16px', letterSpacing: '-1px' }}>
            What Our Customers Say
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Don't just take our word for it. Read real reviews from satisfied customers who have made the switch to solar with us.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="marquee-wrapper" style={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {/* We double the reviews array to create the seamless loop effect */}
        <div className="marquee-content" style={{ display: 'flex', animation: 'scroll 40s linear infinite' }}>
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="review-card"
              style={{ 
                background: 'white',
                borderRadius: '24px',
                padding: '40px',
                width: '400px',
                margin: '0 12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                whiteSpace: 'normal',
                display: 'inline-flex',
                flexDirection: 'column',
                position: 'relative',
                flexShrink: 0
              }}
            >
              <div style={{ position: 'absolute', top: '30px', right: '30px', color: '#f1f5f9' }}>
                <Quote size={80} strokeWidth={1} />
              </div>

              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#f5b82e" color="#f5b82e" />
                ))}
              </div>

              <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '30px', position: 'relative', zIndex: 2, flexGrow: 1 }}>
                "{review.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '50%', 
                    background: 'var(--primary-navy)', 
                    color: 'white', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', fontWeight: '800'
                  }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--primary-navy)', marginBottom: '4px' }}>{review.name}</h4>
                    <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {review.location}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <GoogleLogo />
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', fontWeight: '600' }}>{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
