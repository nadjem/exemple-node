let express = require( 'express' );
let app = express();
let bodyParser = require('body-parser');
// on declare notre fichier de config
let config = require('./config/config')
// on recupere une info depuis config
let port = config.app.port;
// on declare notre fichier de route
let api = require('./routes/api');

/**
 *   on regle a l'arrache les problême de CORS à la place de * on peux restreindre a une ou plusieur URL d'origin 
 *   içi le le app.use avec req res next permet de faire une sorte de middlware pour chaque requete sortant de Node 
 *   a chaque fois il rajoute les headers 
*/
app.use(function(req, res, next) {
  res.header('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/**
 *  la on declare le dossier static accessible depuis http://localhost:8080/public
 */
app.use('/public', express.static(__dirname + '/dist'));
app.use('/public/img', express.static(__dirname + '/dist/files/'));

/**
 * bodyParser permet de gérer les donnés reçus depuis un formulaire par exemple pour recuperer le body d'une requete ou param
 */
let jsonParser = bodyParser.json({limit:1024*1024*20, type:'application/json'});
let urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoding' })
app.use(jsonParser);
app.use(urlencodedParser)

/**
 * ici on demande a app d'utiliser les routes dans notre fichier api declaré plus haut en prefixant chaque route par /api
 */
app.use('/api' ,api);
/**
 *  ici une route juste pour te montrer un exemple de route si le server te sert a deployer ton app vue ou react
 *  ici une route juste pour te montrer un exemple de route si le server te sert a deployer ton app vue ou react
 */
app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});

/**
 * no comment :p
 */
app.listen(port, function () {
    console.log('access app at http://localhost:%d', port);
    console.log(`access app at http://localhost:${port}`);
});