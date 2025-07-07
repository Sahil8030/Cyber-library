import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


import Home from "./home/Home";
import Signup from "./components/Signup";
import PremiumB from "./PremiumB/PremiemBPage";
import Contact from "./components/Contact"; 
import About from "./components/About";     

function App() {
  const { user: authUser } = useAuth(); 


  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/PremiumB-books"
          element={
            authUser ? (
              <PremiumB />
            ) : (
              (() => {
                toast.error("You need to login to access Premium Books");
                return <Navigate to="/signup" />;
              })()
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
