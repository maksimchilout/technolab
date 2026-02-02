import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  price?: string;
  duration?: string;
  className?: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  price,
  duration,
  className = '',
}: ServiceCardProps) => {
  return (
    <div className={`service-card group ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {(price || duration) && (
        <div className="pt-4 border-t border-border flex flex-wrap gap-4">
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
  );
};
