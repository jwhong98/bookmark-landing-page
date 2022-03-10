import "./App.css";
import CallToAction from "./components/CallToAction/CallToAction";
import Download from "./components/Download/Download";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
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
