import { Plus_Jakarta_Sans } from 'next/font/google';
import { DarkModeProvider, ModalProvider, StoreProvider } from '../providers';
import './global.css';
import { PersistProvider, StoreInitialStateProvider } from '../providers';

export const metadata = {
  title: 'Kanban Project',
  description: 'Frontend Mentor Challange Solution',
};

const plusJakartaSans = Plus_Jakarta_Sans({
  display: 'swap',
  subsets: ['latin', 'latin-ext', 'cyrillic-ext', 'vietnamese'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <DarkModeProvider>
          <StoreProvider>
            <PersistProvider>
              <StoreInitialStateProvider />
              <ModalProvider />
              {children}
            </PersistProvider>
          </StoreProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
