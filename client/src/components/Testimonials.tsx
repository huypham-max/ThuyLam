import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anh Nguyễn Văn A",
      role: "Chủ nhà hàng hải sản",
      location: "TP. Hồ Chí Minh",
      content: "Tôi đã hợp tác với Thủy Lam được 5 năm. Sản phẩm cá bò luôn tươi ngon, chất lượng ổn định. Đặc biệt là dịch vụ giao hàng rất nhanh và đúng giờ. Nhà hàng của tôi rất hài lòng!",
      rating: 5
    },
    {
      name: "Chị Trần Thị B",
      role: "Giám đốc công ty xuất khẩu",
      location: "Bà Rịa - Vũng Tàu",
      content: "Chúng tôi xuất khẩu hải sản sang Nhật Bản và luôn tin tưởng vào sản phẩm của Thủy Lam. Quy trình chế biến đạt chuẩn quốc tế, giấy tờ đầy đủ. Đây là đối tác đáng tin cậy!",
      rating: 5
    },
    {
      name: "Anh Lê Văn C",
      role: "Ngư dân",
      location: "Phuoc Tinh",
      content: "Làm nghề đánh bắt hơn 20 năm, tôi thấy Thủy Lam là công ty uy tín nhất. Giá thu mua công bằng, thanh toán nhanh ngay khi giao hàng. Tôi rất tin tưởng!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Sự hài lòng của khách hàng là niềm tự hào của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 relative" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t">
                  <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
