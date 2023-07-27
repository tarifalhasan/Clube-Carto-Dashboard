import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const Tipo = ({ ...props }) => {
  return (
    <div>
      <h3 className=" py-2 text-lg sm:text-xl font-semibold  text-text-green">
        Tipo
      </h3>
      <div>
        <Select>
          <SelectTrigger className=" w-full">
            <SelectValue placeholder="Selecionar" />
          </SelectTrigger>
          <SelectContent {...props}>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Tipo;
