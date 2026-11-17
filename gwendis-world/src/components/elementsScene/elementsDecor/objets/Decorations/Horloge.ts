import HorlogeURL from '../../../../../assets/images/objets/horloge.png'

export function Horloge(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = HorlogeURL
  image.alt = 'Horloge'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}