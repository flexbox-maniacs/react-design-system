import { useClassName } from "@scripts"
import { TableTypes } from "./types"
import "./style.scss"

function Table({ table, children }: TableTypes): JSX.Element {
  const tableClass = useClassName("table")

  return (
    <table className={tableClass}>
      {table.caption && <caption className="table-caption">{table.caption}</caption>}
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
