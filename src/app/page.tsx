import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div>
      {/* Navbar will be rendered by layout.tsx */}

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Team Section */}
      <Team />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
