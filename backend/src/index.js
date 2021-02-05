import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes.js'
import http from 'http'
import {setupWebsocket}from './websocket.js'

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect("mongodb+srv://<user>:<password>@<clustername>.5tex6.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(cors())
app.use(express.json());
app.use(routes);




server.listen(3333);
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na altetarção ou reomção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)