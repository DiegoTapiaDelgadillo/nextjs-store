import Image from "next/image";
import { getProducts } from "app/services/shopify";

export const MainProducts = async () => {
  const response = await fetch("http://localhost:3000/api");
  const { products } = await response.json();
  return (
    <section>
      <h3>Productos</h3>
      <div className=" grid grid-cols-3 gap-4">
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image
                src={imageSrc}
                width={100}
                height={100}
                alt={product.title}
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
