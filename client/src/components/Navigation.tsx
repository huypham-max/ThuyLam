import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@assets/logo.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <motion.img
                src={logo}
                alt="Thủy Lam Logo"
                className="h-16 w-16 object-contain"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              />
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-lg leading-tight">Thủy Sản Thủy Lam</h1>
                <p className="text-xs text-muted-foreground">Chất lượng - Uy tín - Bền vững</p>
              </div>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a
                className={`text-sm font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                data-testid="link-home"
              >
                Trang chủ
              </a>
            </Link>
            <Link href="/dich-vu">
              <a
                className={`text-sm font-medium transition-colors ${
                  isActive("/dich-vu") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                data-testid="link-services"
              >
                Dịch vụ
              </a>
            </Link>
            <Link href="/lien-he">
              <a
                className={`text-sm font-medium transition-colors ${
                  isActive("/lien-he") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                data-testid="link-contact"
              >
                Liên hệ
              </a>
            </Link>
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
            <Link href="/">
              <a
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                  isActive("/") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-home"
              >
                Trang chủ
              </a>
            </Link>
            <Link href="/dich-vu">
              <a
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                  isActive("/dich-vu") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-services"
              >
                Dịch vụ
              </a>
            </Link>
            <Link href="/lien-he">
              <a
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md ${
                  isActive("/lien-he") ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-link-contact"
              >
                Liên hệ
              </a>
            </Link>
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
