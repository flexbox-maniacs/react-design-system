import { Table, TableRow, TableCell, Input } from "@ds"
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
        <Table
          table={{
            headers: ["prop", "value"],
          }}>
          <tbody>
            {propList.map((prop) => (
              <TableRow key={prop.name}>
                <TableCell>
                  <label htmlFor={prop.name} id="storybook-control-center-label">
                    {prop.name}
                  </label>
                </TableCell>
                <TableCell>
                  <Input
                    input={{
                      name: prop.name,
                      defaultValue: currentDefaults[prop.name as keyof typeof currentDefaults],
                      type: inputTypes[prop.type as keyof typeof inputTypes],
                      select: Array.isArray(prop.options) ? { name: prop.name, options: prop.options } : undefined,
                      placeholder: prop.type,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </form>
    </aside>
  )
}

export default StorybookControlCenter
