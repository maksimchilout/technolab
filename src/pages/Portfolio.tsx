import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Все проекты' },
  { id: 'ecommerce', name: 'Интернет-магазины' },
  { id: 'corporate', name: 'Корпоративные сайты' },
  { id: 'landing', name: 'Лендинги' },
  { id: 'automation', name: 'Автоматизация' },
];

const projects = [
  {
    id: 1,
    title: 'EcoMarket',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    task: 'Создать современный интернет-магазин эко-товаров',
    solution: 'Разработали каталог с фильтрами, корзину, интеграцию с платёжной системой',
    results: ['+180% конверсия', '+250% трафик'],
    link: '#',
  },
  {
    id: 2,
    title: 'FinConsult',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    task: 'Корпоративный сайт для финансовой консалтинговой компании',
    solution: 'Современный дизайн, калькуляторы услуг, форма консультации',
    results: ['+120% заявок', '-40% отказов'],
    link: '#',
  },
  {
    id: 3,
    title: 'FitnessPro',
    category: 'landing',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    task: 'Лендинг для фитнес-студии с онлайн-записью',
    solution: 'Продающий лендинг с видео, отзывами и формой записи',
    results: ['300+ заявок/мес', '12% конверсия'],
    link: '#',
  },
  {
    id: 4,
    title: 'LogiBot',
    category: 'automation',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    task: 'Telegram-бот для логистической компании',
    solution: 'Бот для отслеживания заказов, уведомлений и поддержки клиентов',
    results: ['-60% нагрузки на call-центр', '5000+ пользователей'],
    link: '#',
  },
  {
    id: 5,
    title: 'TechStore',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    task: 'Интернет-магазин электроники с интеграцией 1C',
    solution: 'Каталог 10000+ товаров, синхронизация остатков, личный кабинет',
    results: ['+300% онлайн-продаж', 'Автоматизация склада'],
    link: '#',
  },
  {
    id: 6,
    title: 'MedClinic',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    task: 'Сайт медицинской клиники с онлайн-записью',
    solution: 'Информационный портал, расписание врачей, личный кабинет пациента',
    results: ['+200% онлайн-записей', 'NPS 92%'],
    link: '#',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium mb-4 block">
              Портфолио
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="text-gradient">работы</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Реализованные проекты для бизнеса разных масштабов и отраслей
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="floating-card overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-primary font-medium">
                      {categories.find((c) => c.id === project.category)?.name}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground block mb-1">
                      Задача
                    </span>
                    <p className="text-sm">{project.task}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground block mb-1">
                      Решение
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground block mb-2">
                      Результаты
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((result, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      Подробнее
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                    <Button size="sm" className="btn-glow">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection
        title="Хотите такой же проект?"
        description="Обсудим ваши задачи и предложим оптимальное решение"
        buttonText="Обсудить проект"
      />
    </Layout>
  );
};

export default Portfolio;
