import React, { useState } from 'react';
import { 
  Wind, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Car,
  ThermometerSnowflake,
  Droplets,
  X,
  Loader2,
  Send
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ACServiceDetail = () => {
  const navigate = useNavigate();

  // --- Modal & Form Logic ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "d3667cb5-db66-4041-b467-d0737b7dce43");
    formData.append("subject", "New Booking: AC Service");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Success! We will contact you shortly.");
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus("");
        }, 3000);
      }
    } catch (err) {
      setFormStatus("Error! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceIncludes = [
    "AC Gas (Refrigerant) Top-up",
    "Condenser Cleaning & Inspection",
    "AC Filter (Cabin Filter) Replacement",
    "Vent Cleaning & Disinfection",
    "Cooling Coil Inspection",
    "Compressor Health Check",
    "Leakage Detection Test",
    "Climate Control Calibration"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      
      {/* --- Booking Modal Popup --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Book AC Service</h2>
            <p className="text-slate-400 text-sm mb-8 font-medium">High-Performance Cooling • Starts ₹999</p>

            <form onSubmit={handleBooking} className="space-y-4">
              <input 
                type="text" name="name" placeholder="Full Name" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all"
              />
              <input 
                type="tel" name="phone" placeholder="Phone Number" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all"
              />
              <input 
                type="text" name="car_details" placeholder="Car Model & Year" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all"
              />
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </button>

              {formStatus && (
                <p className={`text-center font-bold text-sm mt-4 ${formStatus.includes("Success") ? "text-green-500" : "text-red-500"}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* --- Breadcrumb Navigation --- */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <ChevronRight size={16} />
          <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900">AC Service</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- Left Column: Info & Content --- */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <ThermometerSnowflake size={14} />
              Superior Cooling Performance
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-950 leading-tight">
              Beat The Heat With <br /> 
              <span className="text-red-600">Crystal Clear Cooling</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Is your car taking too long to cool down? Our professional AC service goes beyond a simple gas refill. We deep-clean your system to ensure you breathe fresh, chilled air.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600">
                  <Wind size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Fast Cooling</p>
                  <p className="text-xs text-slate-500">Instant Performance</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600">
                  <Droplets size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Pure Air</p>
                  <p className="text-xs text-slate-500">99% Allergen Free</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-950">
                <CheckCircle2 className="text-red-600" size={20} />
                What's Included?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {serviceIncludes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Booking Card --- */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              <Car className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Schedule Your Service</h2>
                <p className="text-slate-400 text-sm mb-8">Maintain your car's climate control with expert care.</p>
                
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-red-500 uppercase tracking-tighter">Starting From</p>
                      <p className="text-3xl font-black">₹999</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 line-through font-bold">₹1,499</p>
                      <p className="text-sm text-green-400 font-bold">Special Offer</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-red-900/20"
                    >
                      Book This Slot
                      <ArrowRight size={20} />
                    </button>
                    
                    <button 
                      onClick={() => navigate('/services')} 
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-2xl transition-all border border-white/5"
                    >
                      View Other Packages
                    </button>
                  </div>
                  
                  <p className="text-center text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">
                    High-Performance Gas Recharge Included
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 border border-slate-100 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                  <Car size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-tight text-slate-900">AC Not Cooling?</p>
                  <p className="text-xs text-slate-500 font-medium">Talk to our AC technician</p>
                </div>
              </div>
              <a href="tel:+918576000084" className="text-red-600 font-black text-sm hover:underline tracking-widest">
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACServiceDetail;