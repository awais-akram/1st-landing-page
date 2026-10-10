import Navbar from "@/views/Navbar";
import Hero from "@/views/Hero";
import SupportSection from "@/views/SupportSection";
import Features from "@/views/Features";
import Benefits from "@/views/Benefits";
import Pricing from "@/views/Pricing";
import Testimonials from "@/views/Testimonials";
import Footer from "@/views/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <SupportSection />
        <Features />
        <Benefits />
        <Pricing /> 
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}