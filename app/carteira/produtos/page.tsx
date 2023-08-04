import ProductCard from "@/components/common/products/product-card";
import SubHeader from "@/components/sub-header";
import { carteira_routes } from "@/constant/carteira";
import { getProducts } from "@/lib/getProducts";

const Produtos = async () => {
  const products = await getProducts();
  return (
    <>
      <SubHeader
        title="Produtos"
        href="carteira"
        buttonsData={carteira_routes}
      />
      <div className=" bg-white p-5 xl:p-10 shadow-btn-shadow rounded-2xl">
        <h2 className=" font-medium text-2xl pb-10">
          Ver todas as minhas assinaturas
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
