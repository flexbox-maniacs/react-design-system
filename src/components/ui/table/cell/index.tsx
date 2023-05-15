import { TableCellTypes } from "./types"

function UiTableCell({ children }: TableCellTypes): JSX.Element {
  return <td className="table-cell">{children}</td>
}

export default UiTableCell
