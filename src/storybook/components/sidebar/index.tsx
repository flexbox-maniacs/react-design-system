import { UiButton } from "@ui"
import { StorybookSidebarTypes } from "./types"
import "./style.scss"

function StorybookSidebar({
  components,
  updateComponent,
}: StorybookSidebarTypes) {
  return (
    <aside className="storybook-sidebar">
      <div className="storybook-sidebar-wrapper">
        {components.map((item, index) => (
          <UiButton
            button={{ label: item.name, variant: "transparent", size: "small" }}
            key={item.name}
            handleClick={() => updateComponent(index)}
          />
        ))}
      </div>
    </aside>
  )
}

export default StorybookSidebar
