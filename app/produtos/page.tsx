import OverView from "@/components/common/overview/overviews";
import ProductsCategories from "@/components/common/products/categories";
import ProductCard from "@/components/common/products/product-card";
import SubHeader from "@/components/sub-header";
import { products_routes } from "@/constant/products";
import { getProducts } from "@/lib/getProducts";

const Produtos = async () => {
  const products = await getProducts();

  return (
    <>
      <OverView />
      <SubHeader
        title="Produtos"
        href="produtos"
        buttonsData={products_routes}
      />
      <ProductsCategories />
      <div className=" py-7">
        <h2 className="  pb-4 text-4xl  font-semibold text-[#292D32]">
          Produtos
        </h2>
        <div className=" grid gap-10 sm:gap-6  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              image={product.image}
              title={product.title}
              key={product.id}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Produtos;
