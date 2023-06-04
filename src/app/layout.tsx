import './globals.css';
import Header from '@/components/Header/Header';

export const metadata = {
  title: 'Solo',
  description: 'Solo Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
