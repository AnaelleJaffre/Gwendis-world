import urlEtoileGif from '../../../assets/images/indications/etoile.gif'
import urlEtoile from '../../../assets/images/indications/etoile.png'

export function Etoile(): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = urlEtoile
  image.alt = 'Etoile'

  image.addEventListener('mouseenter', (): void => {
    image.src = urlEtoileGif
    image.style.cursor = "pointer"
  })

  image.addEventListener('mouseleave', (): void => {
    image.src = urlEtoile
  })

  return image
}