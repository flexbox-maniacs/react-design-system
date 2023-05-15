import { StorybookBoardTypes } from "./types"
import "./style.scss"

function StorybookBoard({ component }: StorybookBoardTypes): JSX.Element {
  return <div className="storybook-board">{component}</div>
}

export default StorybookBoard
