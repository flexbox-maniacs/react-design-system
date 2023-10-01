import { DomTypes } from "@dom-types"

type TableProps = {
  headers?: Array<string>
}

export type TableTypes = DomTypes & {
  table: TableProps
  children: React.ReactNode
}
