import './Decor.css'
import { composants } from '../elementsDecor/registreElementsDecor'
import { Sol } from './Sol/Sol'
import { Ciel } from './Ciel/Ciel'
import type { Densite, ElementDecor } from '../../../types'

export function Decor(
  elements: ElementDecor[],
  densiteHerbe: Densite,
  densiteNuage: Densite
): HTMLDivElement {
  const decor = document.createElement('div')
  decor.className = 'decor'
  decor.append(
    Sol(densiteHerbe),
    Ciel(densiteNuage),
    ...elements.map(({ type, x, y }) => composants[type](x, y)))
  return decor
}