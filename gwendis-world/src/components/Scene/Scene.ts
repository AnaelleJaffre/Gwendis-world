import './Scene.css'

type ElementDecor = [composant: (x: number, y:number) => HTMLImageElement, x: number, y: number]

export function Scene(
    description: string = "...",
    elements: ElementDecor[] = [],
    height: number = 300,
    width: number = 500):
    HTMLDivElement {

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
    decor.append(...elements.map(([composant, x, y]) => composant(x, y)))

    scene.append(decor, texte)
    return scene
}