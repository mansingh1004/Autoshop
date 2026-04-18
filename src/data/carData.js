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
import MarutiSuzuki from '../images/maruti-suzuki-wagonr.png';
import SwiftDezire from '../images/maruti-suzuki-swift-dzire.png';
import MarutiSuzukiBaleno from '../images/maruti-suzuki-baleno.png';
import MarutiAlto from '../images/maruti-Alto.png';
import MarutiRitz from '../images/maruti-suzuki-ritz.png';
import Maruticelerio from '../images/maruti-suzuki-celerio.png';
import Marutiertiga from '../images/maruti-suzuki-ertiga.png';
import gypsy from '../images/maruti-suzuki-gypsy.png';


// hyundai model
import hyundai_i10 from '../images/hyundai-i10.png';
import hyundai_120 from '../images/hyundai-i20.png';
import hyundai_grandi10 from '../images/hyundai-grandi10.png';
import hyundai_santro from '../images/hyundai-santro.png';
import eon from '../images/hyundai-eon.png';
import creta from '../images/hyundai-creta.png';
import verna from '../images/hyundai-verna.png';

// toyota

import toyota_etios from '../images/toyota-etios.png';
import toyota_innova from '../images/toyota-innova.png';
import toyota_fortuner from '../images/toyota-fortuner.png';
import toyota_innova_crysta from '../images/toyota-innova-crysta.png';
import tyota_Yaris from '../images/Toyota_Yaris.png';
import toyota_glanza from '../images/Toyota_Glanza.png';
import toyota_camry from '../images/toyota-camry.png';

// tata

import tata_tiago from '../images/tata-tiago.png';
import tata_zest from '../images/tata-zest.png';
import tata_nexon from '../images/tata-nexon.png';
import tata_safari from '../images/tata-safari.png';
import tata_harari from '../images/Tata Harrier.webp';
import tata_altroz from '../images/Tata_Altroz.png';

// kia 

import kia_seltos from '../images/kia_Seltos.png';
import kia_sonet from '../images/kia_sonet.png';
import kia_carens from '../images/kia_carens.png';

// mahindra

import mahindra_bolero from '../images/mahindra_bolero.png';
import Mahindra_XUV500 from '../images/Mahindra-XUV500.png';
import Mahindra_scorpio from '../images/mahindra-scorpio.png';
import Mahindra_kuv100 from '../images/mahindra-kuv100.png';
import Mahindra_xuv from '../images/mahindra_XUV300.png';
import Mahindra_thar from '../images/mahindra-thar.png';

// mg

import mg_hector from '../images/mg_hector.png';

// nissan

import nissan_micra from '../images/nissan-micra.png';
import nissan_sunny from '../images/nissan-sunny.png';
import nissan_terrano from '../images/nissan-terrano.png';
import nissan_teana from '../images/nissan-teana.png';
import nissan_x_trail from '../images/nissan-x-trail.png';
import nissan_gtr from '../images/nissan-gtr.png';

//renault

import renault_kwid from '../images/renault-kwid.png';
import renault_scala from '../images/renault-scala.png';
import renault_duster from '../images/renault-duster.png';
import renault_fluence  from "../images/renault-fluence.png";
import renault_Triber from '../images/Renault_Tribe.png';
import renault_koleos from '../images/renault-koleos.png';

// honda

import honda_city from '../images/honda-city.png';
import honda_amaze from '../images/honda-amaze.png';
import honda_brio from '../images/honda-brio.png';
import honda_civic from '../images/honda-civic.png';
import honda_accord from '../images/honda_accord.png';
import honda_wrv from '../images/honda-wrv.png';
import honda_brv from '../images/honda-brv.png';

// ford

