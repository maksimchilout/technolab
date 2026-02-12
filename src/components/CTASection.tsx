import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  /** Меньшие вертикальные отступы (для страниц услуг и т.п.) */
  compact?: boolean;
  /** Меньший верхний отступ (например, когда блок идёт сразу после FAQ на главной) */
  compactTop?: boolean;
}

export const CTASection = ({
  title = 'Готовы начать проект?',
  description = 'Оставьте заявку, и мы свяжемся с вами для обсуждения деталей',
  buttonText = 'Заказать консультацию',
  buttonLink = '/contacts',
  compact = false,
  compactTop = false,
}: CTASectionProps) => {
  const sectionClass = compact
    ? 'py-8 md:py-10'
    : compactTop
      ? 'pt-8 md:pt-10 pb-20 md:pb-28 lg:pb-32'
      : 'section-padding';
  return (
    <section className={sectionClass}>
      <div className="container-custom">
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-glow">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <Button size="lg" className="btn-glow group" asChild>
              <Link href={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
