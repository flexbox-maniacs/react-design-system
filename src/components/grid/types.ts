export type GridProps = {
  alignment?: "start" | "center" | "end"
  justify?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly"
}

export type GridTypes = {
  grid?: GridProps
  children: React.ReactNode
}
