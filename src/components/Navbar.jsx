// import React, { useState } from 'react';
// import { Menu, X, Car } from 'lucide-react'; // Optional: install lucide-react for icons
// import { useNavigate } from 'react-router-dom';
// const Navbar = () => {

  
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '#' },
//     { name: 'Insurance Cliam', href: '#' },
//     { name: 'Prices', href: '#' },
//     { name: 'About Us ', href: '#' },
//     { name: 'Contact ', href: '#' },
//   ];

//   return (
//     <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo Section */}
//           <div className="flex items-center gap-2">
//             <Car className="text-red-600 w-8 h-8" />
//             <span className="text-2xl font-black tracking-tighter uppercase italic">
//               Auto<span className="text-red-600">Shop</span>
//             </span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-bold transition-transform active:scale-95">
//                 Call Now
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md hover:text-red-500 focus:outline-none"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 border-t border-slate-700`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="hover:bg-slate-700 block px-3 py-4 rounded-md text-base font-medium"
//             >
//               {link.name}
//             </a>
//           ))}
//           <button className="w-full text-left bg-red-600 px-3 py-4 rounded-md font-bold">
//             Call Now
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



















import React, { useState } from 'react';
import { Menu, X, Car, PhoneCall, Mic, Loader2 } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // React Router import kiya

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [callStatus, setCallStatus] = useState('inactive'); 

  // --- AI Call Logic ---
  const startAICall = async () => {
    try {
      setCallStatus('loading');
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setTimeout(() => {
        setCallStatus('active');
        console.log("AI Assistant is now listening...");
      }, 2000);
    } catch (error) {
      console.error("Error starting AI call or mic permission denied:", error);
      setCallStatus('inactive');
      alert("Please allow microphone access to speak with our AI Assistant.");
    }
  };

  const endAICall = () => {
    setCallStatus('inactive');
    console.log("Call ended.");
  };

  const toggleCall = () => {
    if (callStatus === 'active') {
      endAICall();
    } else {
      startAICall();
    }
  };
  // ---------------------

  // href ki jagah proper paths dale hain
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'Insurance Claim', path: '/insurance' },
    { name: 'Prices', path: '/prices' },
    { name: 'AboutUs', path: '/AboutUs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Car className="text-red-600 w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              Auto<span className="text-red-600">Shop</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path} // 'href' ki jagah 'to' use hota hai React Router me
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Dynamic AI Call Button */}
              <button 
                onClick={toggleCall}
                disabled={callStatus === 'loading'}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold transition-all active:scale-95 ${
                  callStatus === 'active' 
                    ? 'bg-red-50 text-red-600 border border-red-600 animate-pulse' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {callStatus === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {callStatus === 'active' && <Mic size={18} />}
                {callStatus === 'inactive' && <PhoneCall size={18} />}
                
                {callStatus === 'inactive' ? 'Talk to AI' : callStatus === 'active' ? 'End AI Call' : 'Connecting...'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 border-t border-slate-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Click karne par menu close ho jayega
              className="hover:bg-slate-700 block px-3 py-4 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Dynamic AI Call Button */}
          <button 
            onClick={toggleCall}
            disabled={callStatus === 'loading'}
            className={`w-full flex items-center justify-center gap-2 px-3 py-4 rounded-md font-bold transition-colors ${
               callStatus === 'active' ? 'bg-white text-red-600' : 'bg-red-600 text-white'
            }`}
          >
            {callStatus === 'inactive' ? <PhoneCall size={20} /> : <Mic size={20} className={callStatus === 'active' ? 'animate-pulse' : ''} />}
            {callStatus === 'inactive' ? 'Talk to AI Assistant' : callStatus === 'active' ? 'End Conversation' : 'Connecting...'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;