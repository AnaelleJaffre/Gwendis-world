import type { Choix, DonneesDialogue, Replique } from '../../../types'
import { BoutonDialogue } from '../BoutonDialogue/BoutonDialogue'
import './Dialogue.css'

export class Dialogue {
  readonly element: HTMLDivElement = document.createElement('div')
  private readonly paragrapheReplique: HTMLParagraphElement = document.createElement('p')
  private readonly conteneurBoutons: HTMLDivElement = document.createElement('div')
  private readonly donneesDialogue: DonneesDialogue

  /** Prepare les elements HTML du dialogue puis affiche la premiere replique. */
  constructor(donneesDialogue: DonneesDialogue, identifiantPremiereReplique: string) {
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

    const boutons: HTMLButtonElement[] = this.listerChoix(replique).map(
      (choix: Choix): HTMLButtonElement =>
        BoutonDialogue(choix.texte, (): void => this.afficherReplique(choix.identifiantRepliqueSuivante))
    )
    this.conteneurBoutons.replaceChildren(...boutons)
  }

  /** Renvoie les choix a proposer : ceux de la replique, un seul bouton Continuer, ou aucun si le dialogue est fini. */
  private listerChoix(replique: Replique): Choix[] {
    if (replique.choix !== undefined) {
      return replique.choix
    }
    if (replique.identifiantRepliqueSuivante !== undefined) {
      return [{ texte: 'Continuer', identifiantRepliqueSuivante: replique.identifiantRepliqueSuivante }]
    }
    return []
  }
}