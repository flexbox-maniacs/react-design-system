import { useClassName } from "@scripts"
import { TableTypes } from "./types"
import "./style.scss"

function Table({ table, className, children }: TableTypes): JSX.Element {
  const tableClass = useClassName([className ?? null, "table"])

  return (
    <table className={tableClass}>
      {table.title && <h4 className="table-title">{header.title}</h4>}
      {table.headers && (
        <thead className="table-header">
          <tr className="table-header-row">
            {table.prefix && <th className="table-header-cell -prefix">{table.prefix ?? " "}</th>}
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
