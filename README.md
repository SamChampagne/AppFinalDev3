# Cookbook Pro

Cookbook Pro est une application React où les utilisateurs peuvent découvrir et ajouter des recettes de cuisine. Il est également possible de créer un compte pour se connecter et personnaliser l'expérience.

## Fonctionnalités

- **Explorer des recettes** : Visualisez des recettes ajoutées par d'autres utilisateurs.
- **Ajouter vos propres recettes** : Connectez-vous pour ajouter vos recettes personnelles.
- **Création de compte et connexion** : Créez un compte pour pouvoir ajouter, modifier et gérer vos recettes.

## Installation

Pour cloner et exécuter l'application localement, suivez les étapes ci-dessous :

### Prérequis
- Node.js installé sur votre machine.
- npm installé.

### Étapes pour démarrer
1. Clonez ce repository :
   ```bash
   git clone https://github.com/username/AppFinalDev3.git
   cd AppFinalDev3

## Déploiement

L'application est hébergée sur Netlify. Vous pouvez accéder à la version en ligne à l'adresse suivante : https://finaldev3.netlify.app.

## API utilisée dans Cookbook Pro

Cookbook Pro utilise une API personnalisée développée spécifiquement pour l'application. Cette API permet aux utilisateurs de récupérer des recettes, d'en ajouter de nouvelles et de gérer leurs comptes utilisateur de manière sécurisée.

### Fonctionnalités de l'API :

1. **Authentification des utilisateurs** : L'API gère la création de comptes et la connexion des utilisateurs. Elle permet de vérifier les informations d'identification et de maintenir une session active pour chaque utilisateur.
   
2. **Gestion des recettes** :
   - **Récupérer des recettes** : Les utilisateurs peuvent consulter la liste des recettes partagées par la communauté.
   - **Ajouter une recette** : Une fois connecté, un utilisateur peut ajouter ses propres recettes avec des détails tels que le titre, les ingrédients et les instructions.
   - **Supprimer ou modifier des recettes** : Les utilisateurs peuvent mettre à jour ou supprimer leurs propres recettes.

3. **Gestion des données utilisateurs** : L'API permet de gérer les préférences et les recettes sauvegardées des utilisateurs, offrant une expérience plus personnalisée.

### Comment l'API est utilisée dans l'application

Dans l'application React, chaque fois qu'un utilisateur interagit avec une fonctionnalité qui nécessite des données (comme l'ajout ou la récupération de recettes), des requêtes HTTP sont envoyées à l'API via des appels `fetch` ou `axios`. Par exemple :
- Lorsqu'un utilisateur se connecte, une requête `POST` est envoyée à l'API pour authentifier les informations et obtenir un token de session.
- Lorsqu'une recette est ajoutée, une requête `POST` est envoyée à l'API avec les détails de la recette.
- Les recettes sont affichées dans l'application en récupérant les données de l'API via une requête `GET`.

Voici le github de l'api : https://github.com/SamChampagne/ApiFinalDev3
