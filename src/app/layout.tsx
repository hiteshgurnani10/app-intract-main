import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar/Navbar';

const outfit = Outfit({ subsets: ['latin'], variable: '--outfit' });

export const metadata: Metadata = {
    title: 'Intract | Unleash your Web3 Growth',
    description: 'Acesss world’s first bot-less community of 5M+ on-chain users with our quest platform',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
