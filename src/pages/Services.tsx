import { Layout } from '@/components/Layout';
import { ServiceCard } from '@/components/ServiceCard';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
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
  FileSearch,
  Palette,
  Code,
  TestTube,
  Rocket,
  Wrench,
} from 'lucide-react';

const services = [
  {
    icon: LayoutIcon,
    title: 'Лендинг (Landing Page)',
    description: 'Одностраничный сайт с высокой конверсией для продвижения продукта или услуги',
    features: [
      'Высокая конверсия',
      'Быстрый запуск',
      'Адаптивный дизайн',
      'SEO-оптимизация',
    ],
    price: 'от 600 Br',
    duration: '4–14 дней',
  },
  {
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
    price: 'от 900 Br',
    duration: 'от 2 недель',
  },
  {
    icon: Building2,
    title: 'Корпоративный сайт',
    description: 'Полноценное представление компании в интернете',
    features: [
      'Усиление бренда и доверия',
      'SEO-оптимизация под поисковые системы',
      'Удобная система управления контентом',
      'Интеграция с внешними сервисами',
    ],
    price: 'от 1400 Br',
    duration: '4–8 недель',
  },
  {
    icon: FolderOpen,
    title: 'Сайт-каталог',
    description: 'Структурированный каталог товаров или услуг с удобной навигацией',
    features: [
      'Фильтры и удобная навигация',
      'Форма заявки и сбор лидов',
      'Адаптивный дизайн',
      'SEO-подготовка',
    ],
    price: 'от 1400 Br',
    duration: '3–6 недель',
  },
  {
    icon: ShoppingCart,
    title: 'Интернет-магазин',
    description: 'Полнофункциональный онлайн-магазин с системой заказов и оплаты',
    features: [
      'Каталог товаров',
      'Корзина и онлайн-оплата',
      'Интеграция с CRM и 1C',
      'Личный кабинет покупателя',
    ],
    price: 'от 1800 Br',
    duration: '6–12 недель',
  },
  {
    icon: Paintbrush,
    title: 'Редизайн сайта',
    description: 'Обновление дизайна существующего сайта с сохранением позиций',
    features: [
      'Аудит текущего сайта',
      'Новый современный дизайн',
      'Адаптивная вёрстка',
      'Сохранение SEO-позиций',
    ],
    price: 'от 1200 Br',
    duration: 'индивидуально',
  },
  {
    icon: Search,
    title: 'SEO-продвижение',
    description: 'Комплексное продвижение сайта в поисковых системах',
    features: [
      'Технический аудит',
      'Сбор семантического ядра',
      'Внутренняя и внешняя оптимизация',
      'Ежемесячная отчётность',
    ],
    price: 'от 600 Br/мес',
    duration: 'от 3 месяцев',
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка',
    description: 'Комплексное обслуживание и мониторинг вашего сайта',
    features: [
      'Мониторинг доступности 24/7',
      'Резервное копирование',
      'Обновления безопасности',
      'Исправление ошибок',
    ],
    price: 'от 600 Br/мес',
    duration: 'ежемесячно',
  },
  {
    icon: Cog,
    title: 'Автоматизация и веб-приложения',
    description: 'Индивидуальные решения для автоматизации бизнес-процессов',
    features: [
      'Парсеры данных',
      'Telegram-боты',
      'Интеграция с Google Sheets и CRM',
      'AI-ассистенты',
    ],
    price: 'от 500 Br',
    duration: 'индивидуально',
  },
];

const processSteps = [
  { icon: FileSearch, title: 'Анализ', description: 'Изучаем бизнес и задачи' },
  { icon: LayoutIcon, title: 'Проектирование', description: 'Создаём структуру' },
  { icon: Palette, title: 'Дизайн', description: 'Разрабатываем макеты' },
  { icon: Code, title: 'Разработка', description: 'Программируем функционал' },
  { icon: TestTube, title: 'Тестирование', description: 'Проверяем качество' },
  { icon: Rocket, title: 'Запуск', description: 'Публикуем проект' },
  { icon: Wrench, title: 'Поддержка', description: 'Сопровождаем работу' },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium mb-4 block">
              Услуги
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наши услуги:{' '}
              <span className="text-gradient">от разработки до продвижения</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Комплексные IT-решения для бизнеса. Создаём инструменты, которые
              приносят прибыль.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="glass-card p-4 mb-3 mx-auto w-fit">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs text-primary font-medium mb-1">
                    Этап {index + 1}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Модели <span className="text-gradient">ценообразования</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="floating-card p-8">
              <h3 className="text-xl font-bold mb-4">Fixed Price</h3>
              <p className="text-muted-foreground mb-6">
                Фиксированная стоимость проекта. Идеально для проектов с чётким ТЗ и
                понятным объёмом работ.
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
                Оплата по факту выполненных работ. Подходит для проектов с гибкими
                требованиями.
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

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection
        title="Нужна консультация?"
        description="Обсудим ваш проект и подберём оптимальное решение"
        buttonText="Получить консультацию"
      />
    </Layout>
  );
};

export default Services;
