import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GroupsData = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of Groups.</TableCaption>
        <TableHeader className="s bg-[#1A932E2E] ">
          <TableRow>
            <TableHead className=" text-xs sm:text-base font-normal">
              Nome dos Grupos
            </TableHead>

            <TableHead className="text- text-xs sm:text-base">
              Categoria
            </TableHead>

            <TableHead className="text-right text-xs sm:text-base">
              Permissões
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" text-xs sm:text-base">
              Nome do Grupo
            </TableCell>

            <TableCell className="text- text-xs sm:text-base">
              Categoria do grupo
            </TableCell>
            <TableCell className="text-right text-xs sm:text-base">
              Permissões
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default GroupsData;
