import { composants } from '../../composants'
import type { Choix, DonneesScene } from '../../types'
import './Scene.css'

export function Scene(
    {elements, dialogue, debut}: DonneesScene,
    height: number = 300,
    width: number = 500):
    HTMLDivElement {

    const scene = document.createElement('div')
    scene.style.width = `${width}px`
    scene.className = 'scene'
    
    const texte = document.createElement('p')
    texte.className = 'scene_description'
    texte.style.textAlign = 'center'
    
    const decor = document.createElement('div')
    decor.className = 'decor'
    decor.style.height = `${height}px`
    decor.style.width = `100%`
    decor.style.margin = 'auto'
    decor.append(...elements.map(([nom, x, y]) => composants[nom](x, y)))

    const boutons = document.createElement('div')

    function afficher(id: string) {
        const phrase = dialogue[id]
        texte.textContent = phrase.texte
        boutons.replaceChildren()

        const options: Choix[] = phrase.choix
        ?? (phrase.suite? [{ texte: 'Continuer', suite: phrase.suite}] : [])

        for (const option of options) {
            const bouton = document.createElement('button')
            bouton.textContent = option.texte
            bouton.onclick = () => afficher(option.suite)
            boutons.append(bouton)
        }
    }

    afficher(debut)
    scene.append(decor, texte, boutons)
    return scene
}