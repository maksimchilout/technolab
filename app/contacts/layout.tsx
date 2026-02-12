import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с Technolab: заказать разработку сайта, консультацию по IT-решениям. Email, Telegram, форма заявки.',
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
