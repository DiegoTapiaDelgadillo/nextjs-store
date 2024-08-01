import { Inter } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "./../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Store",
      to: "/store",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
