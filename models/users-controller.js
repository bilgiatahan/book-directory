const User = require('./user-account')
const books = require('../books')

const users = [{ id: 1, username: 'test', password: 'test', books: books },
{ id: 2, username: 'ugurlu', password: 'test1', books: books }];

module.exports = {
    authenticate,
    openAccount,
    getUser,
    getUsername,
};

function openAccount(user) {
    const newuser = new User(user.name, user.username, user.email, user.password)
    users.push( newuser.property() )
}

function getUser(id) {
    const index = users.find(element => element.id.toString() === id)
    if (index)
        return index
    else
        return false
}
function getUsername(id) {
    const index = users.find(element => element.id.toString() === id)
    if (index)
        return index.username
}
async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}
