
const data = [
    {id: 0, title:'premier',path:'/public/img/1.jpg'},
    {id: 1, title:'deuxieme',path:'/public/img/2.png'},
    {id: 2, title:'troisieme',path:'/public/img/3.gif'}
]

/**
 * içi on exporte tout notre controller en tant que module node
 * toute les fonction que l'on crée dans le module.export seront accessible depuis 
 * les autre fichier si on déclare un import/require CF:routes/api.js
 * ce qui est en dehors des balises de module.exports = { } comme le const data = [] n'aura qu'une porté local
 */

module.exports = {
    getAll: function(req, res) {
        return res.json({
            status: "ok",
            message: "all list ok",
            data: data
        });
    },
    getOne: function(req, res) {
        // find by req.params.id
        var result =  data.filter(function(d) {
            return d.id == req.params.id;
        });
        if(result.length){
            return res.status(200).json({
                status: "ok",
                message: "one data ok",
                data: result
            });
        }else{
            return res.status(200).json({
                status: "ko",
                message: "no data",
            });
        }
                
         
    },
    new: function(req,res){
        console.log(req.body)
        var user = new User;
        user = { username: req.body.username, email: req.body.email, password:req.body.password }
    }
}