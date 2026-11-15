import FondMaisonPrecheurURL from '../../../../assets/images/fonds/mur_maison_precheur.png'

export function FondMaisonPrecheur(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = FondMaisonPrecheurURL
  image.alt = 'Mur de la maison du prêcheur'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}