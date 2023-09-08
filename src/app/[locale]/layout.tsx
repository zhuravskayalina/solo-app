import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Solo',
  description: 'Solo Application',
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function RootLayout({ children, params }: { children: React.ReactNode }) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
