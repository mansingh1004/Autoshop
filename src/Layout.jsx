// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"
// import Home from "./pages/Home"
// import About from "./pages/About"
// const Layout =()=>{
//     return(
//         <>
//         <Navbar/>
//         <Home/>
//         <About/>
//         <Footer/>
        
//         </>
//     )
// }

// export default Layout;


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      
      <Outlet />   {/* 🔥 Dynamic page yaha render hoga */}

      <Footer />
    </>
  );
};

export default Layout;