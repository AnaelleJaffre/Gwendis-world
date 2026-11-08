// Etoile.ts
import urlEtoile from '../../../assets/images/indications/etoile.gif'

export function Etoile(): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = urlEtoile
  image.alt = 'Etoile'
  return image
}