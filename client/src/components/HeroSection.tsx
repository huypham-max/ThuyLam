import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, Users, Leaf } from "lucide-react";
import heroImage from "@assets/stock_images/ocean_waves_aerial_v_0f2df5c9.jpg";

export default function HeroSection() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-chart-2/90 z-10" />
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Sản phẩm chất lượng – Hàng loại A
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Nguồn gốc Phuoc Tinh – Cá bò tươi sống, đảm bảo chất lượng
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/lien-he">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-contact-hero"
              >
                Liên hệ ngay
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dich-vu">
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-services-hero"
              >
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm" data-testid="stat-experience">
              <Award className="h-8 w-8 text-white" />
              <div className="text-center">
                <p className="text-3xl font-bold font-accent">15+</p>
                <p className="text-sm text-white/80">Năm kinh nghiệm</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm" data-testid="stat-customers">
              <Users className="h-8 w-8 text-white" />
              <div className="text-center">
                <p className="text-3xl font-bold font-accent">500+</p>
                <p className="text-sm text-white/80">Khách hàng tin tưởng</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm" data-testid="stat-quality">
              <Leaf className="h-8 w-8 text-white" />
              <div className="text-center">
                <p className="text-3xl font-bold font-accent">100%</p>
                <p className="text-sm text-white/80">Chất lượng đảm bảo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
