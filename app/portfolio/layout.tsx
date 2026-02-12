import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Портфолио',
  description:
    'Реализованные проекты Technolab: сайты, интернет-магазины, лендинги и автоматизация для бизнеса.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
