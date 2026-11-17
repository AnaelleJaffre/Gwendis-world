import { Arbre } from "./objets/Arbre/Arbre";
import { MaisonGwendi } from "./batiments/MaisonGwendi";
import { MaisonPrecheur } from "./batiments/MaisonPrecheur";
import { Poste } from "./batiments/Poste";
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
import { BigMosieur } from "./personnages/BigMosieur";
import { Boris } from "./personnages/Boris/Boris";
import { Dave } from "./personnages/Dave";
import { Giselle } from "./personnages/Giselle/Giselle";
import { Gwendi } from "./personnages/Gwendi/Gwendi";
import { Mimi } from "./personnages/Mimi";
import { Mosieur } from "./personnages/Mosieur/Mosieur";
import { Yves } from "./personnages/Yves";
import { FondMaisonPrecheur } from "./fonds/FondMaisonPrecheur";
import { TableBasse } from "./objets/Decorations/TableBasse";
import { Cheminee } from "./objets/Decorations/Cheminee";
import { Horloge } from "./objets/Decorations/Horloge";
import { BouleVoyante } from "./objets/Decorations/BouleVoyante";

export const composants: Record<string, (x:number, y:number) => HTMLElement> = {
    gwendi: Gwendi,
    arbre: Arbre,
    nuage: Nuage,
    particuleAir: ParticuleAir,
    poste: Poste,
    maisonGwendi: MaisonGwendi,
    maisonPrecheur: MaisonPrecheur,
    fondMaisonPrecheur: FondMaisonPrecheur,
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
    tableBasse: TableBasse,
    cheminee: Cheminee,
    horloge: Horloge,
    bouleVoyante: BouleVoyante,
    pomme: Pomme,
    verre: Verre,
    giselle: Giselle,
    mimi: Mimi,
    mosieur: Mosieur,
    bigMosieur: BigMosieur,
    yves: Yves,
    boris: Boris,
    dave: Dave
}