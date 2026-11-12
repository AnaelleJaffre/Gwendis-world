import BanniereDroiteURL from '../../../assets/images/banniere/banniere_droite.png'
import BanniereGaucheURL from '../../../assets/images/banniere/banniere_gauche.png'
import type { Sens } from '../../../types'

const URL_BANNIERE_PAR_SENS: Record<Sens, string> = {
  gauche: BanniereGaucheURL,
  droite: BanniereDroiteURL,
  face: "Il n'y a pas de bannière de face, détrompez-vous."
}

export function Banniere(sens: Sens): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  
  image.src = URL_BANNIERE_PAR_SENS[sens]
  image.alt = 'Bannière'

  return image
}