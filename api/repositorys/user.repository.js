const sequelizedb = require('../../db');
const user = require('../models/user.model');

async function createUser(userData){
    
    let database = await sequelizedb.sync()

    try {
        
        let data = {
            name: "Admin",
            email: "agentemarketingepublicidade@gmail.com",
            password: "Espaco@2023pbs"         
        }
        const createUser = await user.create(data)
        console.log(createUser)

        return createUser
    
    } catch (error) {
        console.error(error)
        
    }

}

async function findAllUsers(pass){

    let database = await sequelizedb.sync()

    try {

        const allUsers = await user.findOne({where: {password: pass}})
        
        if(allUsers.password == pass){
            return allUsers.confirm = 'confirm'
           
        }
        else {
            return "Usuário Incorreto"
        }

    } catch (error) {
        console.error(error)
    
    }
}


module.exports = {createUser, findAllUsers}