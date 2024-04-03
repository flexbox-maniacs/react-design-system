import { useClassName } from "@scripts"
import { ContainerTypes } from "./types"
import "./style.scss"

function Container({ children }: ContainerTypes): JSX.Element {
  const containerClass = useClassName("container")

  return (
    <div className={containerClass}>
      <div className="container-wrapper">{children}</div>
    </div>
  )
}

export default Container
