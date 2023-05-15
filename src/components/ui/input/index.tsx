import { useClassName, throwError } from "@scripts"
import { InputTypes } from "./types"
import "./style.scss"

function UiInput({ input }: InputTypes): JSX.Element {
  const selectClass = useClassName(["input", "-select"])

  throwError(input.type == "select" && !input.select, "Type 'select' expects an array as select prop")

  const inputType = {
    field: <input type={input.type ?? "text"} name={input.name} placeholder={input.name} className="input" />,
    select:
      input.select && input.select?.options.length <= 3 ? (
        <>
          {input.select.options.map((option) => (
            <label key={option} className="input-label">
              <input type="radio" name={input.select?.name} value={option} className="input" />
              {option}
            </label>
          ))}
        </>
      ) : (
        <select name={input.select?.name} className={selectClass}>
          <option value="" disabled selected>
            select
          </option>
          {input.select?.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          aasds
        </select>
      ),

    /* select:
      input.select?.options && input.select?.options.length <= 3 ? (
        <>
          <div></div>
        </>
      ) : (
        <>
          <div></div>
        </>
      ), */
  }

  if (input.select) {
    return inputType.select
  } else return inputType.field
}

export default UiInput
