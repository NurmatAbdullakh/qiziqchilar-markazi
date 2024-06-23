import { Providers } from "./providers";
import './globals.scss'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function RootLayout({
    children,
}) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}