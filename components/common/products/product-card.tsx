import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  title: string;
  price?: string;
  image: string;
  link?: string;
  id: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  id,
}) => {
  return (
    <Link
      className=" relative rounded-2xl shadow-btn-shadow  p-5"
      href={`produtos/${id}`}
    >
      <Image
        width={230}
        height={230}
        className=" block mx-auto max-w-[230px] max-h-[230px]  w-full h-full "
        src={image}
        alt={title}
      />
      <h2 className="text-lg pt-2 font-semibold text-center ">{title}</h2>
    </Link>
  );
};

export default ProductCard;
