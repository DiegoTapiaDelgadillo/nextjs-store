import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" pt-48">
      <Hero />
      <Description />
      {children}
    </div>
  );
}
