import ChemineeURL from '../../../../../assets/images/objets/cheminee.png'

export function Cheminee(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = ChemineeURL
  image.alt = 'Cheminée'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}