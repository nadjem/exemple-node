// config.js tu peux trouver un exemple clair içi https://codingsans.com/blog/node-config-best-practices
const config = {
    app: {
      port: 3000
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'db'
    }
   };
   
   module.exports = config;