import TableBasseURL from '../../../../../assets/images/objets/table_basse.png'

export function TableBasse(x:number, y:number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = TableBasseURL
  image.alt = 'Table basse'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`
  return image
}