import './style.css'
import arbre from './assets/images/arbres/arbre (1).png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <h1>Arbre !!</h1>
  <div class="hero">
    <img src="${arbre}">
  </div>
</section>
`