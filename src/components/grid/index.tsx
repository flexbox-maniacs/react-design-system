import { useClassName } from "@scripts"
import { GridTypes, GridProps } from "./types"
import "./style.scss"

const defaultGrid: GridProps = {
  alignment: "center",
}

function Grid({ grid = defaultGrid, children }: GridTypes): JSX.Element {
  const gridClassList = {
    alignment: `align-${grid?.alignment}`,
  }

  const gridClassName = useClassName(["grid"], grid, gridClassList)

  return <div className={gridClassName}>{children}</div>
}

export default Grid
