const express = require('express');
const router = express.Router();
const path = require('path');
const { findAllUsers, createUser } = require('./repositorys/user.repository');

// Rota Home
router.get('/', async (req, res) => {
    
    try {

        res.sendFile(path.join(__dirname, 'views', '../../views/index.html'));

    } catch (error) {
        console.error(error)
    }

});

// Rota sobre
router.get('/sobre', async (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '../../views/sobre.html'));
});

// Rota contato 
router.get('/contato', async (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

router.get('/listAllUsers', async (req, res) => {
    let findAllUser = await findAllUsers()
        console.log(findAllUser)
    res.send(findAllUser)
})

router.get('/createUser', async (req, res) => {
    let createNewUser = await createUser()
        console.log(createNewUser)
    res.send(createNewUser)
})

router.get('/updateUser', async (req, res) => {
    // let findAllUser = await createUser()
    //     console.log(findAllUser)
    // res.send(findAllUser)
})

router.get('/deleteUser', async (req, res) => {
    // let findAllUser = await createUser()
    //     console.log(findAllUser)
    // res.send(findAllUser)
})

module.exports = router;