import { useClassName } from "@scripts"
import { GridTypes, GridProps } from "./types"
import "./style.scss"

function Grid({ grid = {}, children }: GridTypes): JSX.Element {
  const { alignment = "center" }: GridProps = grid
  const gridClassList = {
    alignment: `align-${alignment}`,
  }

  const gridClassName = useClassName(["grid"], grid, gridClassList)

  return <div className={gridClassName}>{children}</div>
}

export default Grid
