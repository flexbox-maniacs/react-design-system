import { useClassName } from "@scripts"
import { TableTypes } from "./types"
import "./style.scss"

function UiTable({ table, className, children }: TableTypes): JSX.Element {
  const tableClass = useClassName([className ?? null, "table"])

  return (
    <table className={tableClass}>
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
