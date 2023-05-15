import { useState } from "react"
import { components } from "../components/components"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Board from "./components/board"
import ControlCenter from "./components/control-center"
import "./style.scss"

function Storybook(): JSX.Element {
  const [currentComponent, setCurrentComponent] = useState(0)

  function updateComponent(index: number) {
    setCurrentComponent(index)
  }

  const [defaultProps, changeProps] = useState<Record<string, string>>(
    components[currentComponent].defaults as Record<string, string>
  )

  function updateProps(e: React.FormEvent<HTMLFormElement>) {
    const input = e.target as HTMLInputElement

    const props = components[currentComponent].propList.reduce(
      (acc: Record<string, string>, key: { name: string; type: string | Array<string> }) => {
        acc[key.name] = input.name === key.name ? input.value : defaultProps[key.name]
        return acc
      },
      {}
    )

    changeProps(props)
  }

  return (
    <div className="storybook">
      <Header />
      <Sidebar components={components} updateComponent={updateComponent} />
      <Board component={components[currentComponent].story(defaultProps)} />
      <ControlCenter propList={components[currentComponent].propList} onChangeForm={updateProps} />
    </div>
  )
}

export default Storybook
