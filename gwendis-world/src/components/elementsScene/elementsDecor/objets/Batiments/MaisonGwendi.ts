import MaisonDeGwendi from '../../../../../assets/images/batiments/maison_de_gwendi.png'

export function MaisonGwendi(x: number, y: number): HTMLImageElement {
  const image: HTMLImageElement = document.createElement('img')
  image.src = MaisonDeGwendi
  image.alt = 'Maison de Gwendi'
  image.className = 'element_decor'
  image.style.left = `${x}%`
  image.style.bottom = `${y}%`

  image.addEventListener('mouseenter', (): void => {
    image.style.cursor = "pointer"
    // Proposer un texte pour entrer dans la maison
  })

  // Au clic, entrer dans la maison

  return image
}