import PointSuspensionURL from '../../../../../assets/images/reactions/points_suspension.gif'

export function PointSuspension(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PointSuspensionURL
  image.alt = 'Points de suspension'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}