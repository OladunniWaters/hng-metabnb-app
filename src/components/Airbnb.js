import Navbar from "./Navbar";
import Hero from "./Hero";
import Brands from "./Brands";
import Inspiration from "./Inspiration";
import LearnMore from "./LearnMore";
import Footer from "./Footer";
import '../App.css';

export default function Airbnb() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Inspiration />
      <LearnMore />
      <Footer />
    </div>
  );
}


