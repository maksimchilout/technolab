import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности TechnoLab: как мы собираем, используем и защищаем персональные данные.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding pt-32 pb-12">
        <div className="container-custom max-w-3xl">
          <span className="text-primary text-sm font-medium mb-4 block">Документы</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Политика <span className="text-gradient">конфиденциальности</span>
          </h1>
          <p className="text-muted-foreground">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Общие положения</h2>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта TechnoLab (далее — Сайт). Использование Сайта означает согласие пользователя с настоящей Политикой. В случае несогласия с её условиями необходимо прекратить использование Сайта.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Какие данные мы собираем</h2>
              <p className="leading-relaxed mb-3">
                Мы можем собирать следующие персональные данные при заполнении форм на Сайте, обращении по контактам или подписке на рассылку:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>имя и фамилия;</li>
                <li>адрес электронной почты;</li>
                <li>номер телефона;</li>
                <li>текст сообщения или описание запроса;</li>
                <li>технические данные (IP-адрес, тип браузера, данные cookies) при посещении Сайта.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Цели обработки данных</h2>
              <p className="leading-relaxed">
                Персональные данные используются исключительно для: связи с вами по поводу заявок и консультаций; ответов на обращения; улучшения работы Сайта и сервисов; информирования об услугах (при вашем согласии); соблюдения требований законодательства.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Правовые основания</h2>
              <p className="leading-relaxed">
                Обработка персональных данных осуществляется на основании вашего согласия (при отправке форм), необходимости исполнения договора или преддоговорных отношений, а также законных интересов оператора в рамках оказания услуг и развития Сайта.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Хранение и защита данных</h2>
              <p className="leading-relaxed">
                Мы храним персональные данные в течение срока, необходимого для достижения целей обработки, или до отзыва согласия. Применяются организационные и технические меры для защиты данных от неправомерного доступа, уничтожения, изменения или распространения.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Передача данных третьим лицам</h2>
              <p className="leading-relaxed">
                Персональные данные не передаются третьим лицам, за исключением случаев: передачи по законному требованию уполномоченных государственных органов; использования сервисов (хостинг, почта, аналитика), действующих в соответствии с соглашениями о конфиденциальности и применимым законодательством.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies и аналитика</h2>
              <p className="leading-relaxed">
                Сайт может использовать файлы cookies и аналогичные технологии для обеспечения работы сервисов, анализа посещаемости и улучшения пользовательского опыта. Вы можете отключить или ограничить использование cookies в настройках браузера.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Ваши права</h2>
              <p className="leading-relaxed mb-3">
                Вы имеете право: запросить доступ к своим персональным данным; потребовать исправления или удаления данных; отозвать согласие на обработку; обжаловать действия оператора в уполномоченный орган по защите персональных данных. Для реализации прав направьте запрос на контактный email, указанный на Сайте.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Изменения Политики</h2>
              <p className="leading-relaxed">
                Мы вправе вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на этой странице. Рекомендуем периодически знакомиться с её содержанием. Продолжение использования Сайта после публикации изменений означает принятие обновлённой Политики.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Контакты</h2>
              <p className="leading-relaxed">
                По вопросам, связанным с обработкой персональных данных и настоящей Политикой, вы можете обратиться по контактам, указанным в разделе{' '}
                <Link href="/contacts" className="text-primary hover:underline">
                  Контакты
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/contacts"
              className="text-primary hover:underline font-medium"
            >
              ← Вернуться к контактам
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
