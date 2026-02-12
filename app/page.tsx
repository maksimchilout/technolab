import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { StatCard } from '@/components/StatCard';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import {
  ArrowRight,
  Globe,
  Search,
  Headphones,
  Cog,
  CheckCircle,
  Shield,
  Clock,
  Users,
} from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const services = [
  {
    icon: Globe,
    title: 'Разработка сайтов',
    description: 'Лендинги, визитки, корпоративные сайты и интернет-магазины под ключ',
  },
  {
    icon: Search,
    title: 'SEO-продвижение',
    description: 'Комплексная оптимизация и вывод в топ поисковых систем',
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка',
    description: 'Мониторинг, обновления, резервное копирование 24/7',
  },
  {
    icon: Cog,
    title: 'Автоматизация',
    description: 'Боты, парсеры, интеграции с CRM и AI-ассистенты',
  },
];

const stats = [
  { value: '100+', label: 'Реализованных проектов' },
  { value: '5 лет', label: 'Опыта работы' },
  { value: '98%', label: 'Клиентов возвращаются' },
  { value: '24/7', label: 'Техническая поддержка' },
];

const principles = [
  {
    icon: Users,
    title: 'Индивидуальный подход',
    description: 'Анализируем задачи бизнеса и предлагаем оптимальные решения',
  },
  {
    icon: CheckCircle,
    title: 'Прозрачность',
    description: 'Понятные этапы работы и регулярная отчётность',
  },
  {
    icon: Clock,
    title: 'Фиксированные сроки',
    description: 'Чёткие дедлайны и стоимость без скрытых платежей',
  },
  {
    icon: Shield,
    title: 'Пожизненная гарантия',
    description: 'Техническая поддержка всех созданных проектов',
  },
];

const whyUs = [
  'Работаем на репутацию',
  'Понятное ценообразование',
  'Полный цикл разработки',
  'Современные технологии',
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-[-6%]"
            style={{ animation: 'hero-bg-move 25s ease-in-out infinite' }}
          >
            <Image
              src={heroBg}
              alt=""
              fill
              className="object-cover opacity-80"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/25 to-background" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Разработка сайтов,{' '}
              <span className="text-gradient">которые приносят результат</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-delay-1">
              Создаём современные IT-решения для бизнеса — от лендингов до сложных
              веб-приложений. Работаем на результат, а не ради галочки.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Button size="lg" className="btn-glow group" asChild>
                <Link href="/contacts">
                  Заказать разработку
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-card" asChild>
                <Link href="/portfolio">Смотреть портфолио</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium mb-4 block">
                О компании
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                IT-компания <span className="text-gradient">полного цикла</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                TechnoLab — это команда профессионалов, которая анализирует бизнес-задачи,
                разрабатывает решение, внедряет и поддерживает. Наши сайты работают как
                инструмент продаж и роста.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы не просто создаём «присутствие в интернете» — мы разрабатываем цифровые
                продукты, которые решают конкретные бизнес-задачи и приносят измеримый
                результат.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="glass-card p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <principle.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-radial">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium mb-4 block">
              Услуги
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Что мы <span className="text-gradient">делаем</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексные IT-решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card home-preview-card group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="glass-card" asChild>
              <Link href="/services">
                Все услуги
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-gradient-radial">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают <span className="text-gradient">TECHNOLAB</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection compactTop />
    </>
  );
}
