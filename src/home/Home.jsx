import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import PremiumB from "../components/PremiumB";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Contact/>
      <Footer />
    </>
  );
}

export default Home;
