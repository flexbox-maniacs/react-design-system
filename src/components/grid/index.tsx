import { GridTypes } from "./types"
import "./style.scss"

function Grid({ children }: GridTypes): JSX.Element {
  return <div className="grid">{children}</div>
}

export default Grid
