/** Extrait le nom d'un fichier sans son extension : "/src/.../foret.png" donne "foret". */
export function extraireNomFichier(chemin: string): string {
  const nomAvecExtension: string = chemin.split('/').pop() ?? ''
  return nomAvecExtension.replace(/\.[^.]+$/, '')
}

/** Transforme un objet { chemin: url } en objet { nomDuFichier: url }. */
export function indexerUrlsParNom(urlParChemin: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(urlParChemin).map(
      ([chemin, url]: [string, string]): [string, string] => [extraireNomFichier(chemin), url]
    )
  )
}