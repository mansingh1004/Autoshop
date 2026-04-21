import React from 'react';
import { Check, Zap, Crown, Car, ShieldCheck, Wrench, Gauge, ShieldAlert } from 'lucide-react';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom'; 

const PricingPage = () => {
  const plans = [
    {
      name: "Basic Maintenance",
      price: "...", // 1,999 Added sample prices
      description: "Essential care for everyday commuters to keep the engine running smooth.",
      features: ["Oil & Filter Change", "32-Point Safety Inspection", "Fluid Top-ups", "Brake Pad Check", "Car Wash & Vacuum"],
      icon: <Car className="text-gray-400" size={30} />,
      buttonText: "Book Basic Service",
      highlight: false
    },
    {
      name: "Performance Tune-up",
      price: "....", //4,499
      description: "Our most popular package. Designed for peak efficiency and road-trip readiness.",
      features: ["Everything in Basic", "Wheel Alignment & Balancing", "AC Filter Cleaning", "Engine Scanning", "Fuel System Cleaning", "6-Month Roadside Assist"],
      icon: <Wrench className="text-red-500" size={30} />,
      buttonText: "Upgrade to Performance",
      highlight: true
    },
    {
      name: "Elite Overhaul",
      price: "....", //8,999
      description: "Comprehensive care for premium cars and high-performance machines.",
      features: ["Everything in Performance", "Full Synthetic Oil Upgrade", "Throttle Body Cleaning", "Brake Disc Polishing", "Interior Deep Sanitization", "Pick-up & Drop-off"],
      icon: <Crown className="text-yellow-500" size={30} />,
      buttonText: "Go Elite",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans py-24 px-6 selection:bg-red-600/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4">Service Packages</h2>
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-6 uppercase">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Repairs</span> for Every Drive
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From basic oil changes to full engine diagnostics, choose a plan that ensures your car stays in showroom condition.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-500 group hover:-translate-y-2 flex flex-col ${
                plan.highlight 
                ? 'bg-gray-900 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.2)] scale-105 z-10' 
                : 'bg-white/[0.03] border-gray-800 hover:border-gray-600'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <div className="mb-4 bg-gray-950 w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-800 group-hover:border-red-600 transition-colors">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed min-h-[48px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-red-600">₹</span>
                  <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-gray-500 font-medium ml-1">/service</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-tight">
                    <Check size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 2. Wrap the button in a Link component using the 'to' prop */}
              <Link to="/contact" className="w-full">
                <button 
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 ${
                    plan.highlight 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-900/40' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/5'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-red-600/10 rounded-2xl text-red-600 border border-red-600/20">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h4 className="font-extrabold text-xl uppercase italic tracking-tight">100% Service Warranty</h4>
              <p className="text-gray-400 text-sm max-w-md">We offer a 6-month or 5,000 km warranty on all parts and labor. Your safety is our priority.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-black text-white">4.9/5</p>
              <p className="text-xs text-red-600 font-bold uppercase tracking-widest">Google Rating</p>
            </div>
            <div className="h-10 w-[1px] bg-gray-800 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl font-black text-white">15k+</p>
              <p className="text-xs text-red-600 font-bold uppercase tracking-widest">Cars Fixed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;