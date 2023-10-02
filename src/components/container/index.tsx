import { ContainerTypes } from "./types"
import "./style.scss"

function Container({ children }: ContainerTypes): JSX.Element {
  return (
    <div className="container">
      <div className="container-wrapper">{children}</div>
    </div>
  )
}

export default Container
