interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  rating: string;
  description: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`https://fakestoreapi.com/products`);

  if (!res.ok) {
    throw new Error("fail to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();

  return data;
};
export const getProduct = async (slug: any): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);

  if (!res.ok) {
    throw new Error("fail to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();

  return data;
};
