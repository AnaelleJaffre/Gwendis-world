import './style.css'
import { Arbre } from "./components/Arbre/Arbre"
import { Scene } from './components/Scene/Scene'
import { Gwendi } from './components/Gwendi/Gwendi'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(Scene("Salut ! Vous, c'est Gwendi. Vous allez bien, Gwendi ?", [[Arbre, 50, 30], [Arbre, 300, 25], [Gwendi, 200, 35]]))
app.append(Scene("Ceci est une scène, bon ya rien mais... ouai.", [[Arbre, 50, 30], [Arbre, 300, 25], [Arbre, 80, 35]]))