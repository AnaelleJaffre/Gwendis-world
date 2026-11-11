import EtoileGifURL from '../../../assets/images/indications/etoile.gif'
import EtoileURL from '../../../assets/images/indications/etoile.png'

export function Etoile(): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = EtoileURL
  image.alt = 'Etoile'

  image.addEventListener('mouseenter', (): void => {
    image.src = EtoileGifURL
    image.style.cursor = "pointer"
  })

  image.addEventListener('mouseleave', (): void => {
    image.src = EtoileURL
  })

  return image
}