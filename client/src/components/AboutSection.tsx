import { CheckCircle } from "lucide-react";
import aboutImage from "@assets/Screenshot 2025-10-07 204915.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariant}>
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

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" variants={itemVariant}>
              <motion.div className="flex items-start gap-3" variants={itemVariant}>
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Giá cả cạnh tranh</p>
                  <p className="text-sm text-muted-foreground">Thanh toán nhanh chóng, minh bạch</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariant}>
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Ngư dân & Doanh nghiệp</p>
                  <p className="text-sm text-muted-foreground">Đối tác tin cậy của ngư dân</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariant}>
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Quy trình khép kín</p>
                  <p className="text-sm text-muted-foreground">Đảm bảo chất lượng từng khâu</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" variants={itemVariant}>
                <CheckCircle className="h-6 w-6 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Thị Trường Trong Nước </p>
                  <p className="text-sm text-muted-foreground">Sản phẩm chất lượng</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="relative hidden lg:block order-last" variants={itemVariant} whileHover={{ scale: 1.01 }} transition={{ duration: 0.25 }}>
            <motion.div className="aspect-[3/4] w-80 mx-auto rounded-2xl overflow-hidden shadow-lg">
              <motion.img
                src={aboutImage}
                alt="Thủy sản tươi sống chất lượng cao"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>

            {/* animated ornament behind the image (floating SVG) */}
            <motion.div
              aria-hidden
              initial={{ y: 0, rotate: 0, opacity: 0 }}
              animate={{ y: [0, -8, 0], rotate: [0, 6, -6, 0], opacity: [0, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 -z-20 hidden lg:block"
            >
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.18)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.08)" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="160" height="160" rx="32" fill="url(#g1)" />
                <circle cx="40" cy="40" r="20" fill="rgba(99,102,241,0.18)" />
                <circle cx="120" cy="80" r="12" fill="rgba(59,130,246,0.12)" />
                <circle cx="80" cy="120" r="8" fill="rgba(16,185,129,0.08)" />
              </svg>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
