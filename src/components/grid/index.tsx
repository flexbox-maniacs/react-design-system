import { useClassName } from "@scripts"
import { GridTypes } from "./types"
import "./style.scss"

const defaultGrid = {
  alignment: "center" as "center",
}

function Grid({ grid = defaultGrid, children }: GridTypes): JSX.Element {
  const gridClassList = {
    alignment: `align-${grid?.alignment}`,
  }

  const gridClassName = useClassName(["grid"], grid, gridClassList)

  return <div className={gridClassName}>{children}</div>
}

export default Grid
