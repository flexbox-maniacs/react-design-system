import { useClassName } from "@scripts"
import { GridTypes } from "./types"
import "./style.scss"

function Grid({ grid, children }: GridTypes): JSX.Element {
  const { alignment = "center" } = grid
  const gridClassList = {
    alignment: `align-${alignment}`,
  }

  const gridClassName = useClassName(["grid"], grid, gridClassList)

  return <div className={gridClassName}>{children}</div>
}

export default Grid
