const express = require('express');

const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/session', sessionController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;

