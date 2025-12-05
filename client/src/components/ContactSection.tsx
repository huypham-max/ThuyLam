import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Gửi thành công!",
          description: "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Gửi thất bại",
          description: data.message || "Đã có lỗi xảy ra, vui lòng thử lại.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi kết nối",
        description: "Không thể gửi tin nhắn. Vui lòng kiểm tra mạng.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hiệu ứng nền mờ nhẹ */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" />
        </div>

        {/* Tiêu đề với hiệu ứng xuất hiện */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Đừng ngần ngại để lại lời nhắn – chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Form - hiệu ứng stagger */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Gửi Tin Nhắn Ngay
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {["name", "email"].map((field, idx) => (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="space-y-2"
                      >
                        <label className="text-sm font-semibold text-foreground">
                          {field === "name" ? "Họ và Tên" : "Email"} <span className="text-primary">*</span>
                        </label>
                        <Input
                          type={field === "email" ? "email" : "text"}
                          placeholder={field === "name" ? "Nguyễn Văn A" : "you@example.com"}
                          value={formData[field as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          required
                          className="h-12 border-muted focus:border-primary transition-all duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold">Số Điện Thoại <span className="text-primary">*</span></label>
                    <Input
                      type="tel"
                      placeholder="0388 888 888"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold">Tin Nhắn <span className="text-primary">*</span></label>
                    <Textarea
                      placeholder="Bạn cần hỗ trợ gì? Hãy cho chúng tôi biết chi tiết nhé..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto px-10 bg-gradient-to-r from-primary to-chart-2 hover:from-chart-2 hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105"
                      disabled={loading}
                    >
                      {loading ? (
                        <>Đang gửi...</>
                      ) : (
                        <>
                          Gửi Tin Nhắn
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Thông tin liên hệ - hiệu ứng từ bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-chart-2/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Liên Hệ Nhanh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  { icon: Phone, label: "Hotline", value: "0788 838 954", href: "tel:0798838994", color: "text-primary" },
                  { icon: MessageCircle, label: "Zalo", value: "Chat ngay", href: "https://zalo.me/0798838994", color: "text-chart-2" },
                  { icon: Mail, label: "Email", value: "ctytnhhthuysanthuylam@gmail.com", href: "mailto:ctytnhhthuysanthuylam@gmail.com", color: "text-chart-4" },
                  { icon: MapPin, label: "Địa chỉ", value: "Ấp Phước Thái, xã Long Hải, thành phố Hồ Chí Minh", href: "#", color: "text-primary", noLink: true },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <div className={`h-12 w-12 rounded-full ${item.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform transition`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.noLink ? (
                        <p className="text-muted-foreground text-sm mt-1">{item.value}</p>
                      ) : (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}