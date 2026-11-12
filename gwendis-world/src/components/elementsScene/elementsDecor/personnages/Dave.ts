import DaveURL from '../../../../assets/images/personnages/dave.png'

export function Dave(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = DaveURL
  img.alt = 'Dave, le plus cool de tous les surfeurs !'
  img.className = 'element_decor'
  img.style.left = `${x}%`
  img.style.bottom = `${y}%`
  return img
}