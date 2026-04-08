// import React from 'react';
// import { Car, ArrowRight, Wrench, Shield, Zap, Droplets, Wind, Layout, Sparkles } from 'lucide-react';

// const Services = () => {
//   const serviceData = [
//     { title: "Periodic Service", desc: "Regular maintenance and servicing with 90-minutes turnaround.", icon: <Wrench size={24} />, link: "/service/periodic" },
//     { title: "Denting & Painting", desc: "Expert dent removal and premium painting services for all cars.", icon: <Sparkles size={24} />, link: "/service/denting" },
//     { title: "Free Pickup & Drop", desc: "Doorstep car services and hassle-free repairs across the city.", icon: <Car size={24} />, link: "/service/pickup" },
//     { title: "AC Service", desc: "Professional Car AC Repair and high-performance cooling maintenance.", icon: <Wind size={24} />, link: "/service/ac" },
//     { title: "Car Spa & Cleaning", desc: "Deep interior cleaning and exterior foam wash for a showroom finish.", icon: <Droplets size={24} />, link: "/service/spa" },
//     { title: "Battery Service", desc: "Instant battery check, repair and genuine brand replacement.", icon: <Zap size={24} />, link: "/service/battery" },
//     { title: "Car Detailing", desc: "Ceramic coating and professional detailing to protect your paint.", icon: <Shield size={24} />, link: "/service/detailing" },
//     { title: "Windshield Service", desc: "Glass repair and crack-resistant windshield replacement.", icon: <Layout size={24} />, link: "/service/windshield" },
//   ];

//   const handleNavigation = (link) => {
//     // Yahan aap window.location.href = link ya React Router use kar sakte hain
//     console.log("Navigating to:", link);
//     alert(`Redirecting to ${link} page...`);
//   };

