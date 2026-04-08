// import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import AboutUs from "./pages/About";

// const App=()=>{
//   return(


//     <>
    
//    <BrowserRouter>
//    <Routes>
//     <Route path="/" element={<Layout/>}>
//     <Route index element={<Home/>}/>
//     <Route path="AboutUs" element={<AboutUs/>}/>
  
    






//     </Route>







//    </Routes>
   
   
   
   
   
//    </BrowserRouter>
    
//     </>
//   )
// }


// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; 

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          
          <Route path="AboutUs" element={<About />} />
          
          <Route path="Services" element={<Services />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
