import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Factory, Truck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: ShoppingCart,
    title: "Thu mua cá bò tươi",
    description: "Chúng tôi thu mua cá bò tươi trực tiếp từ ngư dân tại vùng biển Phước Tỉnh – Bà Rịa và các nơi khác tại Miền Nam. Mỗi mẻ cá được thu mua ngay sau khi cập bến, đảm bảo độ tươi ngon, thịt săn chắc và giá cả hợp lý. Thanh toán nhanh chóng, minh bạch cho ngư dân.",
    testId: "card-service-purchase"
  },
  {
    icon: Factory,
    title: "Chế biến thủy sản",
    description: "Quy trình chế biến khép kín với công nghệ hiện đại. Từ khâu sơ chế, làm sạch, chế biến đến đóng gói, chúng tôi tuân thủ các tiêu chuẩn chất lượng . Đội ngũ công nhân lành nghề đảm bảo sản phẩm đạt tiêu chuẩn xuất khẩu.",
    testId: "card-service-processing"
  },
  {
    icon: Truck,
    title: "Giao dịch Cá bò fillet",
    description: "Chuyên cung cấp sản phẩm cá bò Cá bò fillet chất lượng cao cho các doanh nghiệp hải sản, nhà hàng và đối tác xuất khẩu. Vận chuyển nhanh chóng với hệ thống xe lạnh chuyên dụng, đảm bảo sản phẩm giữ nguyên độ tươi ngon khi đến tay khách hàng.",
    testId: "card-service-trading"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Sản phẩm & Dịch vụ
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 w-28 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6 origin-left"
          />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Chúng tôi chuyên thu mua cá bò tươi trực tiếp từ ngư dân tại vùng biển Phước Tỉnh – Bà Rịa. 
            Mỗi mẻ cá đặc biệt được thu mua ngay sau khi cập bến — tươi sống, chất lượng cao cấp.
          </p>
        </motion.div>

        {/* Grid dịch vụ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
              data-testid={service.testId}
            >
              <Card className="h-full border border-border/60 bg-background/95 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <CardHeader className="pb-4">
                  {/* Icon với hiệu ứng đẹp */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-chart-2 p-3 flex items-center justify-center shadow-xl ring-4 ring-white/20 mb-5 group-hover:ring-primary/40 transition-all"
                  >
                    <service.icon className="h-9 w-9 text-white" strokeWidth={2.3} />
                  </motion.div>

                  <CardTitle className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Dải sáng nhỏ chạy ngang khi hiện */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.9 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}