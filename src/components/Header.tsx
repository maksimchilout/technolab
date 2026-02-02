import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Контакты', href: '/contacts' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card mx-4 mt-4 md:mx-6 lg:mx-8">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                TECHNO<span className="text-primary">LAB</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link text-sm font-medium ${
                    location.pathname === item.href ? 'text-foreground active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Button className="btn-glow" asChild>
                <Link to="/contacts">Заказать проект</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium ${
                      location.pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="btn-glow mt-2 w-full" asChild>
                  <Link to="/contacts" onClick={() => setIsOpen(false)}>
                    Заказать проект
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
