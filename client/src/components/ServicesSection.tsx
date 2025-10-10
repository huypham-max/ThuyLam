import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Factory, Truck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Thu mua cá bò tươi",
      description: "Công tác thu má bò tươi trực tiếp từ ngư dân tại vùng biển Phuoc Tinh – Bà Rịa. Mỗi mẻ cá đặc biệt thu mua ngay sau khi cập bến, đảm bảo độ tươi ngon, thịt sắn chắc và giá tốt trực tiếp đạng ký nhận.",
      testId: "card-service-purchase"
    },
    {
      icon: Factory,
      title: "Chế biến thủy sản",
      description: "Quy trình chế biến bản đạt, giờ yêu hoàng từ doanh lúc nhập, lúc, chế biến đến đóng gói, chúng tôi tuân thủ các tiêu chuẩn chất lượng cao nhất. Nhờ đội ngũ thợ lành nghề và chuyên môn cao, chúng tôi tự hào tạo ra những sản phẩm đạt điều chuẩn xuất khẩu.",
      testId: "card-service-processing"
    },
    {
      icon: Truck,
      title: "Giao dịch cá bò",
      description: "Chuyên cung cấp sẵ dịch vụ bán hàng cho doanh nghiệp hải sản trở ra các biển Phuoc Tinh, vận xư phận mái miễn đất nước. Với những tiêu thị lạnh nhập vào, khả pháp mời từ chúng tốm các tôm thò uy công ty viêm hải nước địa chỉnh riêng gửi khuớc ngươn.",
      testId: "card-service-trading"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Sản phẩm & Dịch vụ
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Chúng tôi chuyên thu mua cá bò tươi trực tiếp từ ngư dân tại vùng biển Phuoc Tinh – Bà Rịa. 
            Mỗi mẻ cá đặc biệt thu mua ngay sau khi cập bến.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={service.testId}>
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
