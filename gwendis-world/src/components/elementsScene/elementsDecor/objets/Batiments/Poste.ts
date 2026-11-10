import ImagePoste from '../../../../../assets/images/batiments/poste.png'

export function Poste(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = ImagePoste
  image.alt = 'Poste'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}