import PanneauGaucheURL from '../../../../../assets/images/objets/panneau_gauche.png'

export function PanneauGauche(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PanneauGaucheURL
  image.alt = 'Panneau gauche'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}