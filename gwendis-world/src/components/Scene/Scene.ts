import { Arbre } from "../Arbre/Arbre"

export function Scene(description: string = "..."): HTMLDivElement {
    const scene = document.createElement('div')
    scene.className = 'scene'

    const texte = document.createElement('p')
    texte.className = 'scene_description'
    texte.textContent = description

    scene.append(Arbre(100, 300), Arbre(900, 300))

    scene.appendChild(texte)
    return scene
}