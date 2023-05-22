import { useClassName } from "@scripts"
import { UiIcon } from "@ui"
import { ButtonTypes } from "./types"
import "./style.scss"

function UiButton({ button, handleClick }: ButtonTypes): JSX.Element {
  const { variant = "primary", type = "fill" } = button
  const buttonClassList = {
    size: `size-${button.size}`,
  }

  const buttonClass = useClassName(
    ["button", !(variant === "transparent") ? type : null, variant],
    button,
    buttonClassList
  )

  return (
    <button className={buttonClass} onClick={handleClick}>
      {button.startingIcon ? (
        <UiIcon icon={{ name: button.startingIcon }} />
      ) : (
        button.icon && <UiIcon icon={{ name: button.icon }} />
      )}
      {button.label && <span className="button-label">{button.label}</span>}
      {button.endingIcon && <UiIcon icon={{ name: button.endingIcon }} />}
    </button>
  )
}

export default UiButton
