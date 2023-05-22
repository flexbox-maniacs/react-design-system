import ButtonStory, { defaults as ButtonDefaults } from "./ui/button/story"
import IconStory, { defaults as IconDefaults } from "./ui/icon/story"
import InputStory, { defaults as InputDefaults } from "./ui/input/story"

type PropTypes = { name: string; type: any }

type ComponentProps = { name: string; story: any; defaults: object; propList: Array<PropTypes> }

type componentTypes = Array<ComponentProps>

export const components: componentTypes = [
  {
    name: "Button",
    story: ButtonStory,
    defaults: ButtonDefaults,
    propList: [
      { name: "label", type: "" },
      { name: "startingIcon", type: "" },
      { name: "icon", type: "" },
      { name: "endingIcon", type: "" },
      { name: "variant", type: ["primary", "transparent"] },
      { name: "type", type: ["outlined", "fill"] },
      { name: "size", type: ["small", "large"] },
    ],
  },
  {
    name: "Icon",
    story: IconStory,
    defaults: IconDefaults,
    propList: [
      { name: "name", type: "" },
      { name: "type", type: ["outlined", "rounded", "sharp"] },
    ],
  },
  {
    name: "Input",
    story: InputStory,
    defaults: InputDefaults,
    propList: [
      { name: "name", type: "" },
      { name: "defaultValue", type: "" },
      { name: "type", type: "" },
      { name: "select", type: "" },
    ],
  },
]
