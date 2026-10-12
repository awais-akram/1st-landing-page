import Navbar from "@/views/Navbar";
import Hero from "@/views/Hero";
import SupportSection from "@/views/SupportSection";
import Features from "@/views/Features";
import Benefits from "@/views/Benefits";
import Pricing from "@/views/Pricing";
import Testimonials from "@/views/Testimonials";
import Footer from "@/views/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content with IDs for Smooth Scroll Navigation */}
      <main className="pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="support">
          <SupportSection />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="benefits">
          <Benefits />
        </section>

        <section id="plan">
          <Pricing />
        </section>

        <section id="about">
          <Testimonials />
        </section>
      </main>

      <Footer />

      {/* Shadcn Sonner Toaster (Screen level floating notification) */}
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;