import { useClassName } from "@scripts"
import { CellTypes } from "./types"
import "./style.scss"

function Cell({ cell, children }: CellTypes): JSX.Element {
  const cellClassList = {
    lg: "lg",
    size: "size",
  }

  const cellClass = useClassName(["cell"], cell, cellClassList)

  return <div className={cellClass}>{children}</div>
}

export default Cell
