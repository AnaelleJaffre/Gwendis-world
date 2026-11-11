import { Arbre } from "./objets/Arbre/Arbre";
import { MaisonGwendi } from "./objets/Batiments/MaisonGwendi";
import { MaisonPrecheur } from "./objets/Batiments/MaisonPrecheur";
import { Poste } from "./objets/Batiments/Poste";
import { Nuage } from "./objets/Nuage/Nuage";
import { ParticuleAir } from "./objets/ParticuleAir/ParticuleAir";
import { PointExclamation } from "./objets/Reactions/PointExclamation";
import { PointInterrogation } from "./objets/Reactions/PointInterrogation";
import { PointSuspension } from "./objets/Reactions/PointsSuspension";
import { Gwendi } from "./personnages/Gwendi/Gwendi";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    arbre: Arbre,
    nuage: Nuage,
    particuleAir: ParticuleAir,
    gwendi: Gwendi,
    poste: Poste,
    maisonGwendi: MaisonGwendi,
    maisonPrecheur: MaisonPrecheur,
    pointExclamation: PointExclamation,
    pointsuspension: PointSuspension,
    pointInterrogation: PointInterrogation
}