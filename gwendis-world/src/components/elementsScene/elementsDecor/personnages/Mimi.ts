import MimiURL from '../../../../assets/images/personnages/mimi.png'

export function Mimi(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = MimiURL
  img.alt = 'Mimi'
  img.className = 'element_decor'
  img.style.left = `${x}%`
  img.style.bottom = `${y}%`
  return img
}