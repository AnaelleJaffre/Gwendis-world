import './Ciel.css'
import { Nuage } from '../../elementsDecor/objets/Nuage/Nuage'
import type { Densite } from '../../../../types'

const FACTEUR_DENSITE: Record<Densite, number> = {
    peu: 2,
    normal: 6,
    beaucoup: 15
}

export function Ciel(densite: Densite): HTMLDivElement {
    const ciel: HTMLDivElement = document.createElement('div')
    ciel.className = 'ciel'

    for (let compteur: number = 0; compteur < FACTEUR_DENSITE[densite]; compteur++) {
       const instanceNuage: HTMLElement = Nuage(0, 0)
       instanceNuage.style.left = `${Math.random() * 100}%`
       instanceNuage.style.top = `${Math.random() * 100}%`
       ciel.append(instanceNuage)
    }

    return ciel
}