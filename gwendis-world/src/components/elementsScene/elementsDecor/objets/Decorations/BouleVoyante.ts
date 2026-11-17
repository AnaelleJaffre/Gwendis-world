import BouleVoyanteURL from '../../../../../assets/images/objets/boule_voyante.png'

export function BouleVoyante(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = BouleVoyanteURL
  image.alt = 'Boule de Voyante'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}