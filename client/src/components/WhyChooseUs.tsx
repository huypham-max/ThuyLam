import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, Handshake, Award, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Chất lượng đảm bảo",
      description: "Sản phẩm đạt tiêu chuẩn HACCP, ISO 22000. Kiểm tra chất lượng nghiêm ngặt từng khâu.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Giao hàng nhanh chóng",
      description: "Hệ thống xe lạnh chuyên dụng, giao hàng trong vòng 24h tại khu vực TP.HCM và các tỉnh lân cận.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Giá cả cạnh tranh",
      description: "Thu mua trực tiếp từ ngư dân, không qua trung gian, mang lại giá tốt nhất cho khách hàng.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Handshake,
      title: "Đối tác tin cậy",
      description: "Hơn 15 năm kinh nghiệm, hợp tác với hơn 500 khách hàng và nhà hàng trên toàn quốc.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Đạt chuẩn xuất khẩu",
      description: "Sản phẩm đã được xuất khẩu sang nhiều thị trường khó tính như Nhật Bản, Hàn Quốc, EU.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Globe,
      title: "Nguồn gốc rõ ràng",
      description: "Truy xuất nguồn gốc 100%, từ vùng biển Phuoc Tinh với chứng nhận từ cơ quan chức năng.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Với hơn 15 năm kinh nghiệm trong ngành chế biến thủy sản, chúng tôi cam kết mang đến giá trị tốt nhất cho khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 border-none shadow-lg" data-testid={`reason-${index}`}>
              <CardContent className="p-6 space-y-4">
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center`}>
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
