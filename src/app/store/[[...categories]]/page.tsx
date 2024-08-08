import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import {
  getCollections,
  getCollectionsProducts,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCallection = collections.find(
      (collections: any) => collections.handle === categories[0]
    ).id;
    products = await getCollectionsProducts(selectedCallection);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
