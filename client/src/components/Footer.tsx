import { Link } from "wouter";
import { Facebook, MessageCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <motion.img
                src={logo}
                alt="Thủy Lam Logo"
                className="h-24 w-24 object-contain"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              />
              <div>
                <h3 className="font-heading font-bold text-lg leading-tight">Thủy Sản Thùy Lam</h3>
                <p className="text-xs text-muted-foreground">Chất lượng - Uy tín</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Công ty TNHH Chế Biến Thủy Sản Thủy Lam - Đơn vị chuyên thu mua và chế biến cá bò tươi chất lượng cao.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-home">
                    Trang chủ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dich-vu">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-services">
                    Dịch vụ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lien-he">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">
                    Liên hệ
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Thu mua cá bò tươi</li>
              <li className="text-sm text-muted-foreground">Chế biến thủy sản</li>
              <li className="text-sm text-muted-foreground">Giao dịch cá bò</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0788838954" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  0798838994
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hotro@thuylam.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ctytnhhthuysanthuylam@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <a 
                  href="#" 
                  className="h-8 w-8 rounded-md bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  data-testid="footer-facebook"
                >
                  <Facebook className="h-4 w-4 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="h-8 w-8 rounded-md bg-chart-2/10 hover:bg-chart-2/20 flex items-center justify-center transition-colors"
                  data-testid="footer-zalo"
                >
                  <MessageCircle className="h-4 w-4 text-chart-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Công ty TNHH Chế Biến Thủy Sản Thủy Lam. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
