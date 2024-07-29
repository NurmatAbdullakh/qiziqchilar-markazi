import { Providers } from "../providers";
import '../globals.scss'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function RootLayout({
    children,
    params: { locale },
}) {

    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        <Header />
                        {children}
                        <Footer />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}