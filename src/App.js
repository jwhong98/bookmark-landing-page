import "./App.css";
import Download from "./components/Download/Download";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Download />
    </>
  );
}

export default App;
