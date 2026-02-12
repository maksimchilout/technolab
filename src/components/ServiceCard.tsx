import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  price?: string;
  duration?: string;
  slug?: string;
  className?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  duration,
  slug,
  className = '',
}: ServiceCardProps) => {
  return (
    <div className={`service-card group flex flex-col h-full ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {features && features.length > 0 && (
        <ul className="space-y-2 flex-1 mb-[20px]">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0 transition-colors duration-300 group-hover:bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {!(features && features.length > 0) && (price || duration || slug) && <div className="flex-1" />}

      {(slug || price || duration) && (
        <div className="pt-3 mt-auto border-t border-primary/20 transition-colors duration-300 group-hover:border-primary/40 space-y-3">
          {slug && (
            <Button variant="outline" size="sm" className="glass-card w-full group/btn" asChild>
              <Link href={`/services/${slug}`}>
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          )}
          {(price || duration) && (
            <div className="flex flex-wrap gap-4">
              {price && (
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Стоимость</span>
                  <span className="text-primary font-semibold">{price}</span>
                </div>
              )}
              {duration && (
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Сроки</span>
                  <span className="font-medium">{duration}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
