import { useClassName } from "@scripts"
import { UiIcon } from "@ui"
import { ButtonTypes } from "./types"
import "./style.scss"

function UiButton({ button, className, handleClick }: ButtonTypes): JSX.Element {
  const { variant = "primary", style = "fill" } = button
  const buttonClassList = {
    size: `size-${button.size}`,
  }

  const buttonClass = useClassName(
    [className ?? null, "button", variant != "transparent" ? style : null, variant],
    button,
    buttonClassList
  )

  return (
    <button className={buttonClass} onClick={handleClick} type={button.submit ? "submit" : undefined}>
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
