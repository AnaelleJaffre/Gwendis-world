# Logique fonctionnelle

Toute l'histoire est décrite dans le fichier JSON [histoire.json](/gwendis-world/src/histoire.json). Elle se décompose en **scènes**.

## Scènes
Chaque scène possède : 
1. Des **éléments de décor** : ce sont par exemple les arbres, les maisons, les vents, donc des images avec leur position (x,y) dans la scène (left, bottom).
2. Des lignes de **dialogue** : ce sont des phrases avec potentiellement des réactions différentes selon la réponse du joueur, et éventuellement, des liens vers d'autres scènes en fonction des choix.
3. L'**identifiant de la 1e répliqu**e : pour savoir où commencer.

Cette logique est décrite dans le fichier [types.ts](/gwendis-world/src/types.ts), dans le type `DonneesScene`.
