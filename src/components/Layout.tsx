import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-mesh">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};
