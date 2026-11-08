import './Header.css'

export function Header(): HTMLElement {
    const header: HTMLElement = document.createElement('header')

    const titre: HTMLHeadingElement = document.createElement('h1')
    titre.textContent = "Gwendi's World"

    header.append(titre)

    return header
}