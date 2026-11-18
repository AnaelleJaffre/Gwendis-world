import './Header.css'
import { registreElementsInterface } from '../registeElementsInterface'

export function Header(retournerAccueil: () => void): HTMLElement {
    const header: HTMLElement = document.createElement('header')

    const titre: HTMLHeadingElement = document.createElement('h1')
    titre.textContent = "Gwendi's World"

    // Panneau gauche
    const panneauGauche: HTMLDivElement = document.createElement('div')
    panneauGauche.className = 'panneau_gauche'
    
    const retourAccueil: HTMLDivElement = document.createElement('div')
    retourAccueil.className = "retour_accueil"
    retourAccueil.addEventListener('click', retournerAccueil)
    retourAccueil.style.cursor = "pointer"

    const logoAccueil: HTMLElement = registreElementsInterface['etoile']()
    logoAccueil.className = 'logo_accueil'
    retourAccueil.append(logoAccueil)
    
    const texteRetourAccueil: HTMLElement = document.createElement('p')
    texteRetourAccueil.textContent = "Tout recommencer"
    retourAccueil.append(texteRetourAccueil)
    
    panneauGauche.append(retourAccueil)
    
    // Panneau droite
    const panneauDroite: HTMLDivElement = document.createElement('div')
    panneauDroite.className = 'panneau_droite'

    header.append(panneauGauche, titre, panneauDroite)

    return header
}