import "./App.css";
import React, { useState } from "react";
import CallToAction from "./components/CallToAction/CallToAction";
import Download from "./components/Download/Download";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <MobileMenu onToggle={onToggle} />}
      <Navbar onToggle={onToggle} />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
