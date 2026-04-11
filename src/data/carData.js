// src/data/carData.js
import windshield from '../images/WindshieldService.jpg'

export const carModelsByBrand = {
  maruti: [
    { id: 1, name: "Swift", image: windshield, type: "Hatchback" },
    { id: 2, name: "Brezza", image: "https://example.com/brezza.jpg", type: "Compact SUV" },
    { id: 3, name: "Baleno", image: "https://example.com/baleno.jpg", type: "Premium Hatchback" },
  ],
  hyundai: [
    { id: 4, name: "Creta", image: "https://example.com/creta.jpg", type: "SUV" },
    { id: 5, name: "i20", image: "https://example.com/i20.jpg", type: "Hatchback" },
  ],
  toyota: [
    { id: 6, name: "Fortuner", image: "https://example.com/fortuner.jpg", type: "Luxury SUV" },
    { id: 7, name: "Innova Hycross", image: "https://example.com/innova.jpg", type: "MPV" },
  ],
  // Add other brands (tata, kia, bmw, etc.) in lowercase keys
};