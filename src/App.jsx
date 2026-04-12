

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; 

import SelectModel from "./pages/SelectModel";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactPage from "./pages/contact";
import PricingPage from "./pages/prices";
import PeriodicServiceDetail from "./services/PeriodicService";
import DentingPaintingDetail from "./services/denting-painting";
import PickupDropDetail from "./services/pickupdrop";
import ACServiceDetail from "./services/acservice";
import CarSpaDetail from "./services/carspa";
import BatteryServiceDetail from "./services/batteryservice";
import CarDetailingDetail from "./services/cardetailing";
import WindshieldServiceDetail from "./services/windshieldservice";
import EngineDiagnosticsDetail from "./services/enginediagnostics";
import OilFilterChangeDetail from "./services/oilfilterchange";
import BrakeSuspensionDetail from "./services/brake-suspension";
import ACElectricalRepairDetail from "./services/acelectricalrepair";
import PremiumComprehensiveService from "./services/premiumcomprehensiveservice";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />

          {/* ADD THIS NEW DYNAMIC ROUTE */}
          <Route path="select-model/:brandName" element={<SelectModel />} /> 
          
          <Route path="AboutUs" element={<About />} />
          
          <Route path="Services" element={<Services />} />

          <Route path="contact" element={<ContactPage/>}/>

          <Route path="prices" element={<PricingPage/>}/>

          <Route path="periodicservice" element={<PeriodicServiceDetail/>}/>

          <Route path="denting-painting" element={<DentingPaintingDetail/>}/>

          <Route path="pickupdrop" element={<PickupDropDetail/>}/>

          <Route path="acservice" element={<ACServiceDetail/>}/>

          <Route path="carspa" element={<CarSpaDetail/>}/>

          <Route path="batteryservice" element={<BatteryServiceDetail/>}/>

          <Route path="cardetailing" element={<CarDetailingDetail/>}/>

          <Route path="windshieldservice" element={<WindshieldServiceDetail/>}/>

          <Route path="enginediagnostics" element={<EngineDiagnosticsDetail/>}/>

          <Route path="oilfilterchange" element={<OilFilterChangeDetail/>}/>

          <Route path="brake-suspension" element={<BrakeSuspensionDetail/>}/>

          <Route path="acelectricalrepair" element={<ACElectricalRepairDetail/>}/>

          // Change this line in App.jsx
           <Route path="premium-service/:carName" element={<PremiumComprehensiveService />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
