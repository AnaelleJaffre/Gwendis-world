import LumiereTresLongue from '../../../assets/images/banniere/lumieres (2).png'
import LumiereLongue from '../../../assets/images/banniere/lumieres (3).png'
import LumiereMoyenne from '../../../assets/images/banniere/lumieres (4).png'
import LumiereCourte from '../../../assets/images/banniere/lumieres (5).png'
import LumiereTresCourte from '../../../assets/images/banniere/lumieres (1).png'
import type { LongueurLumieres } from '../../../types'

const URL_LUMIERE_PAR_LONGUEUR: Record<LongueurLumieres, string> = {
  tresLong: LumiereTresLongue,
  long: LumiereLongue,
  moyen: LumiereMoyenne,
  court: LumiereCourte,
  tresCourt: LumiereTresCourte
}

export function Lumiere(longueur: LongueurLumieres): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  
  image.src = URL_LUMIERE_PAR_LONGUEUR[longueur]
  image.alt = 'Lumière'

  return image
}