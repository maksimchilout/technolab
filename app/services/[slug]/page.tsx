import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { servicesDetailData, serviceSlugs } from '@/data/servicesDetail';
import { CTASection } from '@/components/CTASection';
import { HeroAbstractBg } from '@/components/HeroAbstractBg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetailData[slug];
  if (!service) return { title: 'Услуга' };
  return {
    title: service.title,
    description: service.subtitle,
  };
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold mb-6">
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

function ListBlock({
  items,
  groupHoverBullets = false,
}: {
  items: string[];
  groupHoverBullets?: boolean;
}) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-muted-foreground">
          <span
            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${
              groupHoverBullets
                ? 'bg-primary/60 group-hover:bg-primary'
                : 'bg-primary'
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesDetailData[slug];
  if (!service) notFound();

  const hasHeroBg = service.heroAbstract || service.heroImage;

  return (
    <>
      <section
        className={`relative min-h-[calc(100dvh-5rem)] flex flex-col justify-start overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 ${!hasHeroBg ? 'bg-mesh' : ''}`}
      >
        {service.heroAbstract && (
          <>
            <HeroAbstractBg />
            <div
              className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/70 to-background/30"
              aria-hidden
            />
          </>
        )}
        {service.heroImage && !service.heroAbstract && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src={service.heroImage.src}
                alt={service.heroImage.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div
              className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/70 to-background/30"
              aria-hidden
            />
          </>
        )}
        <div className="container-custom relative z-10 flex flex-col gap-6 md:gap-8">
          <div className="max-w-5xl">
            <span className="text-primary text-sm font-medium mb-2 block">Услуга</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3">
              {slug === 'landing' ? (
                <>
                  Заказать <span className="text-gradient">лендинг под ключ</span>
                </>
              ) : slug === 'ecommerce' ? (
                <>
                  Заказать <span className="text-gradient">интернет‑магазин под ключ</span>
                </>
              ) : slug === 'catalog' ? (
                <>
                  Заказать <span className="text-gradient">сайт‑каталог под ключ</span>
                </>
              ) : slug === 'corporate' ? (
                <>
                  Заказать <span className="text-gradient">корпоративный сайт под ключ</span>
                </>
              ) : slug === 'vizitka' ? (
                <>
                  Заказать <span className="text-gradient">сайт-визитку под ключ</span>
                </>
              ) : (
                <span className="text-gradient">{service.title}</span>
              )}
            </h1>
            <p className="text-xl text-muted-foreground mb-3">
              {service.subtitle}
            </p>
            {service.heroAbstract && service.intro.length > 0 && (
              <div className="space-y-2 text-muted-foreground leading-relaxed w-full">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
          {(service.forWho.length > 0 || service.includes.length > 0 || service.prospects.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl mt-8 md:mt-10">
              {service.forWho.length > 0 && (
                <div className="group glass-card p-4 md:p-5 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--glow-soft))] hover:-translate-y-1">
                  <h2 className="text-lg font-bold mb-3">
                    <span className="text-gradient">{service.forWhoTitle ?? 'Кому подходит'}</span>
                  </h2>
                  <ListBlock items={service.forWho} groupHoverBullets />
                </div>
              )}
              {service.includes.length > 0 && (
                <div className="group glass-card p-4 md:p-5 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--glow-soft))] hover:-translate-y-1">
                  <h2 className="text-lg font-bold mb-3">
                    <span className="text-gradient">Что включает</span>
                  </h2>
                  <ListBlock items={service.includes} groupHoverBullets />
                </div>
              )}
              {service.prospects.length > 0 && (
                <div className="group glass-card p-4 md:p-5 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--glow-soft))] hover:-translate-y-1">
                  <h2 className="text-lg font-bold mb-3">
                    <span className="text-gradient">Перспективы для бизнеса</span>
                  </h2>
                  <ListBlock items={service.prospects} groupHoverBullets />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {service.intro.length > 0 && !service.heroAbstract && (
        <section className="py-12 md:py-16">
          <div className="container-custom max-w-7xl w-full">
            <div className="prose prose-invert max-w-none">
              {service.intro.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.longContent && service.longContent.length > 0 && (
        <section className="py-12 md:py-16 bg-gradient-radial">
          <div className="container-custom max-w-7xl w-full">
            <div className="space-y-8">
              {service.longContent.map((block, i) => (
                <div
                  key={i}
                  className="animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${(i + 1) * 120}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="text-gradient">{block.title}</span>
                  </h2>
                  <div className="glass-card p-5 md:p-6 rounded-2xl border border-border/50">
                    <div className="space-y-3">
                      {block.paragraphs.map((p, j) => (
                        <p key={j} className="text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.sections && service.sections.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container-custom max-w-7xl w-full space-y-6">
            {service.sections.map((sec, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-3">
                  <span className="text-gradient">{sec.title}</span>
                </h3>
                <div className="glass-card p-5">
                  <ListBlock items={sec.items} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {service.faq.length > 0 && (
        <section className="pt-12 pb-4 md:pt-16 md:pb-5">
          <div className="container-custom max-w-7xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="text-gradient">FAQ</span> — {service.title}
            </h2>
            <div className="h-[32rem] overflow-y-auto overflow-x-hidden">
              <Accordion type="single" collapsible className="space-y-3">
                {service.faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="glass-card px-5 border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={slug === 'landing' ? 'Заказать лендинг под ключ' : 'Обсудить эту услугу'}
        description="Оставьте заявку, и мы подберём оптимальное решение под ваши задачи"
        buttonText="Заказать консультацию"
        compact
      />
    </>
  );
}
