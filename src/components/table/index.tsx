import { useClassName } from "@scripts"
import { TableTypes } from "./types"
import "./style.scss"

function Table({ table, className, children }: TableTypes): JSX.Element {
  const tableClass = useClassName([className ?? null, "table"])

  return (
    <table className={tableClass}>
      {table.headers && (
        <thead className="table-header">
          <tr className="table-header-group-row">
            {table.headers.map((header) => (
              <th key={header} className="table-header-cell">
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className="table-body">{children}</tbody>
    </table>
  )
}

export default Table