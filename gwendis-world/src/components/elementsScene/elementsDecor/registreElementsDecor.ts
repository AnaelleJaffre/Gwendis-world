import { Arbre } from "./objets/Arbre/Arbre";
import { Nuage } from "./objets/Nuage/Nuage";
import { Gwendi } from "./personnages/Gwendi/Gwendi";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    arbre: Arbre,
    nuage: Nuage,
    gwendi: Gwendi
}