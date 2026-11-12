import PommeURL from '../../../../../assets/images/objets/pomme.png'

export function Pomme(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PommeURL
  image.alt = 'Pomme'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}