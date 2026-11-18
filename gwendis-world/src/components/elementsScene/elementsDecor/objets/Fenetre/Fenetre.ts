import { indexerUrlsParNom } from "../../../../../utils/indexerURLsParNom"

const URL_IMAGE_PAR_NOM: Record<string, string> = indexerUrlsParNom(
    import.meta.glob<string>('/src/assets/images/objets/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default',
    })
)

export function Fenetre(x:number, y:number, nom?: string): HTMLElement {
    const fenetre: HTMLImageElement = document.createElement('img')
    fenetre.className = "element_decor fenetre"
    fenetre.style.left = `${x}%`
    fenetre.style.bottom = `${y}%`

    if (nom === undefined || !(nom in URL_IMAGE_PAR_NOM)) {
        console.warn(`Image de fenetre introuvaaaaable : "${nom}"`)
        return fenetre
    }

    fenetre.src = URL_IMAGE_PAR_NOM[nom]
    fenetre.alt = 'Fenetre'
    return fenetre

}