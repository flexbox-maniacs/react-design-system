import { UiTable, UiTableRow, UiTableCell, UiInput } from "@ui"
import { StorybookControlCenterTypes } from "./types"
import "./style.scss"

function StorybookControlCenter({ propList, onChangeForm }: StorybookControlCenterTypes): JSX.Element {
  return (
    <aside className="storybook-control-center">
      <form onChange={onChangeForm} className="storybook-control-center-form">
        <UiTable
          table={{
            headers: ["name", "value"],
          }}>
          <tbody>
            {propList.map((prop) => (
              <UiTableRow key={prop.name}>
                <UiTableCell>
                  <label htmlFor={prop.name} className="storybook-control-center-label">
                    {prop.name}
                  </label>
                </UiTableCell>
                <UiTableCell>
                  <UiInput
                    input={{
                      name: prop.name,
                      type: Array.isArray(prop.type) ? "select" : "text",
                      select: Array.isArray(prop.type) ? { name: prop.name, options: prop.type } : undefined,
                    }}
                  />
                </UiTableCell>
              </UiTableRow>
            ))}
          </tbody>
        </UiTable>
      </form>
    </aside>
  )
}

export default StorybookControlCenter
