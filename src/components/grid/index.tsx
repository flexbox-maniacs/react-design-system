import { useClassName } from "@scripts"
import { GridTypes, GridProps } from "./types"
import "./style.scss"

const gridDefault: GridProps = {
  alignment: "center",
  justify: "center",
}

function Grid({ grid = gridDefault, children }: GridTypes): JSX.Element {
  const { alignment = "center", justify = "center" }: GridProps = grid
  const gridClassList = {
    alignment: `align-${alignment}`,
    justify: `justify-${justify}`,
  }

  const gridClassName = useClassName(["grid"], grid, gridClassList)

  return <div className={gridClassName}>{children}</div>
}

export default Grid
