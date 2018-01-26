const db = require('./app')

module.exports.handleSignup = (email, password) => {

    // check email exists

    // add user to db
    db.handleSignup({email, password})

    // send welcome message

}