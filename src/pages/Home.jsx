import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Ratings from "../components/Ratings";
import Security from "../components/Security";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#050508] min-h-screen text-white select-none">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Ratings />
      <Security />
      <Footer />
    </div>
  );
}

