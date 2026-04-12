import React, { useState } from 'react';
import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Car,
  Settings,
  X,
  Loader2,
  Send,
  Play
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import servicing from "../images/Servecing_vidio.mp4"

const PeriodicServiceDetail = () => {
  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "d3667cb5-db66-4041-b467-d0737b7dce43");
    formData.append("subject", "New Booking: Periodic Service");

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
    "Engine Oil & Filter Replacement",
    "Air Filter & AC Filter Cleaning",
    "Coolant & Brake Fluid Top-up",
    "32-Point Comprehensive Safety Inspection",
    "Brake Pad Cleaning & Adjustment",
    "Battery Health & Alternator Check",
    "Suspension & Underbody Inspection",
    "Exterior Wash & Interior Vacuuming"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      
      {/* --- Booking Modal Popup --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-slate-900 w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Reserve Your Slot</h2>
            <p className="text-slate-400 text-sm mb-8 font-medium">Periodic Service • ₹....</p>
            <form onSubmit={handleBooking} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all" />
              <input type="text" name="car_model" placeholder="Car Model (e.g. Swift, City)" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all" />
              <button disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50">
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {isSubmitting ? "Sending..." : "Confirm Booking"}
              </button>
              {formStatus && <p className={`text-center font-bold text-sm mt-4 ${formStatus.includes("Success") ? "text-green-500" : "text-red-500"}`}>{formStatus}</p>}
            </form>
          </div>
        </div>
      )}

      {/* --- HERO VIDEO BANNER SECTION --- */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-950">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          {/* Replace this URL with your actual video link */}
          <source src={servicing} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div> */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start">
           <div className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
             <Play size={14} fill="currentColor" /> Live Service Showroom
           </div>
           <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
             The Science of <br />
             <span className="text-red-600">Smoothness</span>
           </h1>
           <p className="text-slate-300 text-lg md:text-xl max-w-xl font-medium">
             Experience precision engineering with our master technicians. 
             90 minutes is all we need to make your car feel like new.
           </p>
        </div>
      </div>

      {/* --- Breadcrumb Navigation (Moved below Hero) --- */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <ChevronRight size={16} />
          <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900">Periodic Service</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- Left Column --- */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Clock size={14} />
              90-Minute Express Service
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 leading-tight">
              Keep Your Engine <br /> 
              <span className="text-red-600">Pure & Powerful</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our Periodic Service is designed for the modern driver who values time without compromising on safety. We use OEM-spec parts and advanced diagnostics to ensure your vehicle remains as reliable as the day you bought it.
            </p>

            <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600"><Wrench size={24} /></div>
                <div><p className="text-sm font-bold">Expert Techs</p><p className="text-xs text-slate-500">Certified Experts</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600"><ShieldCheck size={24} /></div>
                <div><p className="text-sm font-bold">Warranty</p><p className="text-xs text-slate-500">6 Months Coverage</p></div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 font-italic uppercase"><Settings className="text-red-600" size={20} /> What's Included?</h3>
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
                <p className="text-slate-400 text-sm mb-8">Select your package and book a slot in seconds.</p>
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center">
                    <div><p className="text-xs font-bold text-red-500 uppercase tracking-tighter">Standard Price</p><p className="text-3xl font-black">₹....</p></div>
                    <div className="text-right"><p className="text-xs text-slate-500 line-through font-bold">₹....</p><p className="text-sm text-green-400 font-bold">Save 20%</p></div>
                  </div>
                  <div className="space-y-4">
                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg shadow-red-900/20">
                      Book This Slot <ArrowRight size={20} />
                    </button>
                    <button onClick={() => navigate('/services')} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-2xl transition-all border border-white/5">
                      View Other Packages
                    </button>
                  </div>
                  <p className="text-center text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Free Pickup & Drop Available</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 border border-slate-100 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center"><Car size={20} /></div>
                <div><p className="text-sm font-bold tracking-tight text-slate-900">Need a custom quote?</p><p className="text-xs text-slate-500 font-medium">Talk to our advisor</p></div>
              </div>
              <a href="tel:+918576000084" className="text-red-600 font-black text-sm hover:underline tracking-widest">CALL NOW</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PeriodicServiceDetail;