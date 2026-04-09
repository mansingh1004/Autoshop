
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