import React from 'react';
import { Play, ChevronRight } from 'lucide-react';
import carrepair from "../images/Car_repair_Video.mp4"
const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* 1. Background Video Overlay */}
      <div className="absolute inset-0 z-10" />

      {/* 2. The Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Replace this URL with your actual video file path */}
        <source 
          src={carrepair }
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* 3. Content Over the Video */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none tracking-tighter">
          Experience <br />
          <span className="text-red-600">Pure Power</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-light">
         We specialize in professional car repair and maintenance services to keep your vehicle running smoothly and safely
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all hover:scale-105">
            Explore Models <ChevronRight size={20} />
          </button>
          
          <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all">
            <Play size={20} fill="white" /> Watch Film
          </button>
        </div>
      </div>

      {/* 4. Bottom Decor (Optional) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-20" /> */}
    </div>
  );
};

export default Hero;