import MiniLanterneURL from '../../../../../assets/images/objets/mini_lanterne.png'

export function MiniLanterne(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = MiniLanterneURL
  image.alt = 'Mini lanterne'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}