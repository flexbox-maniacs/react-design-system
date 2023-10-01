import { Button } from "@ds"
import { StorybookSidebarTypes } from "./types"
import "./style.scss"

function StorybookSidebar({ components, updateComponent }: StorybookSidebarTypes) {
  return (
    <aside id="storybook-sidebar">
      <div id="storybook-sidebar-wrapper">
        {components.map((item, index) => (
          <Button
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
