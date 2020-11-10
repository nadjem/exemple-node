var Schema = require('jugglingdb').Schema;
var config = require('../config/config')
var schema = new Schema('redis', {port: config.db.port});
var Files = require('./fileModel');
var User = schema.define('User', {
    username:  String,
    email:     String,
    password: String
});
User.hasMany(Files,   {as: 'files',  foreignKey: 'userId'});
module.exports = schema.models.User;
