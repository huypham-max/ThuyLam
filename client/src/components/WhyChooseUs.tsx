import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, Handshake, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Shield,
    title: "Chất lượng đảm bảo",
    description: "Kiểm tra chất lượng nghiêm ngặt từng khâu, từ nguyên liệu đến thành phẩm.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Clock,
    title: "Giao hàng nhanh chóng",
    description: "Hệ thống xe lạnh chuyên dụng, giao trong 24h tại Miền Nam.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Giá cả cạnh tranh",
    description: "Thu mua trực tiếp từ ngư dân, không trung gian, giá tốt nhất thị trường.",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: Handshake,
    title: "Đối tác tin cậy",
    description: "Hơn 15 năm kinh nghiệm, đồng hành cùng hơn 50 khách hàng lớn nhỏ.",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Award,
    title: "Đạt chuẩn chất lượng",
    description: "Sản phẩm chất lượng cho từng đơn hàng.",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    icon: Globe,
    title: "Nguồn gốc rõ ràng",
    description: "Truy xuất nguồn gốc 100%, từ vùng biển Việt Nam uy tín nhất.",
    color: "from-teal-500 to-cyan-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6 origin-left"
          />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Với hơn 15 năm kinh nghiệm trong ngành chế biến thủy sản, chúng tôi cam kết mang đến giá trị tốt nhất cho khách hàng
          </p>
        </motion.div>

        {/* Grid lý do */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
              data-testid={`reason-${index}`}
            >
              <Card className="h-full border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                <CardContent className="p-7 space-y-5 relative">
                  {/* Nền gradient mờ khi hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.color}`} />
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative z-10 h-16 w-16 rounded-2xl bg-gradient-to-br ${reason.color} p-3 flex items-center justify-center shadow-xl ring-4 ring-white/20`}
                  >
                    <reason.icon className="h-9 w-9 text-white" strokeWidth={2.3} />
                  </motion.div>

                  {/* Nội dung */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hiệu ứng sáng nhẹ dưới đáy */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}