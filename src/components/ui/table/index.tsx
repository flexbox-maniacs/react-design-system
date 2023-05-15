import { TableTypes } from "./types"
import "./style.scss"

function UiTable({ children, table }: TableTypes): JSX.Element {
  return (
    <table className="table">
      {table.headers && (
        <thead className="table-header-group">
          <tr className="table-header-group-row">
            {table.headers.map((header) => (
              <th key={header} className="table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      {children}
    </table>
  )
}

export default UiTable
