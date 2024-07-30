'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { checkIsPrivateRoute } from "@/functions/checkIsPublicRoute";
import PrivateRoute from "../providers/private-route";
import ThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathName = usePathname();
  const IsPrivate = checkIsPrivateRoute(pathName!);

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {!IsPrivate && children}
          {IsPrivate && <PrivateRoute> {children}</PrivateRoute>}
        </ThemeProvider>
      </body>
    </html>
  );
}
