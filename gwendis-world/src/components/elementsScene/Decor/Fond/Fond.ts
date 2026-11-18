import type { NomFond } from '../../../../types';
import { indexerUrlsParNom } from '../../../../utils/indexerURLsParNom';
import './Fond.css'

const URL_FOND_PAR_NOM: Record<string, string> = indexerUrlsParNom(
    import.meta.glob<string>('/src/assets/images/fonds/*.{png, jpg, jpeg, webp}', {
        eager: true,
        import: 'default',
    })
)

export function fondExiste(nom: NomFond): boolean {
    return nom in URL_FOND_PAR_NOM
}

export function Fond(nom: NomFond): HTMLDivElement {
    const fond: HTMLDivElement = document.createElement('div')
    fond.className = "fond"
    if (!fondExiste(nom)) {
        console.warn(`Fond introuvable olalaaah: "${nom}"`)
        return fond
    }

    fond.style.backgroundImage = `url("${URL_FOND_PAR_NOM[nom]}")`
    return fond

}