const images = import.meta.glob<string>('../../../../../assets/images/herbe/*.png', {
  eager: true,
  import: 'default',
})

const sources = Object.values(images)

export function Herbe(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = sources[Math.floor(Math.random() * sources.length)]
  img.className = 'element_decor'
  img.style.left = `${x}%`
  img.style.bottom = `${y}%`
  return img
}