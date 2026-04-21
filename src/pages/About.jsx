
import React from 'react';
import { Target, Award, Users, Wrench, CheckCircle2, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; 

/**
 * UPDATED ABOUTUS COMPONENT
 * Improvements: 
 * 1. True Dark Background for better color pop (#020617)
 * 2. Higher text contrast (slate-200) for readability
 * 3. Consistent Red branding (#dc2626)
 * 4. Enhanced interactivity and SEO alt tags
 */

const AboutUs = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: <Clock size={32} /> },
    { label: 'Cars Repaired', value: '25,000+', icon: <Wrench size={32} /> },
    { label: 'Expert Mechanics', value: '40+', icon: <Users size={32} /> },
    { label: 'Customer Satisfaction', value: '99%', icon: <Award size={32} /> },
  ];

  const features = [
    { title: 'Honest Pricing', desc: 'No hidden fees or surprise charges. We believe in 100% transparency before any work begins.' },
    { title: 'Certified Experts', desc: 'Our team consists of factory-trained technicians with years of hands-on experience.' },
    { title: 'Genuine Parts', desc: 'We strictly use OEM or high-quality aftermarket parts to ensure your vehicle’s longevity.' },
    { title: 'Modern Technology', desc: 'Equipped with the latest computerized diagnostic tools for accurate troubleshooting.' },
  ];

  return (
    // Updated bg-slate-950 for deeper black contrast
    <section className="bg-[#020617] text-slate-200 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Dynamic Background Glows - Increased opacity slightly for depth */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-red-600/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="relative">
            {/* Changed to h2 for SEO (assuming your Hero has the H1) */}
            <h2 className="bg-gradient-to-r from-red-600 to-red-500 text-white px-10 py-3 rounded-xl text-3xl md:text-5xl font-black uppercase italic tracking-tighter shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] transform -skew-x-12">
              Who We Are
            </h2>
          </div>
          {/* Changed text-slate-400 to text-red-500 to make the brand message pop */}
          <p className="mt-8 text-red-500 font-bold uppercase tracking-[0.2em] text-sm max-w-2xl">
            Redefining automotive care with precision, passion, and performance.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              More than just a workshop, we are your <span className="text-red-600 italic">trusted auto partners.</span>
            </h3>
            {/* text-slate-200 is much easier to read on dark backgrounds than slate-400 */}
            <p className="text-slate-200 leading-relaxed text-lg">
              Founded in 2008, <strong className="text-white">AutoShop</strong> started with a simple mission: to provide dealership-quality car repairs without the dealership price tag. Over the years, we have grown from a small two-bay garage into a state-of-the-art automotive care center.
            </p>
            <p className="text-slate-200 leading-relaxed text-lg">
              Whether you drive a daily commuter or a high-end luxury vehicle, our philosophy remains the same: treat every car as if it were our own. We combine old-school craftsmanship with modern diagnostic technology to keep you safely on the road.
            </p>
            
            {/* Change href to to */}
          <Link to="/contact" className="w-full md:w-auto"> 
           <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-red-600/20 hover:shadow-red-600/40">
            Meet The Team
            </button>
            </Link>
           </div>

          {/* Image Container */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-video lg:aspect-square group">
              {/* Subtle overlay that clears on hover */}
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional mechanic providing luxury car service at AutoShop" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
              />
              
              {/* Floating Mission Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <Target className="text-red-600 w-10 h-10" />
                <div>
                  <p className="text-white font-bold text-xl uppercase tracking-tighter">Our Mission</p>
                  <p className="text-slate-400 text-sm">Excellence in every turn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-red-600/30 transition-all duration-300 hover:bg-slate-900">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold group-hover:text-slate-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-wider mb-4">
              Why Choose <span className="text-red-600">AutoShop?</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:border-red-600/20 hover:bg-slate-900 transition-all group">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="text-red-600 w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;