import ford_ecosport from '../images/ford-ecosport.png';
import ford_figo from '../images/ford-figo.png'; 
import ford_fiesta from '../images/ford-fiesta.png'
import ford_classic from '../images/ford-classic.png'


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

  toyota :[
    {
    id: 1, 
      name: "Toyota Etios", 
      image: toyota_etios,
      type: "Toyota Etios",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Etios is a practical, spacious, and reliable subcompact sedan (and hatchback Liva) designed for families, known for its high safety standards, roomy cabin, and large 592-liter boot.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
    id: 2, 
      name: "Toyota Innova", 
      image: toyota_innova,
      type: "Toyota Innova",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Innova is a highly successful series of multi-purpose vehicles (MPVs) manufactured by Toyota since 2004, renowned for its exceptional reliability, spaciousness, and durability.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
    id: 3, 
      name: "Toyota Fortuner", 
      image: toyota_fortuner,
      type: "Toyota Fortuner",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Fortuner is a popular, rugged 7-seater mid-size SUV renowned for its commanding road presence, high reliability, and excellent off-road capabilities.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
    id: 4, 
      name: "Toyota Innova Crysta", 
      image: toyota_innova_crysta,
      type: "Toyota Innova Crysta",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Innova Crysta is a premium, rear-wheel-drive MPV known for its exceptional reliability, comfort, and durability.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
    id: 5, 
      name: "Toyota Yaris", 
      image: tyota_Yaris,
      type: "Toyota Yaris",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Yaris is a compact, fuel-efficient car (available as a hatchback or sedan) renowned for reliability, affordability, and urban agility.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
    id: 6, 
      name: "Toyota Glanza", 
      image: toyota_glanza,
      type: "Toyota Glanza",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Glanza is a premium 5-seater hatchback, essentially a rebadged Maruti Suzuki Baleno, offering Toyota’s reliability, a 1.2-litre petrol engine (89 bhp), and available CNG variants.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
    id: 7, 
      name: "Toyota Camry", 
      image: toyota_camry,
      type: "Toyota Camry",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Toyota Camry is a renowned mid-size luxury sedan celebrated for its exceptional reliability, comfort, and fuel efficiency, often serving as a popular choice for both families and executive chauffeur-driven roles.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
  ],
  tata :[
      {
      id: 1, 
      name: "Tata Tiago", 
      image: tata_tiago,
      type: "Tata Tiago",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Tata Tiago is a stylish, safe, and compact hatchback known for its 4-star GNCAP safety rating, robust build, and competitive pricing.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
      id: 2, 
      name: "Tata Zest", 
      image: tata_zest,
      type: "Tata Zest",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Tata Zest is a 5-seater subcompact sedan aimed at urban commuters, known for its spacious cabin, refined 1.2L turbocharged petrol engine, and comfortable ride quality.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
      id: 3, 
      name: "Tata Safari", 
      image: tata_safari,
      type: "Tata Safari",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Tata Safari is a premium 6/7-seater mid-size SUV known for its commanding road presence, 5-star BNCAP safety rating, and luxurious, tech-forward cabin.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
      id: 4, 
      name: "Tata Harrier", 
      image: tata_harari,
      type: "Tata Harrier",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Tata Harrier is a premium 5-seater mid-size SUV known for its bold Impact Design 2.0, robust build quality, and strong road presence.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
     {
      id: 5, 
      name: "Tata Nexon", 
      image: tata_nexon,
      type: "Tata Nexon",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Tata Nexon is a top-selling, 5-star BNCAP-rated sub-compact SUV known for its safety, modern design, and powertrain versatility.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
    {
      id: 6, 
      name: "Tata Altroz", 
      image: tata_altroz,
      type: "Tata Altroz",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Tata Altroz is a premium 5-seater hatchback renowned for its 5-star Global NCAP safety rating, modern design, and wide range of powertrain options (petrol, diesel, CNG, and DCA automatic).",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
  ],
  kia:[
    {
     id: 1, 
      name: "Kia Seltos", 
      image: kia_seltos,
      type: "Kia Seltos",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Kia Seltos is a stylish, feature-packed compact SUV known for its bold design, robust engine options (including turbo-petrol and diesel), and advanced technology like ADAS.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    
    },
    {
     id: 2, 
      name: "Kia Sonet", 
      image: kia_sonet ,
      type: "Kia Sonet",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Kia Sonet is a stylish, feature-packed sub-four-meter compact SUV designed for urban driving, featuring a bold tiger nose grille, premium cabin with a 10.25-inch infotainment system, and 385-liter boot space.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    
    },
    {
     id: 3, 
      name: "Kia Carens", 
      image: kia_carens ,
      type: "Kia Carens",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Kia Carens is a stylish, feature-rich recreational vehicle (MPV) that blends SUV-like design with the practicality of a 6/7-seater family car.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    
    },
  ],

  mahindra :[
    {
      id: 1, 
      name: "Mahindra Bolero", 
      image: mahindra_bolero ,
      type: "Mahindra Bolero",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Mahindra Bolero is a rugged, sub-4-meter, 7-seater MUV (multi-utility vehicle) known for its durability and popularity in rural and semi-urban India.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

    {
      id: 2, 
      name: "Mahindra XUV500", 
      image: Mahindra_XUV500 ,
      type: "Mahindra XUV500",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Mahindra XUV500 is a popular, discontinued 7-seater premium crossover SUV known for its monocoque chassis, powerful 2.2L mHawk diesel engine (153bhp/360Nm), and bold cheetah-inspired design.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

    {
      id: 3, 
      name: "Mahindra Scorpio", 
      image: Mahindra_scorpio,
      type: "Mahindra Scorpio",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Mahindra Scorpio is an iconic, rugged ladder-frame SUV known for its commanding road presence, powerful diesel engines, and versatile 7-seater configuration.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

    {
      id: 4, 
      name: "Mahindra KUV100", 
      image: Mahindra_kuv100,
      type: "Mahindra KUV100",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Mahindra KUV100 (or KUV100 NXT) is a sub-4 meter micro-SUV or tall-hatchback designed for urban environments, featuring unique SUV-like styling with a compact footprint.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

    {
      id: 5, 
      name: "Mahindra XUV300", 
      image: Mahindra_xuv,
      type: "Mahindra XUV300",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Mahindra XUV300 is a 5-seater subcompact SUV designed for performance and safety, known for its high torque engines (1.2L petrol/1.5L diesel) and 5-star GNCAP rating.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },

    {
      id: 6, 
      name: "Mahindra Thar", 
      image: Mahindra_thar,
      type: "Mahindra Thar",
      price: "....", // Different price for SUV
      oldPrice: ".....",
      description: "The Mahindra Thar is a popular, rugged 3-door lifestyle SUV renowned for its iconic design and impressive off-road capabilities.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"]
    },
  ],

  mg :[
    {
     id: 1, 
      name: "MG Hector", 
      image: mg_hector,
      type: "MG Hector",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The MG Hector is a premium, feature-rich mid-size SUV (5, 6, or 7-seater) known for its spacious cabin, bold design, and advanced technology.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    },
  ],

  nissan:[
    {
      id: 1, 
      name: "Nissan Micra", 
      image: nissan_micra,
      type: "Nissan Micra",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Nissan Micra is a compact, agile 5-seater hatchback known for its stylish, rounded design, fuel-efficient engines (1.2L petrol/1.5L diesel), and easy maneuverability, making it ideal for city driving.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    
    },
    {
      id: 2, 
      name: "Nissan Sunny", 
      image: nissan_sunny,
      type: "Nissan Sunny",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Nissan Sunny is a 5-seater compact sedan known for its exceptional rear-seat legroom and massive cabin space, often marketed as a spacious family car.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    
    },
    {
      id: 3, 
      name: "Nissan Terrano", 
      image: nissan_terrano,
      type: "Nissan Terrano",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Nissan Terrano is a 5-seater compact SUV known for its robust build, excellent ride quality, and spacious cabin.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 4, 
      name: "Nissan Teana", 
      image: nissan_teana,
      type: "Nissan Teana",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Nissan Teana is a premium, comfortable 5-seater sedan (last sold around 2014) focusing on cabin luxury and a smooth ride. It generally features a 2.5L V6 petrol engine, automatic transmission, and high-quality cabin materials.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 5, 
      name: "Nissan X-Trail", 
      image: nissan_x_trail,
      type: "Nissan X-Trail",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Nissan X-Trail is a versatile, family-focused SUV known for its comfortable ride, spacious interior, and optional 7-seat configuration.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 6, 
      name: "Nissan GTR", 
      image: nissan_gtr,
      type: "Nissan GTR",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Nissan GT-R is a legendary high-performance sports car known for its powerful engine, advanced all-wheel-drive system, and cutting-edge technology.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },

  ],

  renault :[
    {
      id: 1, 
      name: "Renault Kwid", 
      image: renault_kwid,
      type: "Renault Kwid",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Renault Kwid is a stylish, budget-friendly hatchback featuring an SUV-inspired design, 184mm high ground clearance, and a compact footprint ideal for city driving.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
     {
      id: 2, 
      name: "Renault Duster", 
      image: renault_duster,
      type: "Renault Duster",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "Duster (third-generation) is a rugged, 5-seater compact SUV designed for both city driving and off-road adventures, making a comeback with a focus on premium features and strong performance.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 3, 
      name: "Renault Scala", 
      image: renault_scala,
      type: "Renault Scala",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Renault Scala is a badge-engineered, premium sedan based on the Nissan Sunny, featuring distinct Renault styling, a spacious cabin, and comfortable ride quality",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 4, 
      name: "Renault Fluence", 
      image: renault_fluence,
      type: "Renault Fluence",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Renault Fluence is a comfortable compact sedan (or saloon) designed by the French manufacturer to offer a spacious, refined ride, often featuring a 1.5L dCi diesel engine in many markets.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 5, 
      name: "Renault Triber", 
      image: renault_Triber,
      type: "Renault Triber",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Renault Triber is an affordable, sub-4-meter modular 7-seater MPV designed for families, featuring a 1.0L petrol engine with manual/AMT options.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 6, 
      name: "Renault Koleos", 
      image: renault_koleos,
      type: "Renault Koleos",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Renault Koleos is a 5-seater mid-size crossover SUV produced by the French manufacturer Renault, known for blending European styling with comfort-focused practicality.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
  ],

  honda :[
    {
      id: 1, 
      name: "Honda City", 
      image: honda_city,
      type: "Honda City",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda City is a premium 5-seater sedan known for its refined 1.5-litre i-VTEC petrol engine, high-speed stability, and spacious, comfortable interior.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 2, 
      name: "Honda Amaze", 
      image: honda_amaze,
      type: "Honda Amaze",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda Amaze is a premium sub-4-meter compact sedan known for its spacious cabin, 420-litre boot, and comfortable ride.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 

    },
    {
      id: 3, 
      name: "Honda Brio", 
      image: honda_brio,
      type: "Honda Brio",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda Brio is a compact 5-seater hatchback known for its peppy performance, stylish looks, and urban agility.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    },
    {
      id: 4, 
      name: "Honda Civic", 
      image: honda_civic,
      type: "Honda Civic",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda Brio is a compact 5-seater hatchback known for its peppy performance, stylish looks, and urban agility.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    },
    {
      id: 5, 
      name: "Honda Accord", 
      image: honda_accord,
      type: "Honda Accord",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda Accord is a renowned midsize sedan, now in its 11th generation, celebrated for its reliability, spacious cabin, and well-rounded driving dynamics.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    },
    {
      id: 6, 
      name: "Honda WRV", 
      image: honda_wrv,
      type: "Honda WRV",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda Accord is a renowned midsize sedan, now in its 11th generation, celebrated for its reliability, spacious cabin, and well-rounded driving dynamics.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    },
    {
      id: 7, 
      name: "Honda BRV", 
      image: honda_brv ,
      type: "Honda BRV",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Honda Accord is a renowned midsize sedan, now in its 11th generation, celebrated for its reliability, spacious cabin, and well-rounded driving dynamics.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    },
  ],

  ford :[
    {
     id: 1, 
      name: "Ford EcoSport", 
      image: ford_ecosport ,
      type: "Ford EcoSport",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Ford EcoSport is a compact SUV designed for urban driving, known for its high ground clearance, sturdy build, and agile handling. It offers a mix of petrol and diesel engines, typically featuring the SYNC infotainment system.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    
    },
    {
     id: 2, 
      name: "Ford Aspire", 
      image: ford_figo ,
      type: "Ford Aspire",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Ford Figo Aspire (later known simply as the Ford Aspire) is a sub-4-meter compact sedan manufactured by Ford India, recognized for its stylish design, superior driving dynamics, and high safety standards.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    
    },
    {
     id: 3, 
      name: "Ford Fiesta", 
      image: ford_fiesta ,
      type: "Ford Fiesta",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Ford Figo Aspire (later known simply as the Ford Aspire) is a sub-4-meter compact sedan manufactured by Ford India, recognized for its stylish design, superior driving dynamics, and high safety standards.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    
    },
    {
     id: 4, 
      name: "Ford Fiesta Classic", 
      image: ford_classic ,
      type: "Ford Fiesta Classic",
      price: ".....", // Different price for SUV
      oldPrice: ".....",
      description: "The Ford Figo Aspire (later known simply as the Ford Aspire) is a sub-4-meter compact sedan manufactured by Ford India, recognized for its stylish design, superior driving dynamics, and high safety standards.",
      services: ["Engine Oil Replacement", "Oil Filter Replacement", "Air Filter Replacement","Fuel Filter Checking","Cabin Filter / AC Filter Cleaning","Coolant Top up (200 ml)","Wiper Fluid Replacement","Brake Fluid Top up (50 ml)","Battery Water Top up","Heater/Sparks Plugs Checking","Car Wash","Interior Vacuuming ( Carpet & Seats )","Scanning","Rear Brake Shoes Serviced","Front Brake Pads Serviced"] 
    
    },
  ]

    
  // ... other brands
};