import { ProductCard } from "../ProductCard";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapperProps = ({ products }: ProductsWrapperProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
