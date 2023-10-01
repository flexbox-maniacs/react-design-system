import { TableCellTypes } from "./types"

function TableCell({ children }: TableCellTypes): JSX.Element {
  return <td className="table-cell">{children}</td>
}

export default TableCell
