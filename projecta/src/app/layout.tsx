// app/layout.tsx
'use client'
import { Providers } from './providers';
import Sidebar from './components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Sidebar /> {/* Include the Sidebar component */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}