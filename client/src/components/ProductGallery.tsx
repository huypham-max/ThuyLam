import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import image1 from "@assets/stock_images/cá tươi.jpg";
import image2 from "@assets/Screenshot 2025-10-07 204915.png";
import image3 from "@assets/stock_images/ảnh làm.jpg";
import image4 from "@assets/stock_images/cá thành phẩm.jpg";
import image5 from "@assets/stock_images/xe chở.jpg";

const galleryItems = [
  {
    image: image1,
    title: "Cá bò nguyên liệu",
    description: "Nguồn cá bò tươi được cấp đông ngay sau khi đánh bắt",
  },
  {
    image: image2,
    title: "Sơ chế cá bò",
    description: "Cá được phân loại và bảo quản bằng đá lạnh để giữ độ tươi",
  },
  {
    image: image3,
    title: "Đóng thùng thành phẩm",
    description: "Quy trình đóng thùng cẩn thận, đảm bảo chất lượng",
  },
  {
    image: image4,
    title: "Cá bò thành phẩm",
    description: "Cá bò đã được làm sạch, cấp đông và đóng gói đạt chuẩn",
  },
  {
    image: image5,
    title: "Vận chuyển đông lạnh",
    description: "Xe lạnh chuyên dụng đảm bảo sản phẩm luôn được bảo quản tốt",
  },
];

export default function ProductGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Hình Ảnh Hoạt Động
          </h2>
          <div className="h-1 w-28 bg-gradient-to-r from-primary to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cùng nhìn lại hành trình từ biển cả đến bàn ăn của sản phẩm cá bò Thủy Lam
          </p>
        </motion.div>

        {/* Gallery */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-7"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic mượt hơn
              }}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white border-0">
                <CardContent className="p-0 relative h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                  </div>

                  {/* Overlay + Text - Siêu đẹp, dễ đọc */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-5 lg:p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 tracking-tight drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-white/90 leading-relaxed drop-shadow-md line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hiệu ứng viền sáng nhẹ khi hover (tùy chọn thêm sang) */}
                  <div className="absolute inset-0 ring-4 ring-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}