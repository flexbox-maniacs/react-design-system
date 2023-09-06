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
    changeProps(components[index].defaults)
  }

  const [defaultProps, changeProps] = useState(components[currentComponent].defaults)

  function updateProps(e: React.FormEvent<HTMLFormElement>) {
    const input = e.target as HTMLInputElement

    const props: Record<string, string | boolean> = { ...components[currentComponent].defaults }
    props[input.name] = input.value != "on" ? input.value : input.checked

    changeProps(props)
  }

  function changeCss(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    document.documentElement.setAttribute("style", form.css.value)
  }

  return (
    <div id="storybook">
      <Header />
      <Sidebar components={components} updateComponent={updateComponent} />
      {/* <Board component={components[currentComponent].story(defaultProps)} name={components[currentComponent].name} />
      <ControlCenter
        propList={components[currentComponent].propList}
        onChangeForm={updateProps}
        currentDefaults={components[currentComponent].defaults}
      /> */}
      {/* <form onSubmit={changeCss}>
        <textarea name="css" id="" cols={30} rows={10}></textarea>
        <UiButton button={{ label: "submit", submit: true }} />
      </form> */}
    </div>
  )
}

export default Storybook
