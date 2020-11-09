var express = require('express');
var router = express.Router();

/**
 * içi on importe notre controller via un require le nom est libre
 * ensuite on peux acceder a toutes ses fonction exporté 
 */
let ctrl = require("../controllers/controller");

//User routes ======================
router.get("/all", ctrl.getAll);
router.get("/one/:id", ctrl.getOne);
/**
 * exemple des autres routes pour un REST mais inutile pour le tuto
    router.post("/new", ctrl.new);
    router.put("/one/:id", ctrl.update);
    router.delete("/one/:id", ctrl.delete); 
*/
//======================================================

/**
 * içi on export toute notre router qui contient toutes nos routes 
 * on l'importe dans server.js
 */
module.exports = router;
