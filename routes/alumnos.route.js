import express from 'express';
import * as controllers from './../controllers/alumnos.controllers.js';

const route = express.Router();

route.get('/alumnos', controllers.getAlumnos);
route.post('/alumnos/nuevo', controllers.postAgregarAlumno);
route.get('/alumnos/nuevo', controllers.getAlumnoNuevo);
route.get('/alumnos/:legajo', controllers.getAlumnoDetail);

export default route