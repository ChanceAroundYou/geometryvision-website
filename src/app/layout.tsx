import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansSC = Noto_Sans_SC({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-cn">
            <body className={`${inter.className} ${notoSansSC.className} min-h-screen flex flex-col`}>
                {children}
            </body>
        </html>
    );
}
