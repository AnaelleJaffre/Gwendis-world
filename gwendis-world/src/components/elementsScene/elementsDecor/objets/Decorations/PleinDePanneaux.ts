import PleinDePanneauxURL from '../../../../../assets/images/objets/plein_de_panneaux.png'

export function PleinDePanneaux(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = PleinDePanneauxURL
  image.alt = 'Plein de panneaux'
  image.className = 'element_decor'
  image.style.left = `${x}px`
  image.style.bottom = `${y}px`
  return image
}