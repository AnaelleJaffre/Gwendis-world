import './Decor.css'
import { composants } from '../elementsDecor/registreElementsDecor'
import { Sol } from './Sol/Sol'
import type { Densite, ElementDecor } from '../../../types'

export function Decor(
  elements: ElementDecor[],
  densite: Densite
): HTMLDivElement {
  const decor = document.createElement('div')
  decor.className = 'decor'
  decor.append(
    Sol(densite),
    ...elements.map(({ type, x, y }) => composants[type](x, y)))
  return decor
}