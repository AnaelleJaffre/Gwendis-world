import { Etoile } from "./ElementsInterface/Etoile"

export const registreElementsInterface: Record<string, () => HTMLElement> = {
    etoile: Etoile
}