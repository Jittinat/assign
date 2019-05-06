'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListControllers')

    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createAUser)

    app.route('/users/:userId')
        .get(userList.readAUser)
        .delete(userList.deleteAUser)
        .post(userList.updateAUser)
    
    app.route('/auth/:username')
        .get(userList.listAllAccounts)
}