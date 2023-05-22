import { useClassName, throwError } from "@scripts"
import { InputTypes } from "./types"
import "./style.scss"

function UiInput({ input }: InputTypes): JSX.Element {
  const selectClass = useClassName(["input", "-select"])

  throwError(input.type == "select" && !input.select, "Type 'select' expects an array as select prop")

  const inputType = {
    field: (
      <input
        type={input.type ?? "text"}
        defaultValue={input.defaultValue}
        name={input.name}
        placeholder={input.type}
        className="input"
      />
    ),
    select:
      input.select && input.select?.options.length <= 3 ? (
        <>
          {input.select.options.map((option) => (
            <label key={option} className="input-label">
              <input
                type="radio"
                name={input.select?.name}
                value={option}
                defaultChecked={input.defaultValue == option ? true : false}
                className="input"
              />
              {option}
            </label>
          ))}
        </>
      ) : (
        <select name={input.select?.name} className={selectClass}>
          {input.select?.options.map((option) => (
            <option key={option} value={option} selected={input.defaultValue == option ? true : false}>
              {option}
            </option>
          ))}
        </select>
      ),
  }

  if (input.select) {
    return inputType.select
  } else return inputType.field
}

export default UiInput
