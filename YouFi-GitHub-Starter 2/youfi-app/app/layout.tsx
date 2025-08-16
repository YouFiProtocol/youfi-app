import './styles/globals.css';
import Providers from '@/lib/providers';

export const metadata = {
  title: 'YouFi',
  description: 'Metas financeiras on-chain com UX gasless',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
