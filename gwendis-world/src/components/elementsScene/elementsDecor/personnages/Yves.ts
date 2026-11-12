import YvesURL from '../../../../assets/images/personnages/yves.png'

export function Yves(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = YvesURL
  img.alt = 'Yves'
  img.className = 'element_decor'
  img.style.left = `${x}px`
  img.style.bottom = `${y}px`
  return img
}