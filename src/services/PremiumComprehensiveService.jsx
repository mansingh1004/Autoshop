
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Car, 
  X, 
  Loader2, 
  Send, 
  Clock, 
  Star, 
  Tag, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

const PremiumComprehensiveService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get dynamic car data from selection
  const car = location.state?.car;

  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Redirect if no car is selected (prevents white screen on refresh)
  useEffect(() => {
    if (!car) {
      const timer = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timer);
    }
  }, [car, navigate]);

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    
    // Web3Forms Configuration
    formData.append("access_key", "d3667cb5-db66-4041-b467-d0737b7dce43");
    formData.append("subject", `New Booking: ${car?.name} - Premium Service`);
    formData.append("car_model", car?.name);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Success! Our expert will call you shortly.");
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

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <Loader2 className="animate-spin text-red-600 mb-4" size={40} />
        <h2 className="text-2xl font-black uppercase italic">Session Expired</h2>
        <p className="text-slate-500 mb-6">Please select your car model again to see pricing.</p>
        <Link to="/" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold uppercase italic tracking-widest">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* --- Progress Breadcrumb --- */}
      <div className="bg-white border-b border-slate-200 py-4 px-6 mb-8">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={14}/> Brand</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={14}/> Model</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-red-600 italic underline decoration-2 underline-offset-4">Service Selection</span>
        </div>
      </div>

      {/* --- Dynamic Hero Header (Slate-900) --- */}
      <div className="bg-slate-900 py-16 px-6 text-white border-b-8 border-red-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 skew-x-12 transform translate-x-20"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-center md:text-left space-y-4">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-widest mb-4">
              <ArrowLeft size={16} /> Back to Models
            </button>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              {car.name} <br />
              <span className="text-red-600">Expert Care</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
              Factory Spec {car.type} Maintenance
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src={car.image} 
              alt={car.name} 
              className="h-40 md:h-56 object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(220,38,38,0.3)] animate-in fade-in zoom-in duration-700" 
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-slate-950 p-6 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
               <span className="text-white font-black uppercase italic text-xs tracking-[0.2em]">Comprehensive Package</span>
            </div>
            <span className="bg-red-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Recommended</span>
          </div>

          <div className="p-8 md:p-12">
            {/* Price & Description Section */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 pb-12 border-b border-slate-100">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900 uppercase italic flex items-center gap-2">
                  <Star className="text-red-600" size={20} fill="currentColor" />
                  Service Insight
                </h2>
                <p className="text-slate-500 font-medium max-w-md leading-relaxed">
                  {car.description || `Specialized premium maintenance for your ${car.name}, covering all factory-recommended inspections and fluid replacements.`}
                </p>
                <div className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase italic tracking-widest cursor-pointer hover:text-red-600 transition-colors">
                  <Tag size={16} /> Have a coupon code?
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center md:text-right min-w-[200px]">
                <div className="text-slate-400 line-through font-bold text-sm mb-1">₹{car.oldPrice || '2,499'}</div>
                <div className="text-6xl font-black text-slate-900 tracking-tighter italic leading-none mb-2">₹{car.price || '1,999'}</div>
                <div className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase inline-block">Best Value</div>
              </div>
            </div>

            {/* Checklist Section */}
            <div className="space-y-6 mb-12">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">What's Included?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(car.services || ["Engine Oil Change", "Oil Filter Replacement", "Brake Inspection", "AC Filter Cleaning", "32-Point Checkup", "Interior Vacuuming"]).map((service, index) => (
                  <div key={index} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 group hover:border-red-200 transition-all">
                    <CheckCircle2 size={20} className="text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700 text-xs uppercase tracking-tight group-hover:text-slate-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-8 bg-slate-900 rounded-[2rem] mb-12 text-white text-center">
               <div className="border-r border-white/10">
                 <Clock size={20} className="mx-auto text-red-600 mb-2" />
                 <p className="text-[9px] font-bold text-slate-400 uppercase">Duration</p>
                 <p className="text-xs font-black uppercase italic">4-6 Hours</p>
               </div>
               <div className="border-r border-white/10">
                 <ShieldCheck size={20} className="mx-auto text-red-600 mb-2" />
                 <p className="text-[9px] font-bold text-slate-400 uppercase">Warranty</p>
                 <p className="text-xs font-black uppercase italic">1000 Kms</p>
               </div>
               <div>
                 <Star size={20} className="mx-auto text-yellow-500 mb-2" fill="currentColor" />
                 <p className="text-[9px] font-bold text-slate-400 uppercase">Rating</p>
                 <p className="text-xs font-black uppercase italic">4.9 / 5</p>
               </div>
            </div>

            {/* Final Action Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-red-600 hover:bg-slate-950 text-white font-black uppercase italic tracking-[0.2em] py-6 rounded-[1.5rem] shadow-2xl shadow-red-900/20 transition-all transform active:scale-95 flex items-center justify-center gap-4 group"
            >
              Book {car.name} Now
              <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-300 hover:text-red-600 transition-colors">
              <X size={28} />
            </button>
            
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter leading-none">Complete <br/> Booking</h2>
              <div className="h-1 w-12 bg-red-600 mt-4 rounded-full"></div>
            </div>

            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Service for: <span className="text-red-600">{car.name}</span>
            </p>

            <form onSubmit={handleBooking} className="space-y-4">
               <div className="space-y-1">
                 <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Full Name</label>
                 <input 
                   type="text" name="name" placeholder="Name ..." required 
                   className="w-full bg-slate-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 transition-all font-bold text-slate-900" 
                 />
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Mobile Number</label>
                 <input 
                   type="tel" name="phone" placeholder="+91 ..." required 
                   className="w-full bg-slate-100 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-red-600 transition-all font-bold text-slate-900" 
                 />
               </div>

               <button 
                 disabled={isSubmitting}
                 className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase italic tracking-[0.2em] hover:bg-red-600 transition-all shadow-xl shadow-slate-200 mt-4 disabled:opacity-50 flex items-center justify-center gap-3"
               >
                 {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                 {isSubmitting ? "Processing..." : "Secure Reservation"}
               </button>

               {formStatus && (
                 <p className={`text-center font-black text-[10px] uppercase tracking-widest mt-4 ${formStatus.includes("Success") ? "text-green-600" : "text-red-600"}`}>
                   {formStatus}
                 </p>
               )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumComprehensiveService;