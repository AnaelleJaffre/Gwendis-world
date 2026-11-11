import PointExclamationURL from '../../../../../assets/images/reactions/point_exclamation.gif'

export function PointExclamation(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PointExclamationURL
  image.alt = 'Point d\'exclamation'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}