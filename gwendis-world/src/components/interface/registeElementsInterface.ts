import { Etoile } from "./ElementsInterface/Etoile"
import { Point } from "./ElementsInterface/Point"

export const registreElementsInterface: Record<string, () => HTMLElement> = {
    etoile: Etoile,
    point: Point
}