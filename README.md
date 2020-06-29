# Projet de formation - Microbloggos

Dans le cadre de la formation de la Coding Academy de Lyon, réalisation d'un site web type Twitter permettant de poster des messages, de suivre ou ne plus suivre des utilisateurs.


## Prérequis et installation

Pour utiliser cette application web, il faut installer au préalable :
* Node version v12.16.3 ou supérieur.
* MongoDB version v4.2.7 ou supérieur.
* Npm (version 6.14.4 ou supérieur) OU Yarn (version 1.22.4 ou supérieur) 

Pour installer cette application web : 

* 1 - Cloner le repertoire.
* 2 - Installer les dépendances coté serveur :
    ```
    $ cd server
    $ npm install OU yarn install
    ```
* 3 - Installer les dépendances coté client :
    ```
    $ cd client
    $ npm install OU yarn install
    ```

### Lancer l'application

* 1 - Lancer MongoDB :
    ```
    $ sudo mongod --port votrePort
    $ sudo mongo --port votrePort
    ```
* 2 - Lancer le server :
    ```
    $ cd server
    $ yarn start OU npm start
    ```
* 3 - Lancer le client :
    ```
    $ cd client
    $ yarn start OU npm start
    ```
* 4 - Lancer le navigateur Web de votre choix et aller sur http://localhost:3000


## Front End

* React

## Back End

* API avec NodeJs et Express.
* Database avec MongoDB.