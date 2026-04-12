// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { carModelsByBrand } from '../data/carData';
// import { ChevronRight, ArrowLeft } from 'lucide-react';

// const SelectModel = () => {
//   const { brandName } = useParams();
//   const navigate = useNavigate();
  
//   // Get cars for the selected brand from carData.js
//   const cars = carModelsByBrand[brandName.toLowerCase()] || [];

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Navigation Button */}
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold mb-8 transition-colors group"
//         >
//           <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
//           Back to Brands
//         </button>

//         {/* Header Section */}
//         <h1 className="text-4xl md:text-6xl font-black uppercase italic text-slate-900 mb-2 tracking-tighter">
//           Select <span className="text-red-600">{brandName}</span> Model
//         </h1>
//         <p className="text-slate-500 mb-12 font-medium uppercase tracking-[0.2em] text-xs">
//           Choose your vehicle to see specialized service packages
//         </p>

//         {/* Grid Section */}
//         {cars.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {cars.map((car) => (
//               <div 
//                 key={car.id}
//                 onClick={() => navigate('/premium-service', { state: { selectedCar: car.name } })}
//                 className="group bg-white p-5 rounded-[2.5rem] border border-slate-200 hover:border-red-600/50 hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.15)] transition-all duration-500 cursor-pointer overflow-hidden"
//               >
//                 {/* Image Container */}
//                 <div className="h-52 w-full bg-slate-100 rounded-[1.5rem] mb-6 overflow-hidden relative">
//                   <img 
//                     src={car.image} 
//                     alt={car.name} 
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     // If the specific car image fails, it shows a clean placeholder
//                     onError={(e) => { 
//                       e.target.src = `https://via.placeholder.com/600x400/f1f5f9/94a3b8?text=${car.name}`; 
//                     }}
//                   />
//                   {/* Subtle Overlay on Hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>

//                 {/* Info Container */}
//                 <div className="flex justify-between items-center px-2">
//                   <div>
//                     <h3 className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter group-hover:text-red-600 transition-colors">
//                       {car.name}
//                     </h3>
//                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">
//                       {car.type}
//                     </p>
//                   </div>
                  
//                   <div className="bg-slate-900 text-white p-3 rounded-2xl group-hover:bg-red-600 group-hover:rotate-[360deg] transition-all duration-700 shadow-lg shadow-slate-200 group-hover:shadow-red-200">
//                     <ChevronRight size={20} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="bg-white p-20 rounded-[3rem] text-center border-2 border-dashed border-slate-200">
//              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <ChevronRight size={40} className="text-slate-300 rotate-90" />
//              </div>
//              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Models Coming Soon</h3>
//              <p className="text-slate-400 font-medium max-w-xs mx-auto">
//                We haven't listed {brandName} models here yet, but we service all variants.
//              </p>
//              <button 
//                onClick={() => navigate('/contact')}
//                className="mt-8 text-red-600 font-black uppercase italic tracking-widest text-sm hover:underline"
//              >
//                Contact For Custom Quote
//              </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SelectModel;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { carModelsByBrand } from '../data/carData';

const SelectModel = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  
  // Find the cars for this brand
  const cars = carModelsByBrand[brandName.toLowerCase()] || [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <h1 className="text-4xl font-black uppercase italic mb-8">Choose {brandName} Model</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div 
            key={car.id}
            // CRITICAL: We pass the car name in the state so the next page knows what was picked
            // onClick={() => navigate('/premium-service', { state: { selectedCar: car.name, carImage: car.image } })}

            // Updated onClick in SelectModel.jsx
         onClick={() => {
           const slug = car.name.replace(/\s+/g, '-').toLowerCase();
             navigate(`/premium-service/${slug}`, { 
              state: { 
                 car: car // Still pass the full car object in state for easy data access
                     } 
                  });
               }}
            className="bg-white p-6 rounded-[2rem] border border-slate-200 cursor-pointer hover:border-red-600 transition-all"
          >
            <img src={car.image} alt={car.name} className="h-40 w-full object-contain mb-4" />
            <h3 className="text-xl font-bold">{car.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectModel;