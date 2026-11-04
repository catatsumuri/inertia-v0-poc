import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laravel Welcome Mockup',
  description: 'Preview of the Inertia welcome view in Next.js',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
