import { LayoutTypes } from "./types"
import "./style.scss"

function UiLayout({ page, children }: LayoutTypes): JSX.Element {
  return (
    <main id={page} className="layout">
      <div className="layout-content">{children}</div>
    </main>
  )
}

export default UiLayout
