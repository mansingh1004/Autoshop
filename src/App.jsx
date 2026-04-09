

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; 

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

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          
          <Route path="AboutUs" element={<About />} />
          
          <Route path="Services" element={<Services />} />

          <Route path="contact" element={<ContactPage/>}/>

          <Route path="prices" element={<PricingPage/>}/>

          <Route path="periodicservice" element={<PeriodicServiceDetail/>}/>

          <Route path="denting-painting" element={<DentingPaintingDetail/>}/>

          <Route path="pickupdrop" element={<PickupDropDetail/>}/>

          <Route path="acservice" element={<ACServiceDetail/>}/>

          <Route path="carspa" element={<CarSpaDetail/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
