import { StorybookBoardTypes } from "./types"
import "./style.scss"

function StorybookBoard({ component, name }: StorybookBoardTypes): JSX.Element {
  return (
    <div className="storybook-board">
      <h4 className="storybook-board-title">{name}</h4>
      <div className="storybook-board-component">{component}</div>
    </div>
  )
}

export default StorybookBoard
