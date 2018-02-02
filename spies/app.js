const db = require('./db')

module.exports.handleSignup = (email, password) => {

    // check email exists

    // add user to db
    db.saveUser({email, password})

    // send welcome message

}