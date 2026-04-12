import React, { useState } from 'react';
import windshield from '../images/WindshieldService.jpg'
import { 
  Layout, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Car,
  Eye,
  ScanLine,
  X,
  Loader2,
  Send
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WindshieldServiceDetail = () => {
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
    formData.append("subject", "New Booking: Windshield Service");

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
    "Ais-Certified Glass Replacement",
    "Professional Chip & Crack Repair",
    "Sensor & Camera Calibration",
    "Leak-Proof Sealant Application",
    "Windshield Wiper Inspection",
    "Rear & Side Glass Replacement",
    "Cashless Insurance Claims",
    "1-Year Workmanship Warranty"
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

            <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Glass Service Request</h2>
            <p className="text-slate-400 text-sm mb-8 font-medium">Repair or Replace • Genuine OEM Glass</p>

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
                type="text" name="car_model" placeholder="Car Model & Glass Type" required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-red-600 transition-all"
              />
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {isSubmitting ? "Sending..." : "Book Glass Service"}
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

      {/* --- HERO IMAGE SECTION --- */}
      <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
        
        {/* Hero Banner Image */}
        <img 
          src={windshield}
          alt="Professional car windshield repair and installation" 
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
        />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-[0.2em] mb-4 transform -skew-x-12 shadow-lg">
              Safety First Solutions
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter drop-shadow-lg">
              Crystal <span className="text-red-600">Clear</span> <br /> 
              Vision Guaranteed
            </h1>
            
            {/* Breadcrumb Navigation inside Hero */}
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300 mt-8 uppercase tracking-widest">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-red-600" />
              <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
              <ChevronRight size={14} className="text-red-600" />
              <span className="text-white">Windshield Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Eye size={14} />
              Uncompromised Safety
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 leading-tight">
              Don't Ignore That <br /> 
              <span className="text-red-600">Minor Crack</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Your windshield provides up to 30% of your car's structural strength. Even a small chip can turn into a dangerous crack. We provide <span className="text-slate-900 font-bold underline decoration-red-600 italic">OEM-quality glass</span> and high-grade resin repairs to keep you safe on the road.
            </p>

            <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm transition-transform hover:scale-110 duration-300">
                  <ScanLine size={24} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter">Chip Repair</p>
                  <p className="text-xs text-slate-500 font-medium">Stop the Spread</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm transition-transform hover:scale-110 duration-300">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tighter">OEM Quality</p>
                  <p className="text-xs text-slate-500 font-medium">Genuine Fitment</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase italic tracking-tight text-slate-950">
                <Layout className="text-red-600" size={20} />
                Our Glass Protocol
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

          {/* Right Column: Booking Card Sidebar */}
          <div className="lg:sticky lg:top-10">
            <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <Car className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">Instant Quotation</h2>
                <p className="text-slate-400 text-sm mb-8 font-medium">Expert glass solutions with same-day fitment.</p>
                
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between items-center backdrop-blur-md">
                    <div>
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Repairs Starting From</p>
                      <p className="text-4xl font-black tracking-tighter">₹...</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-400 font-bold px-2 py-1 bg-green-400/10 rounded-lg inline-block italic uppercase text-[10px]">Cashless Insurance</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-red-900/40"
                    >
                      Book Free Inspection
                      <ArrowRight size={20} />
                    </button>
                    
                    <button 
                      onClick={() => navigate('/services')} 
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest py-4 rounded-2xl transition-all border border-white/5 text-sm"
                    >
                      Browse Other Services
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-8 border border-slate-100 rounded-[2rem] flex items-center justify-between bg-slate-50/50 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-green-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <Layout size={24} />
                </div>
                <div>
                  <p className="text-sm font-black tracking-tight uppercase text-slate-950">Insurance Help?</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Fast Claim Processing</p>
                </div>
              </div>
              <a href="tel:+918576000084" className="bg-slate-950 text-white px-8 py-3 rounded-xl font-black text-xs hover:bg-red-600 transition-all tracking-widest uppercase shadow-lg">
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindshieldServiceDetail;