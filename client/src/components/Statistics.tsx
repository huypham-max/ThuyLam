import { TrendingUp, Users, Package, Globe } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: TrendingUp,
      number: "15+",
      label: "Năm kinh nghiệm",
      description: "Trong ngành chế biến thủy sản"
    },
    {
      icon: Users,
      number: "500+",
      label: "Khách hàng",
      description: "Tin tưởng và đồng hành"
    },
    {
      icon: Package,
      number: "50",
      label: "Tấn/tháng",
      description: "Công suất chế biến"
    },
    {
      icon: Globe,
      number: "10+",
      label: "Quốc gia",
      description: "Xuất khẩu sản phẩm"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-chart-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA3IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4" data-testid={`stat-${index}`}>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-4xl md:text-5xl font-bold font-accent text-white">
                  {stat.number}
                </p>
                <p className="text-lg font-heading font-semibold text-white">
                  {stat.label}
                </p>
                <p className="text-sm text-white/80">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
