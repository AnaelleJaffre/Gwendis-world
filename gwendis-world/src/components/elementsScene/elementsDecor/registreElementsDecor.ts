import { Arbre } from "./objets/Arbre/Arbre";
import { MaisonGwendi } from "./objets/Batiments/MaisonGwendi";
import { MaisonPrecheur } from "./objets/Batiments/MaisonPrecheur";
import { Poste } from "./objets/Batiments/Poste";
import { BoiteAuxLettres } from "./objets/Decorations/BoiteAuxLettres";
import { Lanterne } from "./objets/Decorations/Lanterne";
import { LanternesDecorees } from "./objets/Decorations/LanternesDecorees";
import { MiniLanterne } from "./objets/Decorations/MiniLanterne";
import { PanneauDroite } from "./objets/Decorations/PanneauDroite";
import { PanneauGauche } from "./objets/Decorations/PanneauGauche";
import { PanneauInconnu } from "./objets/Decorations/PanneauInconnu";
import { PleinDePanneaux } from "./objets/Decorations/PleinDePanneaux";
import { Pomme } from "./objets/Decorations/Pomme";
import { Verre } from "./objets/Decorations/Verre";
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
    pointInterrogation: PointInterrogation,
    boiteAuxLettres: BoiteAuxLettres,
    lanterne: Lanterne,
    lanternesDecorees: LanternesDecorees,
    miniLanterne: MiniLanterne,
    panneauDroite: PanneauDroite,
    panneauGauche: PanneauGauche,
    panneauInconnu: PanneauInconnu,
    pleinDePanneaux: PleinDePanneaux,
    pomme: Pomme,
    verre: Verre
}