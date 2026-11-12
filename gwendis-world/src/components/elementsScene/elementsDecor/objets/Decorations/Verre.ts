import VerreURL from '../../../../../assets/images/objets/verre.png'

export function Verre(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = VerreURL
  image.alt = 'Verre'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}