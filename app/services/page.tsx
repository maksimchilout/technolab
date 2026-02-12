import type { Metadata } from 'next';
import { ServiceCard } from '@/components/ServiceCard';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import {
  Globe,
  Layout as LayoutIcon,
  Building2,
  FolderOpen,
  ShoppingCart,
  Paintbrush,
  Search,
  Headphones,
  Cog,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Услуги',
  description:
    'Разработка сайтов, SEO-продвижение, техническая поддержка и автоматизация. Комплексные IT-решения для бизнеса.',
};

const services = [
  {
    slug: 'landing',
    icon: LayoutIcon,
    title: 'Лендинг (Landing Page)',
    description: 'Одностраничный сайт с высокой конверсией для продвижения продукта или услуги',
    features: ['Высокая конверсия', 'Быстрый запуск', 'Адаптивный дизайн', 'SEO-оптимизация'],
    price: 'от 800 Br',
    duration: '4–14 дней',
  },
  {
    slug: 'vizitka',
    icon: Globe,
    title: 'Сайт-визитка',
    description: 'Профессиональное онлайн-представительство вашей компании',
    features: [
      'Продуманная структура 5–7 страниц',
      'Высокая конверсия и понятная навигация',
      'Адаптивный дизайн',
      'SEO-оптимизация',
      'Интеграция с CRM и аналитикой',
    ],
    price: 'от 1200 Br',
    duration: 'от 2 недель',
  },
  {
    slug: 'corporate',
    icon: Building2,
    title: 'Корпоративный сайт',
    description: 'Полноценное представление компании в интернете',
    features: [
      'Усиление бренда и доверия',
      'SEO-оптимизация под поисковые системы',
      'Удобная система управления контентом',
      'Интеграция с внешними сервисами',
    ],
    price: 'от 2200 Br',
    duration: '4–8 недель',
  },
  {
    slug: 'catalog',
    icon: FolderOpen,
    title: 'Сайт-каталог',
    description: 'Структурированный каталог товаров или услуг с удобной навигацией',
    features: ['Фильтры и удобная навигация', 'Форма заявки и сбор лидов', 'Адаптивный дизайн', 'SEO-подготовка'],
    price: 'от 2000 Br',
    duration: '3–6 недель',
  },
  {
    slug: 'ecommerce',
    icon: ShoppingCart,
    title: 'Интернет-магазин',
    description: 'Полнофункциональный онлайн-магазин с системой заказов и оплаты',
    features: ['Каталог товаров', 'Корзина и онлайн-оплата', 'Интеграция с CRM и 1C', 'Личный кабинет покупателя'],
    price: 'от 2600 Br',
    duration: '6–12 недель',
  },
  {
    slug: 'redesign',
    icon: Paintbrush,
    title: 'Редизайн сайта',
    description: 'Обновление дизайна существующего сайта с сохранением позиций',
    features: ['Аудит текущего сайта', 'Новый современный дизайн', 'Адаптивная вёрстка', 'Сохранение SEO-позиций'],
    price: 'от 1200 Br',
    duration: 'индивидуально',
  },
  {
    slug: 'seo',
    icon: Search,
    title: 'SEO-продвижение',
    description: 'Комплексное продвижение сайта в поисковых системах',
    features: ['Технический аудит', 'Сбор семантического ядра', 'Внутренняя и внешняя оптимизация', 'Ежемесячная отчётность'],
    price: 'от 600 Br/мес',
    duration: 'от 3 месяцев',
  },
  {
    slug: 'support',
    icon: Headphones,
    title: 'Техническая поддержка',
    description: 'Комплексное обслуживание и мониторинг вашего сайта',
    features: ['Мониторинг доступности 24/7', 'Резервное копирование', 'Обновления безопасности', 'Исправление ошибок'],
    price: 'от 600 Br/мес',
    duration: 'ежемесячно',
  },
  {
    slug: 'automation',
    icon: Cog,
    title: 'Автоматизация и веб-приложения',
    description: 'Индивидуальные решения для автоматизации бизнес-процессов',
    features: ['Парсеры данных', 'Telegram-боты', 'Интеграция с Google Sheets и CRM', 'AI-ассистенты'],
    price: 'от 500 Br',
    duration: 'индивидуально',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium mb-4 block">Услуги</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наши услуги:{' '}
              <span className="text-gradient">от разработки до продвижения</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Комплексные IT-решения для бизнеса. Создаём инструменты, которые приносят прибыль.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} id={service.slug} className="scroll-mt-28">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-radial">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Процесс <span className="text-gradient">работы</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный процесс от идеи до запуска
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Модели <span className="text-gradient">ценообразования</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="floating-card p-8">
              <h3 className="text-xl font-bold mb-4">Fixed Price</h3>
              <p className="text-muted-foreground mb-6">
                Фиксированная стоимость проекта. Идеально для проектов с чётким ТЗ и понятным объёмом работ.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Фиксированный бюджет
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Чёткие сроки
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Прозрачные условия
                </li>
              </ul>
            </div>

            <div className="floating-card p-8">
              <h3 className="text-xl font-bold mb-4">Time & Material</h3>
              <p className="text-muted-foreground mb-6">
                Оплата по факту выполненных работ. Подходит для проектов с гибкими требованиями.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Гибкость изменений
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Почасовая ставка
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Регулярная отчётность
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ compact />
      <CTASection
        title="Нужна консультация?"
        description="Обсудим ваш проект и подберём оптимальное решение"
        buttonText="Получить консультацию"
        compactTop
      />
    </>
  );
}
