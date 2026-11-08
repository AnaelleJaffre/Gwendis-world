import { Arbre } from "./objets/Arbre/Arbre";
import { Gwendi } from "./personnages/Gwendi/Gwendi";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    arbre: Arbre,
    gwendi: Gwendi
}