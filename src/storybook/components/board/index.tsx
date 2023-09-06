import { UiCard } from "@ui"
import { StorybookBoardTypes } from "./types"
import "./style.scss"

function StorybookBoard({ component, name }: StorybookBoardTypes): JSX.Element {
  return (
    <div id="storybook-board">
      <h4 id="storybook-board-title">{name}</h4>
      <UiCard id="storybook-board-component">{component}</UiCard>
    </div>
  )
}

export default StorybookBoard
