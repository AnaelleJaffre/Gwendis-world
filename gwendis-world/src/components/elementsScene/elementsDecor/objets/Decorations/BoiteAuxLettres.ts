import BoiteAuxLettresURL from '../../../../../assets/images/objets/boite_aux_lettres.png'

export function BoiteAuxLettres(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = BoiteAuxLettresURL
  image.alt = 'Boîte aux lettres'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}