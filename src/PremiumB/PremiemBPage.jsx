import React from "react";
import Navbar from "../components/Navbar";
import PremiumB from "../components/PremiumB"; // ✅ Keep child component
import Footer from "../components/Footer";

function PremiumBPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <PremiumB /> {/* ✅ Now refers to the child component */}
      </div>
      <Footer />
    </>
  );
}

export default PremiumBPage;
