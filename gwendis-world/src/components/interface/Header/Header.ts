import './Header.css'
import { registreElementsInterface } from '../registeElementsInterface'

export function Header(): HTMLElement {
    const header: HTMLElement = document.createElement('header')

    const titre: HTMLHeadingElement = document.createElement('h1')
    titre.textContent = "Gwendi's World"

    const panneauGauche: HTMLDivElement = document.createElement('div')
    panneauGauche.className = 'panneau_gauche'
    const logoAccueil: HTMLElement = registreElementsInterface['etoile']()
    logoAccueil.className = 'logo_accueil'
    panneauGauche.append(logoAccueil)

    const panneauDroite: HTMLDivElement = document.createElement('div')
    panneauDroite.className = 'panneau_droite'

    header.append(panneauGauche, titre, panneauDroite)

    return header
}