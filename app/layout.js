import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Skincare Products | Upleveled',
    template: '%s | Upleveled',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home </Link>
            <Link href="/products">Products </Link>
            <Link href="/cart">Cart </Link>
            <Link href="/checkout">Check out </Link>
            <Link href="/thankyou">Thank you</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
