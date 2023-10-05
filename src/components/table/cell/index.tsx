import { TableCellTypes } from "./types"

function TableCell({ cell, children }: TableCellTypes): JSX.Element {
  return (
    <td className="table-cell" colSpan={cell?.colspan} rowSpan={cell?.rowspan}>
      {children}
    </td>
  )
}

export default TableCell
