import React, { useState } from 'react';
import daintingpainting from '../images/Dainting-painting.mp4'
import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Car,
  Settings,
  Sparkles,
  Palette,
  Hammer,
  X,
  Loader2,
  Send,
  Play
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DentingPaintingDetail = () => {
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
    formData.append("subject", "New Booking: Denting & Painting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Success! We will call you shortly.");
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
    "Precision Dent Removal",
    "Surface Scratch Repair",
    "Tinkering & Panel Realignment",
    "High-Quality Primer Application",
    "Computerized Color Matching",
    "Premium Clear Coat Finish",
    "Anti-Rust Treatment (Undercoat)",
    "Final Polishing & Buffing"
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

            <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Request a Quote</h2>
            <p className="text-slate-400 text-sm mb-8 font-medium">Denting & Painting • Starts ₹...</p>

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
                type="text" name="car_model" placeholder="Car Model & Color" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all"
              />
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {isSubmitting ? "Sending..." : "Confirm Booking"}
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

      {/* --- VIDEO HERO SECTION --- */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
        
        {/* The Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Replace this URL with your actual video path */}
          <source src= {daintingpainting} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-[0.2em] mb-4 transform -skew-x-12">
              Premium Paint Lab
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
              Bespoke <span className="text-red-600">Denting</span> <br /> 
              & Painting
            </h1>
            
            {/* Breadcrumb Navigation inside Hero */}
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300 mt-8 uppercase tracking-widest">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-red-600" />
              <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
              <ChevronRight size={14} className="text-red-600" />
              <span className="text-white">Denting & Painting</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} />
              Showroom Finish Guaranteed
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 leading-tight">
              Restore Your Car’s <br /> 
              <span className="text-red-600">Original Glow</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Dents and scratches don't just look bad—they can lead to rust and lower your car's value. Our expert technicians use specialized tools and premium paint booths to ensure a <span className="text-slate-900 font-bold underline decoration-red-600">seamless finish</span> that matches your original factory color.
            </p>

            <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm">
                  <Palette size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Premium Paint</p>
                  <p className="text-xs text-slate-500">Computerized Matching</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Warranty</p>
                  <p className="text-xs text-slate-500">2 Years Paint Warranty</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase italic tracking-tight">
                <Hammer className="text-red-600" size={20} />
                What's Included?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {serviceIncludes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-600 group">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold tracking-tight group-hover:text-slate-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-10">
            <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <Car className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">Schedule Your Service</h2>
                <p className="text-slate-400 text-sm mb-8 font-medium">Select your package and book a slot in seconds.</p>
                
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between items-center backdrop-blur-md">
                    <div>
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Starting From</p>
                      <p className="text-4xl font-black tracking-tighter">₹...</p>  
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 line-through font-bold">₹...</p> 
                      <p className="text-sm text-green-400 font-bold px-2 py-1 bg-green-400/10 rounded-lg inline-block">Save 30%</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-red-900/40"
                    >
                      Book This Slot
                      <ArrowRight size={20} />
                    </button>
                    
                    <button 
                      onClick={() => navigate('/services')} 
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest py-4 rounded-2xl transition-all border border-white/5 text-sm"
                    >
                      View Other Packages
                    </button>
                  </div>
                  
                  <p className="text-center text-[10px] text-slate-500 uppercase font-black tracking-[0.3em]">
                    Free Pickup & Drop Available
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-8 border border-slate-100 rounded-[2rem] flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-green-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <Car size={24} />
                </div>
                <div>
                  <p className="text-sm font-black tracking-tight uppercase">Need a custom quote?</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Talk to an advisor</p>
                </div>
              </div>
              <a href="tel:+918576000084" className="bg-slate-950 text-white px-6 py-3 rounded-xl font-black text-xs hover:bg-red-600 transition-colors tracking-widest">
                CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentingPaintingDetail;