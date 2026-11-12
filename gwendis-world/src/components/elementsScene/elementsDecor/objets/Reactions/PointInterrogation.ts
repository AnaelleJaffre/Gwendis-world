import PointInterrogationURL from '../../../../../assets/images/reactions/point_interrogation.gif'

export function PointInterrogation(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PointInterrogationURL
  image.alt = 'Point d\'interrogation'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}