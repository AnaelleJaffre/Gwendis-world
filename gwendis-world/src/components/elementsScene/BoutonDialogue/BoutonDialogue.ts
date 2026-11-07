import './BoutonDialogue.css'

export function BoutonDialogue(texte: string, actionAuClic: () => void): HTMLButtonElement {
    const bouton: HTMLButtonElement = document.createElement('button')
    bouton.className = 'boutonDialogue'
    bouton.textContent = texte
    bouton.addEventListener('click', actionAuClic)
    return bouton
}