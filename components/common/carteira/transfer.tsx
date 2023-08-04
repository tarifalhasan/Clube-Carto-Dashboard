import Image from "next/image";
import Link from "next/link";

interface TransferCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const TransferCard: React.FC<TransferCardProps> = ({
  title,
  description,
  image,
  link = "",
}) => {
  return (
    <div className=" bg-white rounded-xl p-5  shadow-btn-shadow">
      <div className=" flex  justify-end">
        <Image src={image} alt={title} />
      </div>
      <div className=" space-y-2">
        <h3 className=" leading-none text-lg max-w-[45%] text-skin-JungleGreen font-bold">
          {title}
        </h3>
        <p className=" max-w-[70%] text-sm text-skin-JungleGreen">
          {description}
        </p>
        <div className=" py-5">
          <Link
            href={link}
            className=" rounded-xl px-5 py-3  border border-skin-JungleGreen"
          >
            Transferir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransferCard;
