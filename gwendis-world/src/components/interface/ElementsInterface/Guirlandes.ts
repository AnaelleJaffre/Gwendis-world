import GuirlandeDroiteURL from '../../../assets/images/banniere/guirlande_droite.png'
import GuirlandeGaucheURL from '../../../assets/images/banniere/guirlande_gauche.png'
import GuirlandeFaceURL from '../../../assets/images/banniere/guirlande.png'
import type { Sens } from '../../../types'

const URL_GUIRLANDE_PAR_SENS: Record<Sens, string> = {
  gauche: GuirlandeGaucheURL,
  droite: GuirlandeDroiteURL,
  face: GuirlandeFaceURL
}

export function Guirlande(sens: Sens): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  
  image.src = URL_GUIRLANDE_PAR_SENS[sens]
  image.alt = 'guirlande'

  return image
}