# TP-todo-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Travail à réaliser

L'application doit présenter au minimum trois interfaces à l'utilisateur, selon les modalités de votre choix :
- Accès à la liste des Todos
- Accès aux détails d'un Todo
- Création/Modification/Suppression d'un Todo

#### Elements demandés

**Make it real**  
Concevoir et développer l'application client avec les trois interfaces demandées.

**Todo or not to do**  
Le statut "terminé" des Todos doit pouvoir être modifié depuis la liste des todos comme depuis les details de l'un. De la même façon il doit pouvoir être modifié et supprimé au moins depuis les détails.

**What's in the box**  
Cliquer sur le titre d'un Todo depuis la liste doit afficher les détails de celui-ci.

**Come as you are**  
Afin d'être utilisable par le plus grand nombre, l'application web devra être adaptable (responsive), et au minimum suivre les critères d'accessibilité immédiats (WCAG level A).

#### [Bonus]

**Filtrage**  
Proposer à l'utilisateur une interface claire sur la liste des posts afin de filtrer ceux-ci selon leur statut (afficher tout, n'afficher que les terminés, n'afficher que les en cours).

**Too many things to do**  
Gérer gracieusement les cas où trop de Todos sont enregistrés pour être tous chargés par défaut: pagination, infinite scroll, "Charger plus"...

**My String is Rich...**  
La description d'un Todo (le champ `content`) profiterait à pouvoir être du texte riche (gras, italique, images, liens, ...). Mettre en place un système permettant d'interpréter ce contenu pour le transformer en HTML valide. Un bon format pourrait être le Markdown.

**...But my Users are Poor**  
Si vous avez mis en place un format de contenu riche (cf bonus précédent), une élément de sympathie pour nos utilisateurs pourrait être de leur fournir un éditeur graphique.

**Accepter, Suivant, Suivant**  
Rendre l'application installable: PWA ou appli mobile hybride par exemple.
