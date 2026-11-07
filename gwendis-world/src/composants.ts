import { Arbre } from "./components/elementsScene/elementsDecor/objets/Arbre/Arbre";
import { Gwendi } from "./components/elementsScene/elementsDecor/personnages/Gwendi/Gwendi";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    arbre: Arbre,
    gwendi: Gwendi
}