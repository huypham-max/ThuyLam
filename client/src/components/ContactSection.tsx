import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Gửi Tin Nhắn</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Họ và Tên *
                      </label>
                      <Input
                        id="name"
                        placeholder="Nhập họ và tên"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Nhập email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Số Điện Thoại *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      data-testid="input-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Tin Nhắn *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Nhập tin nhắn của bạn"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" data-testid="button-submit">
                    Gửi Tin Nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Thông Tin Liên Hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3" data-testid="contact-phone">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Gọi ngay</p>
                    <a href="tel:0788838954" className="text-muted-foreground hover:text-primary transition-colors">
                      0788 838 954
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-zalo">
                  <div className="h-10 w-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-chart-2" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Zalo</p>
                    <a href="#" className="text-muted-foreground hover:text-chart-2 transition-colors">
                      Chat với chúng tôi
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-facebook">
                  <div className="h-10 w-10 rounded-lg bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                    <Facebook className="h-5 w-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Facebook</p>
                    <a href="#" className="text-muted-foreground hover:text-chart-3 transition-colors">
                      Cá Bò Phuoc Tinh
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-email">
                  <div className="h-10 w-10 rounded-lg bg-chart-4/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-chart-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:hotro@thuylam.com" className="text-muted-foreground hover:text-chart-4 transition-colors">
                      hotro@thuylam.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-address">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Địa chỉ</p>
                    <p className="text-muted-foreground">
                      Đường ABC, Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
