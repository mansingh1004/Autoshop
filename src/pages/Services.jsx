

import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Car, ArrowRight, Wrench, Shield, Zap, Droplets, Wind, Layout, Sparkles } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate(); // 2. Initialize the navigate function

  const serviceData = [
    { title: "Periodic Service", desc: "Regular maintenance and servicing with 90-minutes turnaround.", icon: <Wrench size={24} />, link: "/periodicservice" },
    { title: "Denting & Painting", desc: "Expert dent removal and premium painting services for all cars.", icon: <Sparkles size={24} />, link: "/denting-painting" },
    { title: "Free Pickup & Drop", desc: "Doorstep car services and hassle-free repairs across the city.", icon: <Car size={24} />, link: "/pickupdrop" },
    { title: "AC Service", desc: "Professional Car AC Repair and high-performance cooling maintenance.", icon: <Wind size={24} />, link: "/acservice" },
    { title: "Car Spa & Cleaning", desc: "Deep interior cleaning and exterior foam wash for a showroom finish.", icon: <Droplets size={24} />, link: "/carspa" },
    { title: "Battery Service", desc: "Instant battery check, repair and genuine brand replacement.", icon: <Zap size={24} />, link: "/batteryservice" },
    { title: "Car Detailing", desc: "Ceramic coating and professional detailing to protect your paint.", icon: <Shield size={24} />, link: "/cardetailing" },
    { title: "Windshield Service", desc: "Glass repair and crack-resistant windshield replacement.", icon: <Layout size={24} />, link: "/windshieldservice" },
    // { title: "Engine Diagnostics", desc: ".", icon: <Layout size={24} />, link: "/enginediagnostics" },
  ];

  // 3. Updated function to handle actual navigation
  const handleNavigation = (link) => {
    navigate(link); // This triggers the route change
    window.scrollTo(0, 0); // Ensures the new page starts at the top
  };

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-red-400/20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-blue-400/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="relative">
            <h2 className="bg-red-600 text-white px-10 py-4 rounded-xl text-xl md:text-3xl font-black uppercase shadow-lg transform -skew-x-12 tracking-tighter">
              Our Professional Services
            </h2>
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-red-600 rounded-xl -z-10 transform -skew-x-12 opacity-20"></div>
          </div>
          <p className="mt-8 text-slate-500 font-bold uppercase tracking-[0.2em] text-sm px-4">
            Precision engineering for your prized possession
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleNavigation(item.link)}
              className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-xl rounded-br-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95 active:bg-slate-50 cursor-pointer overflow-hidden"
            >
              {/* Icon Section */}
              <div className="relative z-10 bg-slate-50 text-red-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-active:rotate-12">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Know More Styled as a Button */}
              <div className="relative z-10 inline-flex items-center justify-between w-full mt-auto">
                <span className="bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-sm">
                  Know More
                </span>
                <ArrowRight size={20} className="text-red-600 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button Section */}
        <div className="mt-20 flex justify-center">
          <button 
            // onClick={() => handleNavigation('/contact')}
            className="group relative flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase italic tracking-[0.3em] overflow-hidden transition-all hover:bg-red-600 hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.5)] active:scale-90"
          >
            <span className="relative z-10">See More Services</span>
            <div className="relative z-10 bg-white/20 p-2 rounded-full group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight size={24} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;


