import './style.css'
import { Scene } from './components/elementsScene/Scene/Scene'
import type { Histoire } from './types'
import donnees from './histoire.json'
import { Header } from './components/interface/Header/Header'

const app = document.querySelector<HTMLDivElement>('#app')!
const conteneurScene: HTMLDivElement = document.createElement('div')
conteneurScene.className = 'conteneur_scene'

const histoire: Histoire = donnees as Histoire

const CLE_SAUVEGARDE_SCENE: string = 'identifiantSceneActuelle'
const IDENTIFIANT_SCENE_DEPART: string = 'introduction'

// Affiche la scene demandee et memorise son identifiant afin de creer une mini sauvegarde
function afficherScene(identifiantScene: string): void {
    localStorage.setItem(CLE_SAUVEGARDE_SCENE, identifiantScene)
    conteneurScene.replaceChildren(Scene(histoire[identifiantScene], afficherScene))
}

// Verifie si on a deja une scene en memoire, sinon, donne la scene d'intro
function lireSceneSauvegardee(): string {
    const identifiantSauvegarde: string | null = localStorage.getItem(CLE_SAUVEGARDE_SCENE)
    if (identifiantSauvegarde !== null && identifiantSauvegarde in histoire) {
        return identifiantSauvegarde
    }
    return IDENTIFIANT_SCENE_DEPART
}

function retournerAccueil(): void {
    afficherScene(IDENTIFIANT_SCENE_DEPART)
}

// Rendu : header, scene
app.append(Header(retournerAccueil), conteneurScene)
afficherScene(lireSceneSauvegardee())