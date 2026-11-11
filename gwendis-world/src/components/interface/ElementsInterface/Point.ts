import PointURL from '../../../assets/images/reactions/point.png'

export function Point(): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PointURL
  image.alt = 'Point'

  return image
}