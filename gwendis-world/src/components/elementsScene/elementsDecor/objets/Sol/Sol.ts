import './Sol.css'
import { Herbe } from '../Herbe/Herbe'
import type { Densite } from '../../../../../types'

const PROPORTION_HAUTEUR_SOL: number = 0.1
const FACTEUR_DENSITE: Record<Densite, number> = {
    peu: 15,
    normal: 50,
    beaucoup: 100
}

export function Sol(densite: Densite, largeurDecor: number, hauteurDecor: number): HTMLDivElement {
    const sol: HTMLDivElement = document.createElement('div')
    sol.className = 'sol'

    const hauteurSol: number = hauteurDecor * PROPORTION_HAUTEUR_SOL
    const nombrebrins: number = FACTEUR_DENSITE[densite] * largeurDecor / 1000

    for (let numeroBrin: number = 0; numeroBrin < nombrebrins; numeroBrin++) {
        const positionX: number = Math.random() * largeurDecor
        const positionY: number = Math.random() * hauteurSol
        sol.append(Herbe(positionX, positionY))
    }

    return sol
}