'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { checkIsPrivateRoute } from "@/functions/checkIsPublicRoute";
import PrivateRoute from "../components/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathName = usePathname();
  const IsPrivate = checkIsPrivateRoute(pathName!);
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {!IsPrivate && children}

        {
          IsPrivate &&
          <PrivateRoute>
            {children}
          </PrivateRoute>
        }

      </body>
    </html>
  );
}
