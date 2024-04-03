import { TableRowTypes } from "./types"
import "./style.scss"

function TableRow({ children }: TableRowTypes): JSX.Element {
  return <tr className="table-row">{children}</tr>
}

export default TableRow
