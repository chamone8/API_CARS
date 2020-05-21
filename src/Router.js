const express = require('express');
const routes = express.Router();

const PrincipalController = require('./controller/PrincipalController');


routes.post('/', PrincipalController.create);
routes.get('/', PrincipalController.index);
routes.delete("/delete/:id", PrincipalController.delete);
routes.put('/alterar/:id', PrincipalController.update);
module.exports = routes;