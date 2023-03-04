import { useState } from "react"
import { StorybookBoardTypes } from "./types"
import "./style.scss"

function StorybookBoard({ component }: StorybookBoardTypes): JSX.Element {
  const [isUppercase, setIsUppercase] = useState(false)

  return (
    <div className="storybook-board">
      {/* <TextStyle style={{ uppercase: isUppercase, bold: false }}>
        teste
      </TextStyle>
      <label>
        <input
          type="radio"
          name="uppercase"
          id=""
          onClick={() => setIsUppercase(false)}
        />
        false
      </label>
      <label>
        <input
          type="radio"
          name="uppercase"
          id=""
          onClick={() => setIsUppercase(true)}
        />
        true
      </label> */}
      {component}
    </div>
  )
}

export default StorybookBoard
