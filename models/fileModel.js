var Schema = require('jugglingdb').Schema;
var config = require('../config/config')
var schema = new Schema('redis', {port: config.db.port});
var User = require('./userModel');

var File = schema.define('File', {
    title:  String,
    path:     String,
});

File.belongsTo(User, {as: 'owner', foreignKey: 'userId'});
module.exports = schema.models.User;