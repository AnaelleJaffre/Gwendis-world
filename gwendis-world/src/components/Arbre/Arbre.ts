const images = import.meta.glob<string>('../../assets/images/arbres/*.png', {
  eager: true,
  import: 'default',
})

const sources = Object.values(images)

export function Arbre(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = sources[Math.floor(Math.random() * sources.length)]
  img.className = 'decor'
  img.style.left = `${x}px`
  img.style.bottom = `${y}px`
  return img
}