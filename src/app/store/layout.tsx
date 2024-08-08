import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className=" pt-24">
      <p>Explora nuestras categorias</p>
      <nav className=" pt-4 gap-4 flex">
        {collections.map((collections: any) => (
          <Link
            key={collections.id}
            href={/store/ + collections.handle}
            className=" border p-2 rounded-xl bg-sm8-blue-600 text-white"
          >
            {collections.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
