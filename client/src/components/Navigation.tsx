import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
              <span className="text-white font-bold text-xl">TL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg leading-tight">Thủy Sản Thủy Lam</h1>
              <p className="text-xs text-muted-foreground">Chất lượng - Uy tín - Bền vững</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-home"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-services"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-process"
            >
              Quy trình
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Liên hệ
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" data-testid="button-call">
              <Phone className="h-4 w-4 mr-2" />
              0788 838 954
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
              data-testid="mobile-link-home"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
              data-testid="mobile-link-about"
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
              data-testid="mobile-link-services"
            >
              Dịch vụ
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
              data-testid="mobile-link-process"
            >
              Quy trình
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
              data-testid="mobile-link-contact"
            >
              Liên hệ
            </button>
            <div className="px-4">
              <Button size="sm" className="w-full" data-testid="mobile-button-call">
                <Phone className="h-4 w-4 mr-2" />
                0788 838 954
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
