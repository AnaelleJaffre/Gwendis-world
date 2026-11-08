import './style.css'
import { Scene } from './components/elementsScene/Scene/Scene'
import type { Histoire } from './types'
import donnees from './histoire.json'

const histoire: Histoire = donnees
const app = document.querySelector<HTMLDivElement>('#app')!

function afficherScene(identifiantScene: string): void {
    app.replaceChildren(Scene(histoire[identifiantScene], afficherScene))
}

afficherScene('introduction')