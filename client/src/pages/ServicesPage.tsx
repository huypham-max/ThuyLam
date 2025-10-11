import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-chart-2/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Dịch Vụ Của Chúng Tôi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cung cấp dịch vụ thu mua, chế biến và phân phối thủy sản chất lượng cao
            </p>
          </div>
        </div>
        <ServicesSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
