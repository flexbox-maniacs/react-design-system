import { useClassName } from "@scripts"
import { Icon } from "@ds"
import { ButtonTypes, ButtonProps } from "./types"
import "./style.scss"

const defaultButton: ButtonProps = {
  style: "fill",
  variant: "primary",
}

function Button({ button = defaultButton, className, handleClick }: ButtonTypes): JSX.Element {
  const buttonClassList = {
    size: `size-${button.size}`,
  }

  const buttonClass = useClassName([className ?? null, "button"], button, buttonClassList)

  return (
    <button className={buttonClass} onClick={handleClick} type={button.submit ? "submit" : undefined}>
      {button.startingIcon ? (
        <Icon icon={{ name: button.startingIcon, type: button.iconType }} />
      ) : (
        button.icon && <Icon icon={{ name: button.icon, type: button.iconType }} />
      )}
      {button.label && <span className="button-label">{button.label}</span>}
      {button.endingIcon && <Icon icon={{ name: button.endingIcon, type: button.iconType }} />}
    </button>
  )
}

export default Button
