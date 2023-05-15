import { TableRowTypes } from "./types"

function UiTableRow({ children }: TableRowTypes): JSX.Element {
  return <tr className="table-row">{children}</tr>
}

export default UiTableRow
