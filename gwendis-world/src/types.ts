export type Choix = { texte: string; suite: string}
export type Phrase = { texte: string; suite?: string; choix?: Choix[]}
export type Dialogue = Record<string, Phrase>

export type DonneesScene = {
    elements: [nom: string, x:number, y:number][]
    dialogue: Dialogue
    debut: string
}