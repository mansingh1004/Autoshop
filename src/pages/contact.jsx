import React, { useState } from 'react';
// Combined all icons into a single import statement to resolve errors
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Loader2 
} from 'lucide-react';

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // Your Web3Forms Access Key is already integrated here
    formData.append("access_key", "d3667cb5-db66-4041-b467-d0737b7dce43");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); // Clears form after success
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-red-600/30">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about a vehicle or need a service? We're here to help you get behind the wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-900/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
          
          {/* Column 1: Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full"></span>
                Contact Details
              </h2>
              <div className="space-y-8">
                <div className="flex items-center space-x-5 group">
                  <div className="bg-red-600/10 p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Us</p>
                    <p className="text-lg font-semibold">+91 9871788198</p>
                  </div>
                </div>

                <div className="flex items-center space-x-5 group">
                  <div className="bg-red-600/10 p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                    <p className="text-lg font-semibold">support@autoshop.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-5 group">
                  <div className="bg-red-600/10 p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                    <p className="text-lg font-semibold">123 Auto Drive, Car City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="pt-10 border-t border-gray-800/50">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">
                Connect With <span className="text-white">Our Showroom</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-600', border: 'group-hover:border-blue-600' },
                  { Icon: Instagram, color: 'hover:bg-pink-600', border: 'group-hover:border-pink-600' },
                  { Icon: Twitter, color: 'hover:bg-sky-500', border: 'group-hover:border-sky-500' },
                  { Icon: Youtube, color: 'hover:bg-red-600', border: 'group-hover:border-red-600' }
                ].map((social, index) => (
                  <a key={index} href="#" className="group relative">
                    <div className={`relative w-12 h-12 bg-gray-950 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white ${social.color} ${social.border} group-hover:-translate-y-1 transition-all duration-300`}>
                      <social.Icon size={20} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="relative">
            <form onSubmit={onSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-gray-700"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-gray-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Inquiry Subject</label>
                <select 
                  name="subject" 
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 transition-all appearance-none cursor-pointer"
                >
                  <option>General Inquiry</option>
                  <option>Car Financing</option>
                  <option>Service Appointment</option>
                  <option>Test Drive Request</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  name="message" 
                  required
                  rows="4"
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-gray-700 resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center space-x-3 transition-all transform active:scale-[0.98] shadow-xl shadow-red-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                <span>{isSubmitting ? "Processing..." : "Send Message"}</span>
              </button>

              {result && (
                <div className={`text-center p-4 rounded-lg animate-pulse font-bold text-sm ${result.includes("Successfully") ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;