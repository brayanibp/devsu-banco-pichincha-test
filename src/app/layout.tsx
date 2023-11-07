import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar';
import DialogMenu from '@/components/dialog-menu/dialog-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Banco Pichincha',
  description: 'Somos tu Banco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {/* <DialogMenu {...{ title: '¿Estas seguro de eliminar el producto {titulo del producto}?' }} /> */}
        {children}
      </body>
    </html>
  );
}
