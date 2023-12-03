require('dotenv/config');

// Importar o módulo Express
const express = require('express');
const appRoutes = require('./app')

// Inicializar o aplicativo Express
const app = express();
const port = process.env.PORT_SERVER; // Escolha a porta que desejar

// indicar qual pasta estão os arquivos estaticos
app.use(express.static(__dirname + '/public'));

app.get('/', appRoutes)

// Iniciar o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});