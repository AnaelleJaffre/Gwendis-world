import BigMosieurURL from '../../../../assets/images/personnages/bigMosieur.png'

export function BigMosieur(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = BigMosieurURL
  img.alt = 'Big Mosieur'
  img.className = 'element_decor'
  img.style.left = `${x}px`
  img.style.bottom = `${y}px`
  return img
}