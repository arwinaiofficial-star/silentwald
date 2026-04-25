import "./App.css";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Marquee from "./components/sections/Marquee";
import Stay from "./components/sections/Stay";
import Amenities from "./components/sections/Amenities";
import Experiences from "./components/sections/Experiences";
import Dining from "./components/sections/Dining";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import FloatingCTA from "./components/sections/FloatingCTA";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Stay />
        <Amenities />
        <Experiences />
        <Dining />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
