'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { checkIsPrivateRoute } from "@/functions/checkIsPublicRoute";
import PrivateRoute from "../providers/private-route";
import ThemeProvider from "@/providers/theme-provider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathName = usePathname();
  const IsPrivate = checkIsPrivateRoute(pathName!);

  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Promo Play</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Header />
          {!IsPrivate && children}
          {IsPrivate && <PrivateRoute> {children}</PrivateRoute>}
        </ThemeProvider>
      </body>
    </html>
  );
}
