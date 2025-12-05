import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Scissors, CookingPot, Package, TruckIcon } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    icon: Anchor,
    title: "Thu mua nguyên liệu",
    description: "Chọn lọc cá bò tươi sống từ nguồn gốc uy tín, thu mua trực tiếp ngay sau khi cập bến.",
    testId: "step-purchase"
  },
  {
    number: 2,
    icon: Scissors,
    title: "Sơ chế",
    description: "Làm sạch, loại bỏ nội tạng và sơ chế nguyên liệu theo tiêu chuẩn vệ sinh, giữ nguyên độ tươi ngon.",
    testId: "step-preparation"
  },
  {
    number: 3,
    icon: CookingPot,
    title: "Chế biến",
    description: "Sử dụng công nghệ chế biến hiện đại, quy trình khép kín đảm bảo chất lượng sản phẩm.",
    testId: "step-processing"
  },
  {
    number: 4,
    icon: Package,
    title: "Đóng gói",
    description: "Đóng gói sản phẩm cẩn thận theo tiêu chuẩn xuất khẩu, đảm bảo bao bì nguyên vẹn.",
    testId: "step-packaging"
  },
  {
    number: 5,
    icon: TruckIcon,
    title: "Giao hàng",
    description: "Vận chuyển nhanh chóng với xe lạnh chuyên dụng, sản phẩm đến tay khách hàng đúng hạn.",
    testId: "step-delivery"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Quy trình sản xuất
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Quy trình khép kín từ thu mua đến giao hàng, đảm bảo chất lượng tốt nhất
          </p>
        </motion.div>

        {/* Các bước */}
        <div className="relative">
          {/* Đường nối (chỉ hiện trên desktop) */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-1 -z-10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full w-full origin-left bg-gradient-to-r from-primary via-chart-2 to-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="relative"
                data-testid={step.testId}
              >
                <Card className="hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border border-border/50">
                  <CardContent className="p-6 pt-8 flex flex-col items-center text-center space-y-5">
                    {/* Icon + Số thứ tự */}
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg"
                      >
                        <step.icon className="h-9 w-9 text-white" strokeWidth={2} />
                      </motion.div>

                      {/* Số thứ tự nhỏ xinh */}
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                        className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold shadow-md"
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}