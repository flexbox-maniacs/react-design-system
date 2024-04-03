import { TableCellTypes } from "./types"
import "./style.scss"

function TableCell({ cell, children }: TableCellTypes): JSX.Element {
  return (
    <td className="table-cell" colSpan={cell?.colSpan} rowSpan={cell?.rowSpan}>
      {children}
    </td>
  )
}

export default TableCell
