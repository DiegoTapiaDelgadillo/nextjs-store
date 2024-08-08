import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  serchParams: {
    id: string;
  };
}

export default async function ProductPage({ serchParams }: ProductPageProps) {
  const id = serchParams.id;
  const product = await getProducts(id);
  console.log(product);
  console.log("serchParams", id);
  return (
    <div className=" pt-24">
      <h1>Product Page</h1>
    </div>
  );
}
