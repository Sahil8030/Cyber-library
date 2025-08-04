import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import Home from "./home/Home";
import Contact from "./components/Contact"; 
import About from "./components/About";     
import PremiumB from "./components/PremiumB";
import PremiumBPage from "./PremiumB/PremiemBPage";

function App() {
  

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PremiumBPage" element={<PremiumBPage />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
