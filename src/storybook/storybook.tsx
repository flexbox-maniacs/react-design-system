import { useState } from "react"
import { components } from "../components/components"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Board from "./components/board"
import "./style.scss"

function Storybook(): JSX.Element {
  const [currentComponent, setCurrentComponent] = useState(0)

  function updateComponent(index: number) {
    setCurrentComponent(index)
  }

  return (
    <div className="storybook">
      <Header />
      <Sidebar components={components} updateComponent={updateComponent} />
      <Board component={components[currentComponent].story} />
    </div>
  )
}

export default Storybook
