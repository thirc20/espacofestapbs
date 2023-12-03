const express = require('express');
const router = express.Router();

// Rota principal
router.get('/', (req, res) => {
    res.send('Bem-vindo ao meu servidor Node.js com Express!');
});

// Rota sobre
router.get('/sobre', (req, res) => {
    res.send('Página Sobre');
});

// Rota contato
router.get('/contato', (req, res) => {
    res.send('Página de Contato');
});

module.exports = router;