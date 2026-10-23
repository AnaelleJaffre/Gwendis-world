import './style.css'
import { Arbre } from './components/Arbre/Arbre'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(Arbre(200, 300), Arbre(900, 300))