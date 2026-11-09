import './Air.css'
import { ParticuleAir } from '../../elementsDecor/objets/ParticuleAir/ParticuleAir'
import type { Densite } from '../../../../types'

const FACTEUR_DENSITE: Record<Densite, number> = {
    peu: 4,
    normal: 9,
    beaucoup: 17
}

export function Air(densite: Densite): HTMLDivElement {
    const air: HTMLDivElement = document.createElement('div')
    air.className = 'air'

    for (let compteur: number = 0; compteur < FACTEUR_DENSITE[densite]; compteur++) {
       const particule: HTMLElement = ParticuleAir(0, 0)
       particule.style.left = `${Math.random() * 100}%`
       particule.style.bottom = `${Math.random() * 100}%`
       air.append(particule)
    }

    return air
}