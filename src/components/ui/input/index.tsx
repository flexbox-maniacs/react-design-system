import { useClassName, throwError } from "@scripts"
import { InputTypes } from "./types"
import "./style.scss"

function UiInput({ input, className }: InputTypes): JSX.Element {
  const inputClass = useClassName([className ?? null, "input"])
  const selectClass = useClassName([className ?? null, "input", "select"])
  const switchClass = useClassName([className ?? null, "input", "switch"])

  throwError(input.type == "select" && !input.select, "Type 'select' expects an array as select prop")

  const inputType = {
    field: (
      <input
        type={input.type ?? "text"}
        defaultValue={input.defaultValue}
        name={input.name}
        placeholder={input.placeholder}
        className={inputClass}
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
                className={inputClass}
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
    switch: (
      <input
        type="checkbox"
        name={input.name}
        defaultChecked={input.defaultValue ? true : false}
        className={switchClass}
      />
    ),
  }

  if (inputType[input.type as keyof typeof inputType]) {
    return inputType[input.type as keyof typeof inputType]
  } else return inputType.field
}

export default UiInput
