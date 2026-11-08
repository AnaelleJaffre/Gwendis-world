import './Decor.css'
import { composants } from '../../../composants'
import { Sol } from '../elementsDecor/objets/Sol/Sol'
import type { Densite, ElementDecor } from '../../../types'

export function Decor(
  elements: ElementDecor[],
  hauteur: number,
  largeur: number,
  densite: Densite
): HTMLDivElement {
  const decor = document.createElement('div')
  decor.className = 'decor'
  decor.style.height = `${hauteur}px`
  decor.append(
    Sol(densite, largeur, hauteur),
    ...elements.map(({ type, x, y }) => composants[type](x, y)))
  return decor
}