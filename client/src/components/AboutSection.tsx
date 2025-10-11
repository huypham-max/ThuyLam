import { CheckCircle } from "lucide-react";
import aboutImage from "@assets/stock_images/fresh_seafood_on_ice_09816a60.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Về Chúng Tôi
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full" />
            </div>
            
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-description">
              Công ty TNHH Chế Biến Thủy Sản Thủy Lam được thành lập với sứ mệnh là đơn vị chuyên thu mua, chế biến và phân phối các loại 
              sản phẩm chất lượng cao từ Phước Tỉnh. Với nhiều năm kinh nghiệm trong lĩnh vực chế biến thủy sản, chúng tôi cam kết mang đến 
              cho khách hàng những sản phẩm tươi ngon, đảm bảo an toàn vệ sinh thực phẩm và đạt tiêu chuẩn xuất khẩu.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Chúng tôi luôn đặt uy tín và chất lượng lên hàng đầu, xây dựng mối quan hệ hợp tác bền vững với ngư dân địa phương, 
              đồng thời đầu tư vào công nghệ chế biến hiện đại để tăng giá trị sản phẩm từ đại dương, đảm bảo chất lượng tốt nhất 
              và vẹn nguyên tính tươi thủy sản thủy sản trước khi giao hàng cho khách.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Giá cả cạnh tranh</p>
                  <p className="text-sm text-muted-foreground">Thanh toán nhanh chóng, minh bạch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Ngư dân & Doanh nghiệp</p>
                  <p className="text-sm text-muted-foreground">Đối tác tin cậy của ngư dân</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Quy trình khép kín</p>
                  <p className="text-sm text-muted-foreground">Đảm bảo chất lượng từng khâu</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Xuất khẩu quốc tế</p>
                  <p className="text-sm text-muted-foreground">Sản phẩm đạt tiêu chuẩn cao</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Thủy sản tươi sống chất lượng cao"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
