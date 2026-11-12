import LanternesDecoreesURL from '../../../../../assets/images/objets/lanternes_decorees.png'

export function LanternesDecorees(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = LanternesDecoreesURL
  image.alt = 'Lanternes décorées'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}