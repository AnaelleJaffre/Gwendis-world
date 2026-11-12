import PanneauInconnuURL from '../../../../../assets/images/objets/panneau_inconnu.png'

export function PanneauInconnu(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PanneauInconnuURL
  image.alt = 'Panneau inconnu'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}