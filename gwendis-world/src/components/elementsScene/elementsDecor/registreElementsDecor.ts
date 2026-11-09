import { Arbre } from "./objets/Arbre/Arbre";
import { Nuage } from "./objets/Nuage/Nuage";
import { ParticuleAir } from "./objets/ParticuleAir/ParticuleAir";
import { Gwendi } from "./personnages/Gwendi/Gwendi";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    arbre: Arbre,
    nuage: Nuage,
    particuleAir: ParticuleAir,
    gwendi: Gwendi
}