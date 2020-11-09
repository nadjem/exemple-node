# Exemple Node

#### Run:

```js
 "scripts": {
    "start": "node index.js", // lancer le serveur
    "start:dev": "nodemon index.js" 
    /* 
    lancer le serveur avec nodemon avec le live
    reload lorsque l'on change le code ou que l'app crash 
    */
  },
```

#### Content:

- ./config/config.js
 
    > Fichier de config de l'app.
---

 - ./controllers/controller.js

    > Exemple de controller 
---

 - ./dist 
 
    > Dossier public contenant le html à servir et ou les fichier static.
---

 - ./routes/api.js

    > Fichier contenant le router avec les routes de l'API.
---

- ./index.js 

    > le fichier du server.       