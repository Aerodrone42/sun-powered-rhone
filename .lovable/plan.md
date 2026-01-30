

# Création de la page Blog

## Résumé

Je vais créer une page Blog vide (prête à accueillir de futurs articles) et l'ajouter dans la navigation principale du site, positionnée entre "Tarifs & Aides" et "Contact".

---

## Ce qui sera fait

### 1. Nouvelle page Blog
- Page avec un design cohérent avec le reste du site (Header, Footer, style solaire)
- Section hero avec titre "Blog" et description
- Section vide préparée pour accueillir de futurs articles (message indiquant que les articles arrivent bientôt)
- Pas d'articles pré-remplis

### 2. Mise à jour de la navigation
Le lien "Blog" sera ajouté dans le menu entre "Tarifs & Aides" et "Contact" :
- Accueil
- Services Particuliers
- Services Professionnels
- Simulateur
- Tarifs & Aides
- **Blog** ← nouveau
- Contact

### 3. Nouvelle route
Ajout de `/blog` dans les routes de l'application.

---

## Détails techniques

| Fichier | Action |
|---------|--------|
| `src/pages/Blog.tsx` | Création de la nouvelle page |
| `src/components/Header.tsx` | Ajout du lien "Blog" dans la navigation (ligne 54) |
| `src/App.tsx` | Ajout de la route `/blog` |

