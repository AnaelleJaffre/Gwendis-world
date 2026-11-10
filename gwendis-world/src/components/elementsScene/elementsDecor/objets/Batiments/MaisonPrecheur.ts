import MaisonDuPrecheur from '../../../../../assets/images/batiments/maison_du_precheur.png'

export function MaisonPrecheur(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = MaisonDuPrecheur
  image.alt = 'Maison du Prêcheur'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}