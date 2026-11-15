import './Sol.css'
import { RainureSol } from '../../elementsDecor/objets/RainureSol/RainureSol'
import type { Densite } from '../../../../types'

const FACTEUR_DENSITE: Record<Densite, number> = {
    peu: 0,
    normal: 2,
    beaucoup: 4
}

export function Sol(densite: Densite): HTMLDivElement {
    const sol: HTMLDivElement = document.createElement('div')
    sol.className = 'sol'

    for (let numeroRainure: number = 0; numeroRainure < FACTEUR_DENSITE[densite]; numeroRainure++) {
       const rainure: HTMLElement = RainureSol(0, 0)
       rainure.style.left = `${Math.random() * 100}%`
       rainure.style.bottom = `${Math.random() * 100}%`
       sol.append(rainure)
    }

    return sol
}