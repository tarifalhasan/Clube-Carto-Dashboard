import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface tableTypes {
  name: string;
  data: string;
  value: string;
}

interface DataTableProps {
  tableHead: string[];
  tableData: tableTypes[];
}

const EarningDataTable: React.FC<DataTableProps> = ({
  tableData,
  tableHead,
}) => {
  return (
    <div>
      <Table>
        <TableHeader className="s rounded-md bg-[#1A932E2E] ">
          <TableRow>
            {tableHead.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell key={index}>{item.name}</TableCell>
              <TableCell key={index}>{item.data}</TableCell>
              <TableCell key={index}>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EarningDataTable;
