// import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/Header/Header';
// import FilAriane from '@/components/FilAriane';
// import { RealisationsProvider } from './context/RealisationsContext';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Graph and Co',
    description: 'Un métier, une passion',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <body className={inter.className}> */}
            {/* <RealisationsProvider> */}
            <body>
                <Header />
                {/* <FilAriane /> */}
                {children}
            </body>
            {/* </RealisationsProvider> */}
        </html>
    );
}
