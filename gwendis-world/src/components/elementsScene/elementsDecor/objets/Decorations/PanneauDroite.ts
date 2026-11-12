import PanneauDroiteURL from '../../../../../assets/images/objets/panneau_droite.png'

export function PanneauDroite(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PanneauDroiteURL
  image.alt = 'Panneau droite'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}