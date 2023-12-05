const sequelizedb = require('../../db');
const user = require('../models/user.model');

async function createUser(userData){
    
    let database = await sequelizedb.sync()
    console.log(database)

    try {
        
        let data = {
            name: "Thiago Reis",
            email: "contatothiagoreis01@gmail.com",
            password: "210057trC*"         
        }
        const createUser = await user.create(data)
        console.log(createUser)

        return createUser
    
    } catch (error) {
        console.error(error)
        
    }

}

async function findAllUsers(){

    let database = await sequelizedb.sync()

    try {

        const allUsers = user.findAll()
        
        return allUsers

    } catch (error) {
        console.error(error)
    
    }
}


module.exports = {createUser, findAllUsers}