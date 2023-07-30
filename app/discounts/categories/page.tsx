import AddCategories from "./add-category";
import ListCategories from "./list-category";

interface Props {
  className?: string;
}

const Categorys: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} grid gap-6`}>
      <AddCategories />
      <ListCategories />
    </div>
  );
};

export default Categorys;
