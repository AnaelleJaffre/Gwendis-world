import type { DonneesScene } from '../../../types'
import { Decor } from '../Decor/Decor'
import { Dialogue } from '../Dialogue/Dialogue'
import './Scene.css'

export function Scene(
  donneesScene: DonneesScene,
  allerALaScene: (identifiantScene:string) => void,
): HTMLDivElement {
  const scene: HTMLDivElement = document.createElement('div')
  scene.className = 'scene'

  const dialogue: Dialogue = new Dialogue(donneesScene.dialogue, donneesScene.identifiantPremiereReplique, allerALaScene)
  scene.append(Decor(donneesScene.elements, donneesScene.densiteHerbe), dialogue.element)
  return scene
}