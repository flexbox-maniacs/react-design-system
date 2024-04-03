import { useClassName } from "@scripts"
import { LayoutTypes } from "./types"
import "./style.scss"

function Layout({ page, children }: LayoutTypes): JSX.Element {
  const layoutClass = useClassName("layout")

  return (
    <main id={page} className={layoutClass}>
      <div className="layout-content">{children}</div>
    </main>
  )
}

export default Layout
