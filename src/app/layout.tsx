import type { Metadata } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-monoglyphic', // Keeps your existing Tailwind setup intact
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'manashmedia | Web Development & Performance Marketing',
  description: 'High-performance web architecture, SEO/AEO, and lead growth strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#FDFBF7] text-zinc-900 font-sans antialiased selection:bg-zinc-200 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
