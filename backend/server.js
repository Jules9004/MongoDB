import express from "express";
import {consultar, consultaEsp, insertar, eliminar, actualizar} from './db.js';

const app = express();
app.listen('5000', function() {
    console.log("Servidor iniciado!");
})

//consultar()
//consultaEsp()
//insertar()
//eliminar()
actualizar()