
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
    { name: 'Land_Rover', logo: landrover },
    { name: 'Jaguar', logo: 'https://www.carlogos.org/logo/Jaguar-logo-2012-1920x1080.png' },
    { name: 'Volvo', logo: volvo },
    { name: 'Mini_Cooper', logo: minicooper },
    { name: 'Porsche', logo:porsche},
    { name: 'Lexus', logo: lexus },
    { name: 'Ferrari', logo:ferrari },
    { name: 'Lamborghini', logo: 'https://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png' },
    { name: 'Bentley', logo: 'https://www.carlogos.org/logo/Bentley-logo-1920x1080.png' },
  ];

  const BrandCard = ({ brand }) => (
    <div 
      onClick={() => navigate(`/select-model/${brand.name.toLowerCase()}`)} 
      className="group relative flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-red-500/50 cursor-pointer overflow-hidden"
    >
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