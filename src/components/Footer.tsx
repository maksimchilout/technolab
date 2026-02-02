import { Link } from 'react-router-dom';
import { Mail, Phone, Send } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Лендинги', href: '/services#landing' },
    { name: 'Корпоративные сайты', href: '/services#corporate' },
    { name: 'Интернет-магазины', href: '/services#ecommerce' },
    { name: 'SEO-продвижение', href: '/services#seo' },
  ],
  company: [
    { name: 'О компании', href: '/#about' },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Контакты', href: '/contacts' },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-radial">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                TECHNO<span className="text-primary">LAB</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              IT-компания полного цикла. Создаём цифровые продукты, которые работают как инструмент роста и продаж.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/technolab_support"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href="mailto:info@technolab.ru"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+7XXXXXXXXXX"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@technolab.ru" className="hover:text-foreground transition-colors">
                  info@technolab.ru
                </a>
              </li>
              <li>
                <a href="tel:+7XXXXXXXXXX" className="hover:text-foreground transition-colors">
                  +7 (XXX) XXX-XX-XX
                </a>
              </li>
              <li>Пн–Пт: 10:00–19:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 TechnoLab. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/offer" className="hover:text-foreground transition-colors">
              Оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
