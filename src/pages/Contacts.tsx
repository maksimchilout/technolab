import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { FAQ } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Send, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Имя должно содержать минимум 2 символа').max(100),
  email: z.string().trim().email('Введите корректный email').max(255),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Сообщение должно содержать минимум 10 символов').max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@technolab.ru',
    href: 'mailto:info@technolab.ru',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (XXX) XXX-XX-XX',
    href: 'tel:+7XXXXXXXXXX',
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@technolab_support',
    href: 'https://t.me/technolab_support',
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн–Пт: 10:00–19:00',
    href: null,
  },
];

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium mb-4 block">
              Контакты
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Свяжитесь <span className="text-gradient">с нами</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Обсудим ваш проект и подберём оптимальное решение
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="floating-card p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Заявка отправлена!</h3>
                  <p className="text-muted-foreground mb-6">
                    Мы свяжемся с вами в ближайшее время для обсуждения деталей
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Отправить ещё одну заявку
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className="mt-2 bg-secondary/50"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="mt-2 bg-secondary/50"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (XXX) XXX-XX-XX"
                        className="mt-2 bg-secondary/50"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Описание проекта *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите о вашем проекте: цели, задачи, сроки..."
                        rows={5}
                        className="mt-2 bg-secondary/50 resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full btn-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с{' '}
                      <a href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>

              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={
                            item.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="glass-card p-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Быстрый ответ</h3>
                    <p className="text-sm text-muted-foreground">
                      Мы отвечаем на заявки в течение 2 рабочих часов. Если вам срочно
                      — напишите в Telegram.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </Layout>
  );
};

export default Contacts;
