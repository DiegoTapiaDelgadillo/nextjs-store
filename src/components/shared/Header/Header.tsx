import Link from "next/link";

interface HeaderProps {
  navLinks: Array<{ to: string; text: string }>;
}

export const Header = ({ navLinks }: HeaderProps) => {
  return (
    <header className=" w-full px-4 md:px-8 lg:px-16 py-6 bg-sm8-blue-600 fixed">
      <nav className=" w-full flex justify-between">
        <h1 className=" font-bold text-xl text-white">SM8</h1>
        <ul className=" flex gap-4 text-xl">
          {navLinks.map((link, index) => (
            <Link href={link.to} key={index}>
              <li className="text-white cursor-pointer hover:text-white/50 ease-in-out duration-300">
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
