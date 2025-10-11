import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Statistics from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductGallery from "@/components/ProductGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <Statistics />
        <WhyChooseUs />
        <ProductGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
