import './style.css'
import { Arbre } from "./components/Arbre/Arbre"
import { Scene } from './components/Scene/Scene'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(Scene("Ceci est une scène, bon ya rien mais... ouai.", [[Arbre, 50, 30], [Arbre, 300, 25], [Arbre, 80, 35]]))