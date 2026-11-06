import { Arbre } from "../Arbre/Arbre"
import './Scene.css'

export function Scene(description: string = "...", height: number = 300, width: number = 500): HTMLDivElement {
    const scene = document.createElement('div')
    scene.style.width = `${width}px`
    scene.className = 'scene'
    
    const texte = document.createElement('p')
    texte.className = 'scene_description'
    texte.style.textAlign = 'center'
    texte.textContent = description
    
    const decor = document.createElement('div')
    decor.className = 'decor'
    decor.style.height = `${height}px`
    decor.style.width = `100%`
    decor.style.margin = 'auto'
    decor.append(Arbre(100, 25), Arbre(400, 45), Arbre(60, 40))

    scene.append(decor, texte)
    return scene
}