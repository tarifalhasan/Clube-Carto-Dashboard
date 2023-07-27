import DataTable from "@/components/common/data-table"
import { dummyDataForTable } from "@/constant/data"

const Histórico = () => {
  return (
    <div>
        <DataTable data={dummyDataForTable}/>
    </div>
  )
}

export default Histórico