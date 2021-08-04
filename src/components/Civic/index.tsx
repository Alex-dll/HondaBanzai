import { CarDetails } from "./CarDetails";
import { Cars } from "./Cars";
import { GetHonda } from "./GetHonda";
import { FrontPanel } from "./FrontPanel";

export function Civic() {
  return (
    <>
      <Cars />
      <FrontPanel />
      <CarDetails />
      <GetHonda />
    </>
  )
}