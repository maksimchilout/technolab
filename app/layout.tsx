import type { Metadata } from 'next';
import { Providers } from './Providers';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Technolab',
    template: '%s | Technolab',
  },
  description:
    'IT-компания полного цикла. Создаём цифровые продукты для роста и продаж.',
  authors: [{ name: 'Technolab' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Technolab',
    description:
      'IT-компания полного цикла. Создаём цифровые продукты для роста и продаж.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
