import './style.css'
import { Scene } from './components/Scene/Scene'
import type { DonneesScene } from './types'

const app = document.querySelector<HTMLDivElement>('#app')!

const histoire: Record<string, DonneesScene> = {
    scene1: {
        elements: [['arbre', 50, 30], ['arbre', 300, 25], ['gwendi', 200, 35]],
        debut: 'debut',
        dialogue: {
            debut: {
                texte: "Vous, c'est Gwendi. Bonjour, Gwendi. Vous allez bien ?",
                choix: [
                    {texte: "Ouai ouai", suite: "vousAllezBien"},
                    {texte: "Non.", suite: "vousAllezPasBien"},
                ]},
                vousAllezBien: {texte: "Je m'en fous."},
                vousAllezPasBien: {texte: "Super, on est deux."},
        },
    },
}

app.append(Scene(histoire.scene1))