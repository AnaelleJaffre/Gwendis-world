import type { DonneesScene } from '../../../types'
import { Decor } from '../Decor/Decor'
import { Dialogue } from '../Dialogue/Dialogue'
import './Scene.css'

export function Scene(
  donneesScene: DonneesScene,
  hauteur: number = 300,
  largeur: number = 500
): HTMLDivElement {
  const scene: HTMLDivElement = document.createElement('div')
  scene.className = 'scene'
  scene.style.width = `${largeur}px`

  const dialogue: Dialogue = new Dialogue(donneesScene.dialogue, donneesScene.identifiantPremiereReplique)
  scene.append(Decor(donneesScene.elements, hauteur), dialogue.element)
  return scene
}