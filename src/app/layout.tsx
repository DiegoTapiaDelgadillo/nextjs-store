import { Montserrat } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "./../styles/global.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    {
      text: "Test",
      to: "/test",
    },
  ];
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header navLinks={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
