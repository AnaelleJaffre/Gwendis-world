import type { Choix, DonneesDialogue, Replique } from '../../../types'
import { BoutonDialogue } from '../BoutonDialogue/BoutonDialogue'
import './Dialogue.css'

export class Dialogue {
  readonly element: HTMLDivElement = document.createElement('div')
  private readonly paragrapheReplique: HTMLParagraphElement = document.createElement('p')
  private readonly conteneurBoutons: HTMLDivElement = document.createElement('div')
  private readonly donneesDialogue: DonneesDialogue
  private readonly allerALaScene: (identifiantScene: string) => void

  /** Prepare les elements HTML du dialogue puis affiche la premiere replique. */
  constructor(donneesDialogue: DonneesDialogue, identifiantPremiereReplique: string, allerALaScene: (idendifiantScene: string) => void) {
    this.allerALaScene = allerALaScene
    this.donneesDialogue = donneesDialogue
    this.paragrapheReplique.className = 'dialogue_replique'
    this.element.append(this.paragrapheReplique, this.conteneurBoutons)
    this.afficherReplique(identifiantPremiereReplique)
    this.conteneurBoutons.className = 'dialogue_boutons'
  }

  /** Affiche le texte de la replique demandee et remplace les anciens boutons par ceux de cette replique. */
  private afficherReplique(identifiantReplique: string): void {
    const replique: Replique = this.donneesDialogue[identifiantReplique]
    this.paragrapheReplique.textContent = replique.texte

    const boutons: HTMLButtonElement[] = replique.choix.map(
      (choix: Choix): HTMLButtonElement =>
        BoutonDialogue(choix.texte, (): void => this.suivreChoix(choix))
    )
    this.conteneurBoutons.replaceChildren(...boutons)
  }

  /** Renvoie les choix a proposer : la scène ou la réplique suivante. */
  private suivreChoix(choix: Choix): void {
    if (choix.identifiantSceneSuivante !== undefined) {
      this.allerALaScene(choix.identifiantSceneSuivante)
    } else if (choix.identifiantRepliqueSuivante !== undefined) {
      this.afficherReplique(choix.identifiantRepliqueSuivante)
    }
  }
}