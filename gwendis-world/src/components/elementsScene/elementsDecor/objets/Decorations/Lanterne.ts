import LanterneURL from '../../../../../assets/images/objets/lanterne.png'

export function Lanterne(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = LanterneURL
  image.alt = 'Lanterne'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}