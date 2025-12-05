import { TrendingUp, Users, Package, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Counter component mượt mà
const AnimatedCounter = ({ from, to, suffix = "", duration = 2.5 }: { from?: number; to: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from ?? 0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor((from ?? 0) + (to - (from ?? 0)) * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, to, from, duration]);

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function Statistics() {
  const stats = [
    {
      icon: TrendingUp,
      number: 15,
      suffix: "+",
      label: "Năm kinh nghiệm",
      description: "Trong ngành chế biến thủy sản",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Users,
      number: 50,
      suffix: "+",
      label: "Khách hàng",
      description: "Tin tưởng và đồng hành lâu dài",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Package,
      number: 50,
      suffix: "",
      label: "Tấn/tháng",
      description: "Công suất chế biến tối ưu",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Globe,
      number: 100,
      suffix: "%",
      label: "Thị trường nội địa",
      description: "Phân phối rộng khắp Việt Nam",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-primary via-primary/95 to-cyan-900 relative overflow-hidden">
      {/* Dynamic wave background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="url(#waveGradient)"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,170.7,1344,181.3,1392,186.7L1440,192L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              values="
                M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,170.7,1344,181.3,1392,186.7L1440,192L1440,320L0,320Z;
                M0,192L48,160C96,128,192,64,288,64C384,64,480,128,576,170.7C672,213.3,768,234.7,864,224C960,213.3,1056,170.7,1152,160C1248,149.3,1344,170.7,1392,181.3L1440,192L1440,320L0,320Z;
                M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,149.3C1248,170.7,1344,181.3,1392,186.7L1440,192L1440,320L0,320Z
              "
              dur="18s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
            >
              {/* Glow card background */}
              <div className="absolute inset-0 -z-10 scale-0 group-hover:scale-110 transition-transform duration-700">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} blur-3xl opacity-40 group-hover:opacity-70`} />
              </div>

              {/* Icon container */}
              <motion.div
                className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
              </motion.div>

              {/* Number + Counter */}
              <div className="space-y-2">
                <p className="text-5xl md:text-6xl font-black font-accent text-white tracking-tight">
                  {stat.suffix === "%" ? (
                    <AnimatedCounter from={0} to={stat.number} suffix="%" duration={2.8} />
                  ) : stat.number >= 50 ? (
                    <AnimatedCounter from={0} to={stat.number} suffix={stat.suffix} duration={3} />
                  ) : (
                    <AnimatedCounter from={0} to={stat.number} suffix={stat.suffix} duration={2.5} />
                  )}
                </p>

                <p className="text-xl md:text-2xl font-heading font-bold text-white/95">
                  {stat.label}
                </p>

                <p className="text-sm md:text-base text-white/70 max-w-[180px] mx-auto leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Bottom shine effect */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full blur-xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
