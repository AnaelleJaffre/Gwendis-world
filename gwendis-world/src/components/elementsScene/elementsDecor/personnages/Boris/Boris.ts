const images = import.meta.glob<string>('../../../../../assets/images/personnages/boris (*).png', {
  eager: true,
  import: 'default',
})

const sources = Object.values(images)

export function Boris(x: number, y: number): HTMLImageElement {
  const img = document.createElement('img')
  img.src = sources[Math.floor(Math.random() * sources.length)]
  img.className = 'element_decor'
  img.style.left = `${x}px`
  img.style.bottom = `${y}px`
  return img
}