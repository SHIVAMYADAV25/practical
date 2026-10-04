// npm login
// npm login --auth-type=web
// npm whoami

// npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN

// npm publish --access public

function addUser(name,email){
    return{
        name,
        email,
        message : "User added Successfully"
    }
}

function displayUser(user){
     return `Name: ${user.name} Email: ${user.email} Status: ${user.message}`;
}

export {
    addUser,
    displayUser
}