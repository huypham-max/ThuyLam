import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Scissors, CookingPot, Package, TruckIcon } from "lucide-react";
import processingImage from "@assets/stock_images/modern_seafood_proce_975f8cbe.jpg";
import workersImage from "@assets/stock_images/workers_in_food_proc_6e8c6ab5.jpg";
import packagingImage from "@assets/stock_images/fresh_fish_packaging_9c694083.jpg";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      icon: Anchor,
      title: "Thu mua nguyên liệu",
      description: "Chọn lọc cá bò tươi sống từ nguồn gốc uy tín, thu mua trực tiếp ngay sau khi cập bến.",
      image: null,
      testId: "step-purchase"
    },
    {
      number: 2,
      icon: Scissors,
      title: "Sơ chế",
      description: "Làm sạch, loại bỏ nội tạng và sơ chế nguyên liệu theo tiêu chuẩn vệ sinh, giữ nguyên độ tươi ngon.",
      image: workersImage,
      testId: "step-preparation"
    },
    {
      number: 3,
      icon: CookingPot,
      title: "Chế biến",
      description: "Sử dụng công nghệ chế biến hiện đại, quy trình khép kín đảm bảo chất lượng sản phẩm.",
      image: processingImage,
      testId: "step-processing"
    },
    {
      number: 4,
      icon: Package,
      title: "Đóng gói",
      description: "Đóng gói sản phẩm cẩn thận theo tiêu chuẩn xuất khẩu, đảm bảo bao bì nguyên vẹn.",
      image: packagingImage,
      testId: "step-packaging"
    },
    {
      number: 5,
      icon: TruckIcon,
      title: "Giao hàng",
      description: "Vận chuyển nhanh chóng với xe lạnh chuyên dụng, sản phẩm đến tay khách hàng đúng hạn.",
      image: null,
      testId: "step-delivery"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Quy trình sản xuất
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Quy trình khép kín từ thu mua đến giao hàng, đảm bảo chất lượng tốt nhất
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-2 to-primary transform -translate-y-1/2 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative" data-testid={step.testId}>
                <Card className="hover-elevate transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    {step.image && (
                      <div className="w-full aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
