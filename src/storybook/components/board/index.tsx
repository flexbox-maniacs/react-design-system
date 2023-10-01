import { Card } from "@ds"
import { StorybookBoardTypes } from "./types"
import "./style.scss"

function StorybookBoard({ component, name }: StorybookBoardTypes): JSX.Element {
  return (
    <div id="storybook-board">
      <h4 id="storybook-board-title">{name}</h4>
      <Card id="storybook-board-component">{component}</Card>
    </div>
  )
}

export default StorybookBoard
