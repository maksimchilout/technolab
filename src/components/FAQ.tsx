import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Сколько стоит разработка сайта?',
    answer:
      'Стоимость зависит от типа проекта. Лендинг — от 600 Br, сайт-визитка — от 900 Br, корпоративный сайт — от 1400 Br, интернет-магазин — от 1800 Br. Точную стоимость мы рассчитаем после обсуждения вашего проекта.',
  },
  {
    question: 'Какие сроки разработки?',
    answer:
      'Лендинг: 4–14 дней. Сайт-визитка: от 2 недель. Корпоративный сайт: 4–8 недель. Интернет-магазин: 6–12 недель. Сроки зависят от сложности проекта и оперативности обратной связи.',
  },
  {
    question: 'Включено ли SEO в разработку?',
    answer:
      'Да, базовая SEO-оптимизация включена во все наши проекты: правильная структура, мета-теги, скорость загрузки, адаптивность. Для комплексного продвижения предлагаем отдельную услугу SEO.',
  },
  {
    question: 'Есть ли техническая поддержка?',
    answer:
      'Да, мы предоставляем пожизненную техническую гарантию на все наши проекты. Также доступна ежемесячная поддержка от 600 Br/мес с мониторингом, резервным копированием и обновлениями.',
  },
  {
    question: 'Работаете ли вы удалённо?',
    answer:
      'Да, мы работаем с клиентами из любой точки мира. Вся коммуникация ведётся онлайн через мессенджеры, видеозвонки и системы управления проектами.',
  },
];

interface FAQProps {
  /** Меньшие вертикальные отступы (для страницы услуг и т.п.) */
  compact?: boolean;
}

export const FAQ = ({ compact }: FAQProps) => {
  return (
    <section className={compact ? 'pt-10 pb-4 md:pt-12 md:pb-5' : 'pt-10 pb-6 md:pt-12 md:pb-8'}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Частые <span className="text-gradient">вопросы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о нашей работе
          </p>
        </div>

        <div className="max-w-3xl mx-auto h-[32rem] overflow-y-auto overflow-x-hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
