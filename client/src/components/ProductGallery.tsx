import { Card, CardContent } from "@/components/ui/card";
import processingImage from "@assets/stock_images/modern_seafood_proce_975f8cbe.jpg";
import workersImage from "@assets/stock_images/workers_in_food_proc_6e8c6ab5.jpg";
import packagingImage from "@assets/stock_images/fresh_fish_packaging_9c694083.jpg";
import seafoodImage from "@assets/stock_images/fresh_seafood_on_ice_09816a60.jpg";

export default function ProductGallery() {
  const galleryItems = [
    {
      image: seafoodImage,
      title: "Cá bò tươi sống",
      description: "Sản phẩm tươi ngon, chất lượng cao"
    },
    {
      image: processingImage,
      title: "Nhà máy chế biến",
      description: "Công nghệ hiện đại, đạt tiêu chuẩn"
    },
    {
      image: workersImage,
      title: "Đội ngũ chuyên nghiệp",
      description: "Công nhân lành nghề, tay nghề cao"
    },
    {
      image: packagingImage,
      title: "Đóng gói chuẩn",
      description: "Bao bì đạt chuẩn xuất khẩu"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Hình Ảnh Hoạt Động
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Cùng nhìn lại hành trình từ biển cả đến bàn ăn của sản phẩm cá bò Thủy Lam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover-elevate transition-all duration-300" data-testid={`gallery-item-${index}`}>
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
