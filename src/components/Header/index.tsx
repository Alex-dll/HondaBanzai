import { CarPresentation } from "./CarPresentation";
import { Contact } from "./Contact";
import { FirstSight } from "./FirstSight";
import { Navigator } from "./Navigator";

export function Header() {
  return (
    <header>
      <Navigator />
      <FirstSight />
      <CarPresentation />
      <Contact />
    </header>
  )
}