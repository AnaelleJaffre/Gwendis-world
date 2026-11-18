export type Choix = {
  texte: string
  identifiantRepliqueSuivante?: string
  identifiantSceneSuivante?: string
}
export type Replique = {
  texte: string
  choix: Choix[]
}
export type DonneesDialogue = Record<string, Replique>
export type ElementDecor = { type: string; x: number; y: number; nom?: string}
export type DonneesScene = {
    elements: ElementDecor[]
    dialogue: DonneesDialogue
    identifiantPremiereReplique: string
    fond?: NomFond
    densiteSol: Densite
    densiteHerbe: Densite
    densiteNuage: Densite
    densiteAir: Densite
}
export type Histoire = Record<string, DonneesScene>
export type Densite = 'peu' | 'normal' | 'beaucoup'
export type Sens = 'droite' | 'gauche' | 'face'
export type LongueurLumieres = 'tresLong' | 'long' | 'moyen' | 'court' | 'tresCourt'
export type NomFond = string