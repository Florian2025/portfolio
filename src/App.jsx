import "./App.css";
import Branding from "./components/Branding";
import { CallToAction } from "./components/CallToAction";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Points } from "./components/Points";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Branding />
        <Features />
        <CallToAction />
        <Points />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}

export default App;
