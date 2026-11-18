import './Decor.css'
import { composants } from '../elementsDecor/registreElementsDecor'
import { Sol } from './Sol/Sol'
import { Ciel } from './Ciel/Ciel'
import { Air } from './Air/Air'
import { Fond } from './Fond/Fond'
import type { Densite, ElementDecor, NomFond } from '../../../types'
import { Gazon } from './Gazon/Gazon'

export function Decor(
  elements: ElementDecor[],
  densiteSol: Densite,
  densiteHerbe: Densite,
  densiteNuage: Densite,
  densiteAir: Densite,
  fond?: NomFond
): HTMLDivElement {
  const decor = document.createElement('div')
  decor.className = 'decor'

  if (fond !== undefined) {
    decor.append(Fond(fond))
  }

  decor.append(
    Sol(densiteSol),
    Ciel(densiteNuage),
    Air(densiteAir),
    ...elements.map(({ type, x, y, nom}) => composants[type](x, y, nom)),
    Gazon(densiteHerbe)
  )
  return decor
}