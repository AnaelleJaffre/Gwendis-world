import { Arbre } from "./components/Arbre/Arbre";
import { Gwendi } from "./components/Gwendi/Gwendi";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    arbre: Arbre,
    gwendi: Gwendi
}