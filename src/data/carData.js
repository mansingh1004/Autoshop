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

// maruti model
import Swift from '../images/maruti-suzuki-swift.png';
import MarutiSuzuki from '../images/maruti-suzuki-wagonr.png'
import SwiftDezire from '../images/maruti-suzuki-swift-dzire.png'
import MarutiSuzukiBaleno from '../images/maruti-suzuki-baleno.png'
import MarutiAlto from '../images/maruti-Alto.png'
import MarutiRitz from '../images/maruti-suzuki-ritz.png'
import Maruticelerio from '../images/maruti-suzuki-celerio.png'
import Marutiertiga from '../images/maruti-suzuki-ertiga.png'
import gypsy from '../images/maruti-suzuki-gypsy.png'


// hyundai model
import hyundai_i10 from '../images/hyundai-i10.png'
import hyundai_120 from '../images/hyundai-i20.png'
import hyundai_grandi10 from '../images/hyundai-grandi10.png'
import hyundai_santro from '../images/hyundai-santro.png'
import eon from '../images/hyundai-eon.png'
import creta from '../images/hyundai-creta.png'
import verna from '../images/hyundai-verna.png'


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
      image: MarutiRitz,
      type: "Maruti Suzuki Ritz",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "Full SUV diagnostic and service for Baleno.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
     { 
      id: 7, 
      name: "Celerio", 
      image: Maruticelerio,
      type: "Maruti Suzuki Celerio",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "Full SUV diagnostic and service for Celerio.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
     { 
      id: 8, 
      name: "Ertiga", 
      image: Marutiertiga,
      type: "Maruti Suzuki Ertiga",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "Full SUV diagnostic and service for Ertiga.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 9, 
      name: "Gypsy", 
      image: gypsy,
      type: "Maruti Suzuki Gypsy",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "Full SUV diagnostic and service for Gypsy.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

  ],

  hyundai: [
    { 
      id: 1, 
      name: "Hyundai i10", 
      image: hyundai_i10,
      type: "Hyundai i10",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai i10 is a stylish, compact hatchback designed for urban driving, known for its easy maneuverability, refined engines, and well-equipped interior.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 2, 
      name: "Hyundai i20", 
      image: hyundai_120,
      type: "Hyundai i20",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai i20 is a stylish, feature-packed premium hatchback (3995 mm long) known for its modern design, sharp handling, and high-end tech.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 3, 
      name: "Hyundai Grand i10", 
      image: hyundai_grandi10,
      type: "Hyundai Grand i10",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai Grand i10 (and its successor, the Grand i10 Nios) is a popular, compact 5-seater hatchback known for its stylish design, feature-rich cabin, and balanced city performance",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    
    { 
      id: 4, 
      name: "Hyundai Santro Xing", 
      image: hyundai_santro,
      type: "Hyundai Santro Xing",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai Santro Xing is a popular, tall-boy hatchback known for its practical cabin space, reliability, and excellent city handling",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 5, 
      name: "Hyundai Eon", 
      image: eon,
      type: "Hyundai Eon",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai Eon is a stylish, entry-level 5-seater hatchback designed for city driving, featuring Hyundai’s Fluidic Sculpture design language",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    { 
      id: 6, 
      name: "Hyundai Creta", 
      image: creta,
      type: "Hyundai Creta",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai Creta is a popular, premium compact SUV known for its modern design, feature-rich cabin, and versatile powertrain options",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

    { 
      id: 6, 
      name: "Hyundai Verna", 
      image: verna,
      type: "Hyundai Verna",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Hyundai Verna is a premium 5-seater mid-size sedan known for its futuristic, aerodynamic design and high-tech features.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

  ],
  // ... other brands
};