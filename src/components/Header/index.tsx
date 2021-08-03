import { CarPresentation } from "./CarPresentation";
import { FirstSight } from "./FirstSight";
import { Navigator } from "./Navigator";

export function Header() {
  return (
    <header>
      <Navigator />
      <FirstSight />
      <CarPresentation />
    </header>
  )
}