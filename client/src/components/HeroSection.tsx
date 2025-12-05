import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, Users, Leaf } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroImage from "@assets/stock_images/ocean_waves_aerial_v_0f2df5c9.jpg";

// Counter component cho số liệu
const Counter = ({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;
    const start = from;

    const timer = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
        setCount(Math.floor(start + (to - start) * easeOutQuart));
        requestAnimationFrame(timer);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(timer);
  }, [isInView, from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  // Typewriter effect cho tiêu đề
  const title = "Cty TNHH Chế Biến Thủy Sản Thùy Lam";
  const subtitle = "Nguồn gốc Phuoc Tinh – Cá bò tươi sống, đảm bảo chất lượng";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: yBg,
        }}
      />

      {/* Subtle wave overlay */}
      <div className="absolute inset-0 z-5 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#0891b2"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              values="
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z;
                M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,149C672,170,768,181,864,165C960,149,1056,107,1152,96C1248,85,1344,107,1392,117L1440,128L1440,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z
              "
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-cyan-600/90 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Title - Typewriter + Glow */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                className="inline-block drop-shadow-2xl"
                style={{
                  textShadow: "0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(59,130,246,0.4)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {subtitle.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Link href="/lien-he">
              <Button
                size="lg"
                className="group relative px-10 py-7 text-lg font-semibold bg-white text-primary hover:bg-white/95 shadow-2xl overflow-hidden transition-all duration-300"
                data-testid="button-contact-hero"
              >
                <span className="relative z-10 flex items-center">
                  Liên hệ ngay
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-50 transition-opacity" />
              </Button>
            </Link>

            <Link href="/dich-vu">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-7 text-lg font-medium border-2 border-white/50 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white transition-all duration-300"
                data-testid="button-services-hero"
              >
                Tìm hiểu thêm
              </Button>
            </Link>
          </motion.div>

          {/* Stats with Counter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto">
            {[
              { icon: Award, number: 15, suffix: "+", label: "Năm kinh nghiệm" },
              { icon: Users, number: 50, suffix: "+", label: "Khách hàng tin tưởng" },
              { icon: Leaf, number: 100, suffix: "%", label: "Chất lượng đảm bảo" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-cyan-300 group-hover:text-white transition-colors" />
                
                <p className="text-5xl font-bold font-accent text-white mb-2">
                  <Counter from={0} to={stat.number} />{stat.suffix}
                </p>
                
                <p className="text-white/80 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronRight className="h-8 w-8 rotate-90" />
      </motion.div>
    </section>
  );
}