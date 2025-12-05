import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
};

const STORAGE_KEY = "thuylam_testimonials";

const DEFAULT_TESTIMONIALS: Testimonial[] = [];

export default function Testimonials() {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Testimonial[]) : DEFAULT_TESTIMONIALS;
    } catch {
      return DEFAULT_TESTIMONIALS;
    }
  });

  const [form, setForm] = useState({
    name: "",
    role: "",
    location: "",
    content: "",
    rating: 5,
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
    } catch {}
  }, [testimonials]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: name === "rating" ? Number(value) : value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.content.trim()) {
      toast({ title: "Thiếu thông tin", description: "Vui lòng nhập tên và nội dung.", variant: "destructive" });
      return;
    }

    const next: Testimonial = {
      name: form.name.trim(),
      role: form.role.trim() || "Khách hàng",
      location: form.location.trim() || "",
      content: form.content.trim(),
      rating: form.rating,
    };

    setTestimonials((s) => [next, ...s]);
    setForm({ name: "", role: "", location: "", content: "", rating: 5 });
    toast({ title: "Cảm ơn", description: "Bình luận của bạn đã được thêm.", variant: "default" });
  }

  function deleteTestimonial(index: number) {
    if (!confirm("Xác nhận xóa bình luận này?")) return;
    setTestimonials((s) => s.filter((_, i) => i !== index));
    toast({ title: "Đã xóa", description: "Bình luận đã được xóa.", variant: "default" });
  }

  function resetAll() {
    if (!confirm("Xác nhận xóa tất cả bình luận?")) return;
    setTestimonials([]);
    toast({ title: "Đã xóa tất cả", description: "Không còn bình luận nào.", variant: "default" });
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4" data-testid="heading-testimonials">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mx-auto mb-4" />
          <p className="text-lg text-muted-foreground" data-testid="text-testimonials-description">
            Sự hài lòng của khách hàng là niềm tự hào của chúng tôi
          </p>
        </div>

        {/* Inline form to add testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-card/50 p-6 rounded-2xl shadow-sm">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Họ và tên" className="p-3 rounded-md bg-background/80 border border-muted text-foreground" />
            <input name="role" value={form.role} onChange={handleChange} placeholder="Chức vụ (tùy chọn)" className="p-3 rounded-md bg-background/80 border border-muted text-foreground" />
            <input name="location" value={form.location} onChange={handleChange} placeholder="Địa điểm (tùy chọn)" className="p-3 rounded-md bg-background/80 border border-muted text-foreground" />
            <select name="rating" value={form.rating} onChange={handleChange} className="p-3 rounded-md bg-background/80 border border-muted text-foreground">
              {[5,4,3,2,1].map((r) => (
                <option key={r} value={r}>{r} sao</option>
              ))}
            </select>

            <textarea name="content" value={form.content} onChange={handleChange} placeholder="Nội dung bình luận" rows={4} className="md:col-span-2 p-3 rounded-md bg-background/80 border border-muted text-foreground resize-none" />

            <div className="md:col-span-2 flex items-center justify-between">
              <button type="button" onClick={resetAll} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-muted text-foreground hover:opacity-90">Xóa tất cả</button>
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white">Gửi bình luận</button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 relative" data-testid={`testimonial-${index}`}>
              <button
                type="button"
                onClick={() => deleteTestimonial(index)}
                aria-label="Xóa bình luận"
                className="absolute top-3 right-3 p-1 rounded-md text-muted hover:bg-muted/10"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20" />

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>

                <div className="pt-4 border-t">
                  <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
