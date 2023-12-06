const express = require('express');
const router = express.Router();
const path = require('path');
const { findAllUsers, createUser } = require('./repositorys/user.repository');
const { createNewScheduling, findOneScheduling, listAllScheduling, confirmScheduling } = require('./repositorys/calendar.repository');

// Rota Home
router.get('/', async (req, res) => {
    
    try {

        res.sendFile(path.join(__dirname, 'views', '../../views/index.html'));

    } catch (error) {
        console.error(error)
    }

});

router.get('/admin', async (req, res) => {
    
    try {

        res.sendFile(path.join(__dirname, 'views', '../../views/admin.html'));

    } catch (error) {
        console.error(error)
    }

});

router.post('/createScheduling', async (req, res) => {
    let createScheduling = await createNewScheduling(req.body)
    return res.send(createScheduling)
})

router.get('/listAllScheduling', async (req, res) => {
    let listAllSchedulings = await listAllScheduling()
    res.send(listAllSchedulings)
})

router.post('/confirmScheduling', async (req, res) => {
    let schedulingConfirm = await confirmScheduling(req.body)
    res.send(schedulingConfirm)
})

router.post('/listUsers', async (req, res) => {
    let listUsers = await findAllUsers(req.body.pass)
    return res.send(listUsers)
})

module.exports = router;