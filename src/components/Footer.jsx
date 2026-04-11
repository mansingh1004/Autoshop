


import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Wrench, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Workshop Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Wrench className="text-red-600 w-6 h-6" />
              <span className="text-xl font-black tracking-tighter uppercase italic">
                Auto<span className="text-red-600">Service</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Trusted car care for over 15 years. Hum dete hain expert engine diagnostics, 
              brake repairs, aur genuine spare parts ki guarantee. Aapki safety hamari priority hai.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Our Services (Repair Focus) */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/enginediagnostics" className="hover:text-white transition-colors">Engine Diagnostics</a></li>
              <li><a href="/oilfilterchange" className="hover:text-white transition-colors">Oil & Filter Change</a></li>
              <li><a href="/brake-suspension" className="hover:text-white transition-colors">Brake & Suspension</a></li>
              <li><a href="/acelectricalrepair" className="hover:text-white transition-colors">AC & Electrical Repair</a></li>
              <li><a href="/denting-painting" className="hover:text-white transition-colors">Body Paint & Denting</a></li>
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Working Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Mon - Sat:</span>
                <span className="text-white">09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Sunday:</span>
                <span className="text-red-500 font-bold uppercase">Closed</span>
              </li>
              <li className="pt-2 flex items-center gap-2 text-xs text-slate-400 italic">
                <Clock size={14} /> Emergency towing available 24/7
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Visit Our Shop</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 shrink-0" />
                <span>Workshop No. 42, Service Road, <br />Near Main Highway, City 4001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-600 shrink-0" />
                <span>+91 8576000084</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-600 shrink-0" />
                <span>service@autorepair.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-center">
          <p>© {currentYear} AutoService Workshop. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/contact" className="hover:text-white transition-colors">Book Appointment</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;