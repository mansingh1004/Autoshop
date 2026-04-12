// // src/data/carData.js
// import Swift from '../images/maruti-suzuki-swift-diesel-tilted.jpg';

// export const carModelsByBrand = {
//   maruti: [
//     { id: 1, name: "Maruti Swift", image: Swift, type: "Hatchback" },
//     { id: 2, name: "Maruti Brezza", image: "https://example.com/brezza.jpg", type: "SUV" },
//   ],
//   hyundai: [
//     { id: 4, name: "Hyundai Creta", image: "https://example.com/creta.jpg", type: "SUV" },
//   ],
//   // Add other brands here...
// };


// src/data/carData.js

import Swift from '../images/maruti-suzuki-swift.png';
import MarutiSuzuki from '../images/maruti-suzuki-wagonr.png'
import SwiftDezire from '../images/maruti-suzuki-swift-dzire.png'
import MarutiSuzukiBaleno from '../images/maruti-suzuki-baleno.png'
import MarutiAlto from '../images/maruti-Alto.png'

export const carModelsByBrand = {
  maruti: [
    { 
      id: 1, 
      name: "Swift", 
      image: Swift,
      type: "Hatchback",
      price: "....", // Specific price for Swift
      oldPrice: "....",
      description: "Express maintenance for your Maruti Swift.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking", "Cabin Filter / AC Filter Cleaning" , "Coolant Top up (200 ml)", "Wiper Fluid Replacement" , "Brake Fluid Top up (50 ml)", "Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Service"]
    },
    { 
      id: 2, 
      name: "Wagonr", 
      image: MarutiSuzuki,
      type: "SUV",
      price: "....", // Different price for SUV
      oldPrice: "....",
      description: "Full SUV diagnostic and service for Wagnor.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 3, 
      name: "Swift Dzire", 
      image: SwiftDezire,
      type: "SUV",
      price: "....", // Different price for SUV
      oldPrice: "....",
      description: "Full SUV diagnostic and service for Swift.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 4, 
      name: "Baleno", 
      image: MarutiSuzukiBaleno,
      type: "SUV",
      price: ".....", // Different price for SUV
      oldPrice: "....",
      description: "Full SUV diagnostic and service for Baleno.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 5, 
      name: "Maruti Alto", 
      image: MarutiAlto,
      type: "SUV",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "Full SUV diagnostic and service for Baleno.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 6, 
      name: "Maruti Suzuki Ritz", 
      image: MarutiAlto,
      type: "Maruti Suzuki Ritz",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "Full SUV diagnostic and service for Baleno.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

  ],
  // ... other brands
};