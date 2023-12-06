require('dotenv/config');

// Importar o módulo Express
const express = require('express');
const appRoutes = require('../../api/app')
const bodyParser = require('body-parser');
const connectSQLITE = require('../../db');

// Inicializar o aplicativo Express
const app = express();
const port = process.env.PORT_SERVER; // Escolha a porta que desejar

// indicar qual pasta estão os arquivos estaticos
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(appRoutes)

// Iniciar o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});