//   return (
//     <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      
//       {/* Background Decor */}
//       <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-red-400/20 animate-pulse"></div>
//       <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-blue-400/20"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Section */}
//         <div className="flex flex-col items-center mb-16 text-center">
//           <div className="relative">
//             <h2 className="bg-red-600 text-white px-10 py-4 rounded-xl text-xl md:text-3xl font-black uppercase shadow-lg transform -skew-x-12 tracking-tighter">
//               Our Professional Services
//             </h2>
//             <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-red-600 rounded-xl -z-10 transform -skew-x-12 opacity-20"></div>
//           </div>
//           <p className="mt-8 text-slate-500 font-bold uppercase tracking-[0.2em] text-sm px-4">
//             Precision engineering for your prized possession
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {serviceData.map((item, index) => (
//             <div 
//               key={index} 
//               onClick={() => handleNavigation(item.link)}
//               // Mobile View Effect: active:scale-95 aur active:shadow-inner
//               className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-xl rounded-br-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95 active:bg-slate-50 cursor-pointer overflow-hidden"
//             >
//               {/* Icon Section */}
//               <div className="relative z-10 bg-slate-50 text-red-600 p-4 rounded-2xl w-fit mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-active:rotate-12">
//                 {item.icon}
//               </div>

//               {/* Text Content */}
//               <div className="relative z-10 flex-grow">
//                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-500 text-sm leading-relaxed mb-8">
//                   {item.desc}
//                 </p>
//               </div>

//               {/* Know More Styled as a Button */}
//               <div className="relative z-10 inline-flex items-center justify-between w-full mt-auto">
//                 <span className="bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-sm">
//                   Know More
//                 </span>
//                 <ArrowRight size={20} className="text-red-600 transform group-hover:translate-x-2 transition-transform duration-300" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* "See More Services" Button Section */}
//         <div className="mt-20 flex justify-center">
//           <button 
//             onClick={() => handleNavigation('/all-services')}
//             className="group relative flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase italic tracking-[0.3em] overflow-hidden transition-all hover:bg-red-600 hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.5)] active:scale-90"
//           >
//             <span className="relative z-10">See More Services</span>
//             <div className="relative z-10 bg-white/20 p-2 rounded-full group-hover:rotate-45 transition-transform duration-500">
//                 <ArrowRight size={24} />
//             </div>
//             {/* Background Glow Effect on Hover */}
//             <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import landrover from "../images/landrover.png"
import volvo from "../images/volvologo.png"
import ferrari from "../images/ferrarilogo.png"
import lexus from "../images/lexuslogo.png"
import porsche from "../images/porschelogo.png"
import minicooper from "../images/minicooperlogo.png";
import audi from "../images/audilogo.png"
import BMW from "../images/bmwlogo.png"
import nissan from "../images/nissanlogo.png";
import renault from "../images/renaultlogo.png"
import ford from "../images/fordlogo.png";
import citroen from "../images/Citroenlogo.png"
import mahindralogo from "../images/mahindralogo.png"
import kia from "../images/kialogo.png"
import toyota from "../images/toyotalogo.png";
import maruti from "../images/marutilogo.png"
import mg from "../images/mglogo.png"
const BrandGrid = () => {
  const popularBrands = [
    { name: 'Maruti', logo: maruti },
    { name: 'Hyundai', logo: 'https://www.carlogos.org/logo/Hyundai-logo-silver-2560x1440.png' },
    { name: 'Toyota', logo: toyota },
    { name: 'Tata', logo: 'https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png' },
    { name: 'Kia', logo: kia },
    { name: 'Mahindra', logo:mahindralogo },
    { name: 'MG', logo: mg },
    { name: 'Nissan', logo: nissan },
    { name: 'Renault', logo: renault },
    { name: 'Honda', logo: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Ford', logo: ford },
    { name: 'Citroen', logo: citroen },
  ];

  const luxuryBrands = [
    { name: 'Mercedes', logo: 'https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png' },
    { name: 'BMW', logo: BMW },
    { name: 'Audi', logo: audi },
    { name: 'Land Rover', logo: landrover },
    { name: 'Jaguar', logo: 'https://www.carlogos.org/logo/Jaguar-logo-2012-1920x1080.png' },
    { name: 'Volvo', logo: volvo },
    { name: 'Mini Cooper', logo: minicooper },
    { name: 'Porsche', logo:porsche},
    { name: 'Lexus', logo: lexus },
    { name: 'Ferrari', logo:ferrari },
    { name: 'Lamborghini', logo: 'https://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png' },
    { name: 'Bentley', logo: 'https://www.carlogos.org/logo/Bentley-logo-1920x1080.png' },
  ];

  const BrandCard = ({ brand }) => (
    <div className="group relative flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-red-500/50 cursor-pointer overflow-hidden">
      {/* Hover Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-400 opacity-0 group-hover:opacity-10 blur transition duration-500"></div>
      
      <div className="relative h-16 w-full flex items-center justify-center mb-4">
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="max-h-full max-w-[85%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <span className="relative text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
        {brand.name}
      </span>
    </div>
  );

  return (
    <div className="relative bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-red-400/20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-blue-400/20"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-yellow-400/30 animate-bounce"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section 1: Popular Brands */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <div className="relative">
              <h2 className="bg-red-600 text-white px-10 py-4 rounded-xl text-xl md:text-3xl font-black uppercase shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] transform -skew-x-12 tracking-tighter">
                Popular Brands
              </h2>
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-red-600 rounded-xl -z-10 transform -skew-x-12 opacity-20"></div>
            </div>
            <p className="mt-6 text-slate-500 font-medium">Multi-brand expertise under one roof</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {popularBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>

        {/* Section 2: Luxury Car Service */}
        <div>
          <div className="flex flex-col items-center mb-12">
            <div className="relative">
              <h2 className="bg-slate-900 text-white px-10 py-4 rounded-xl text-xl md:text-3xl font-black uppercase shadow-xl transform -skew-x-12 tracking-tighter">
                Luxury Segments
              </h2>
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-slate-900 rounded-xl -z-10 transform -skew-x-12 opacity-20"></div>
            </div>
            <p className="mt-6 text-slate-500 font-medium">Precision care for high-end engineering</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {luxuryBrands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrandGrid;