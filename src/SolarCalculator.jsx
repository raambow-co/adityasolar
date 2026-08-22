import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IndianRupee, Sun, Wallet, Leaf, ArrowRight, Calculator } from 'lucide-react';

const SolarCalculator = () => {
  const [billAmount, setBillAmount] = useState('');

  // Logic
  const numericBill = Number(billAmount);
  const isValidBill = numericBill > 0;
  
  let kwNeeded = 0;
  let annualSavings = 0;
  let co2Text = '';

  if (isValidBill) {
    const unitsConsumed = numericBill / 8;
    const rawKwNeeded = unitsConsumed / 120;
    kwNeeded = rawKwNeeded > 0 ? Math.max(1, Math.ceil(rawKwNeeded)) : 0;
    
    annualSavings = numericBill * 12;
    
    const yearlyCO2SavedKg = kwNeeded * 1200;
    if (yearlyCO2SavedKg >= 1000) {
      co2Text = `${(yearlyCO2SavedKg / 1000).toFixed(1)} Tonnes`;
    } else {
      co2Text = `${yearlyCO2SavedKg} Kgs`;
    }
  }

  // Format currency
  const formatCurrency = (val) => new Intl.NumberFormat('en-IN').format(Math.round(val));

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: (i) => ({
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { delay: i * 0.05, type: 'spring', stiffness: 120 }
    })
  };

  return (
    <section id="calculator" style={{ padding: '100px 0', backgroundColor: 'var(--primary-navy)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'var(--accent-yellow)', opacity: '0.05', borderRadius: '50%', filter: 'blur(100px)' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f97316', fontSize: '12px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px', background: '#fff7ed', padding: '6px 16px', borderRadius: '100px', border: '1px solid #ffedd5' }}>
              <Calculator size={14} /> SAVINGS ESTIMATOR
            </span>
            <h2 style={{ color: 'white', fontSize: '48px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '20px' }}>
              Calculate Your <span style={{ color: '#f97316' }}>Solar Savings</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              Find out how much you can save and exactly what system size you need for your home or business.
            </p>
          </motion.div>
        </div>

        {/* Calculator Card */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: 'white', 
              borderRadius: '24px', 
              padding: '40px', 
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              borderTop: '6px solid #f97316',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px'
            }}
          >
            {/* Left Side: Input */}
            <div style={{ flex: '1 1 350px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', marginBottom: '24px' }}>
                <Sun size={20} color="#f97316" />
                <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>Enter Your Details</h3>
              </div>
              
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#334155', marginBottom: '12px' }}>
                Average Monthly Electricity Bill
              </label>
              
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <div style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
                  <IndianRupee size={20} />
                </div>
                <input 
                  type="number" 
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="e.g. 2500"
                  style={{ 
                    width: '100%', 
                    padding: '16px 16px 16px 52px', 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    borderRadius: '12px', 
                    border: '1px solid #e2e8f0', 
                    background: '#f8fafc',
                    color: '#0f172a',
                    outline: 'none', 
                    transition: 'all 0.3s', 
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#f97316';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', padding: '16px', borderRadius: '12px', fontSize: '12px', color: '#9a3412', lineHeight: '1.6', display: 'flex', gap: '12px' }}>
                <div style={{ flexShrink: 0, marginTop: '2px' }}><Sun size={14} color="#f97316" /></div>
                <div>Calculations are based on an average electricity rate of ₹8 per unit and optimal sunlight conditions. Actual requirements may vary based on specific site conditions.</div>
              </div>
            </div>

            {/* Right Side: Results */}
            <div style={{ flex: '1 1 350px' }}>
              <AnimatePresence mode="wait">
                {!isValidBill ? (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ 
                      border: '2px dashed #e2e8f0', 
                      borderRadius: '16px', 
                      height: '100%', 
                      minHeight: '250px',
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      background: '#f8fafc',
                      padding: '32px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ width: '64px', height: '64px', background: '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', marginBottom: '20px' }}>
                      <Calculator size={32} />
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>Enter your bill to see estimates</div>
                    <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.5' }}>We'll calculate your recommended system size, and potential savings.</div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="results"
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'center' }}
                  >
                    <motion.div 
                      custom={0} variants={cardVariants} initial="hidden" animate="visible"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}
                    >
                      <div style={{ width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0 }}>
                        <Sun size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Ideal System Size</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>{kwNeeded} kW</div>
                      </div>
                    </motion.div>

                    <motion.div 
                      custom={1} variants={cardVariants} initial="hidden" animate="visible"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}
                    >
                      <div style={{ width: '48px', height: '48px', background: '#ecfdf5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', flexShrink: 0 }}>
                        <Wallet size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>Annual Savings</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981' }}>₹{formatCurrency(annualSavings)}</div>
                      </div>
                    </motion.div>

                    <motion.div 
                      custom={2} variants={cardVariants} initial="hidden" animate="visible"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}
                    >
                      <div style={{ width: '48px', height: '48px', background: '#fefce8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ca8a04', flexShrink: 0 }}>
                        <Leaf size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>CO₂ Reduced</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>{co2Text}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
