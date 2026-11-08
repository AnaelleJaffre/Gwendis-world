import './Sol.css'
import { Herbe } from '../../elementsDecor/objets/Herbe/Herbe'
import type { Densite } from '../../../../types'

const FACTEUR_DENSITE: Record<Densite, number> = {
    peu: 8,
    normal: 25,
    beaucoup: 50
}

export function Sol(densite: Densite): HTMLDivElement {
    const sol: HTMLDivElement = document.createElement('div')
    sol.className = 'sol'

    for (let numeroBrin: number = 0; numeroBrin < FACTEUR_DENSITE[densite]; numeroBrin++) {
       const brin: HTMLElement = Herbe(0, 0)
       brin.style.left = `${Math.random() * 100}%`
       brin.style.bottom = `${Math.random() * 100}%`
       sol.append(brin)
    }

    return sol
}