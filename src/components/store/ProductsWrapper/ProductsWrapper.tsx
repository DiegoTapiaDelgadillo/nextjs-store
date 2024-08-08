import { ProductCard } from "../ProductCard";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className=" grid grid-cols-3 py-24 px-12 gap-4">
      {products.map((product) => (
        <div className=" flex justify-center" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
