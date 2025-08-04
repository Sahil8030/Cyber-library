import React from "react";
import Navbar from "../components/Navbar";
import PremiumB from "../components/PremiumB"; 
import Footer from "../components/Footer";

function PremiumBPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <PremiumB /> 
      </div>
      <Footer />
    </>
  );
}

export default PremiumBPage;
