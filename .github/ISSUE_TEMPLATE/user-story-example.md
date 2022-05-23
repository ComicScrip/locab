---
name: User Story Example
about: Décris une fonctionnalité d'inscription qui peut servir de modèle à adpater
title: ''
labels: ''
assignees: ''
---

# Le besoin

En tant que que visiteur, je souhaite pouvoir m'inscrire, afin de recevoir des news et de pouvoir m'authentifier par la suite.

## Critères et considérations spécifiques

- [ ] Conformité aux écrans "Inscription" et "Validation email" sur la maquette
- [ ] L'utilisateur doit finaliser son inscription en validant son email
- [ ] Un système anti-bot doit être présent pour éviter les attaques DDoS
- [ ] La page doit avoir de très bonnes performances SEO (score lighthouse >90%)

## Scénarios de test (du point de vue de l'utilisateur)

### Cas d'utilisation 1 : bonnes infos

- Se rendre sur la page "inscription" accessible depuis l'URL `/signup`
- [ ] On voit bien un formulaire correspondant à la maquette
- Remplir le formulaire avec (email: dave.lopper@gmail.com, mot de passe: 67TRCXXs6$tt7)
- Réaliser le captcha et envoyer le formulaire
- [ ] Un message de succès apparait
- [ ] Je reçois un mail avec un lien sur l'adresse que je viens d'entrer
- Je clic sur "Valider mon email" à partir du message reçu dans ma boite
- [ ] J'atterris sur une page qui me confirme que mon email a bien été validé. Elle est conforme à la maquette.

### Cas d'utilisation 2 : email existant

- Faire une première inscription réussie et noter l'email utilisé
- Envoyer le formulaire avec des informations valides mais en reprenant l'email précédent.
- [ ] Le site avertit que l'email n'est plus disponible.

### Cas d'utilisation 3 : infos invalides

- Se rendre sur la page "inscription" accessible depuis l'URL `/signup`
- Tenter d'envoyer le formulaire avec des valeurs non valides (email vide ou au mauvais format, mot de passe vide ou avec moins de 8 caractères, captcha non-réalisé, ...)
- [ ] Des messages d'erreurs en dessous des différents champs doivent décrire ce qui ne va pas
- [ ] Le formulaire ne doit pas s'envoyer tant qu'il y a des erreurs de saisie

## Hors scope

- La connexion de l'utilisateur

## Tâches de développement

- [ ] Se renseigner sur Hcaptcha (https://www.hcaptcha.com/)
- [ ] Créer le model User dans le schéma prisma (id, firstName, lastName, hashedPassword)
- [ ] Créer `models/user.js` et implémenter une fonction de hashage de mot de passe et une fonction de création d'utilisateur en base de données avec validation des données.
- [ ] Créer la route d'API `POST /api/users` avec validation des données et du captcha
- [ ] Intégrer et cabler la page `/signup` avec l'API en prennant en compte tous les cas d'utilisation