import { DomTypes } from "../../types/dom-types"

type TableProps = {
  caption?: string
  headers?: Array<string>
  prefix?: string | boolean
}

export type TableTypes = DomTypes & {
  table: TableProps
  children: React.ReactNode
}
