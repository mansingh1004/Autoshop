import React from 'react';
import { Play, ChevronRight } from 'lucide-react';
import carrepair from "../images/Car_repair_Video.mp4";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={carrepair} type="video/mp4" />
      </video>

      <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic">
          Experience <br />
          <span className="text-red-600">Pure Power</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;