import { DomTypes } from "@dom-types"

type TableProps = {
  headers?: Array<string>
  prefix?: string | boolean
  title?: string
}

export type TableTypes = DomTypes & {
  table: TableProps
  children: React.ReactNode
}
