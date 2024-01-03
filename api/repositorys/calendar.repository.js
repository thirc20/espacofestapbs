const createHttpError = require('http-errors');
const sequelizedb = require('../../db');
const calendar = require('../models/calendar.model');

async function listAllScheduling(){

    let database = await sequelizedb.sync()
    
    try{
        const allScheduling = await calendar.findAll()

        return allScheduling
    }
    catch (error) {
        return createHttpError(error) 
    }
}

async function createNewScheduling(data){

    let database = await sequelizedb.sync()

    let dataScheduling = {
        day: data.day,
        month: data.month,
        year: data.year,
        flag: "dayRed",
        client: data.client
    }
    
    try{
        const allScheduling = await calendar.create(dataScheduling)

        return allScheduling
    }
    catch (error) {
        return createHttpError(error) 
    }
}

async function confirmScheduling(data){

    let database = await sequelizedb.sync()
    
    try{
        return await saveConfirmScheduling(data)
    }
    catch (error) {
        return createHttpError(error) 
    }
}

async function freeDay(data){

    let database = await sequelizedb.sync()
    
    try{
        console.log(data)
        return await saveFreeDay(data)
    }
    catch (error) {
        return createHttpError(error) 
    }
}

async function saveConfirmScheduling(id){
    try{
        let data = await calendar.findOne({where: {
            day: id.day,
            month: id.month,
            year: id.year
        }})

        data.flag = "dayGreen"
        return data.save()
    }
    catch (error){
        return createHttpError(error) 
    }
}

async function saveFreeDay(id){
    try{
        let data = await calendar.findOne({where: {
            day: id.day,
            month: id.month,
            year: id.year
        }})

        data.flag = ""
        return data.save()
    }
    catch (error){
        return createHttpError(error) 
    }
}

module.exports = {
    listAllScheduling,
    createNewScheduling,
    confirmScheduling,
    freeDay
}