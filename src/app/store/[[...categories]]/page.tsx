interface CategoriesProps {
  params: { categories: string[]; serchParams?: string };
}

export default function Categories(props: CategoriesProps) {
  console.log(props);
  const { categories } = props.params;
  console.log(categories);
  return <h1>Categoria Dinamica: {categories}</h1>;
}
