import { UiTable, UiTableRow, UiTableCell, UiInput } from "@ui"
import { StorybookControlCenterTypes } from "./types"
import "./style.scss"

function StorybookControlCenter({ propList, onChangeForm, currentDefaults }: StorybookControlCenterTypes): JSX.Element {
  const inputTypes = {
    string: "text",
    option: "select",
    boolean: "switch",
    number: "number",
  }

  return (
    <aside id="storybook-control-center">
      <form onChange={onChangeForm} id="storybook-control-center-form">
        <UiTable
          table={{
            headers: ["prop", "value"],
          }}>
          <tbody>
            {propList.map((prop) => (
              <UiTableRow key={prop.name}>
                <UiTableCell>
                  <label htmlFor={prop.name} id="storybook-control-center-label">
                    {prop.name}
                  </label>
                </UiTableCell>
                <UiTableCell>
                  <UiInput
                    input={{
                      name: prop.name,
                      defaultValue: currentDefaults[prop.name as keyof typeof currentDefaults],
                      type: inputTypes[prop.type as keyof typeof inputTypes],
                      select: Array.isArray(prop.options) ? { name: prop.name, options: prop.options } : undefined,
                      placeholder: prop.type,
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
