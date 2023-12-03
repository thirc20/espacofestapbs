// Importar o módulo Express
const express = require('express');
const appRoutes = require('./app')

// Inicializar o aplicativo Express
const app = express();
const port = process.env.PORT_SERVER; // Escolha a porta que desejar

app.get('/', appRoutes)
// Iniciar o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});