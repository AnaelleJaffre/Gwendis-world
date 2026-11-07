import { composants } from '../../../composants'
import type { ElementDecor } from '../../../types'
import './Decor.css'

export function Decor(elements: ElementDecor[], height: number): HTMLDivElement {
  const decor = document.createElement('div')
  decor.className = 'decor'
  decor.style.height = `${height}px`
  decor.append(...elements.map(({ type, x, y }) => composants[type](x, y)))
  return decor
}