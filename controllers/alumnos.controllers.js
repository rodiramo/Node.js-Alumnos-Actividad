import * as services from "../services/alumnos.services.js";
import * as views from "../view/alumnos.views.js";

function getAlumnos(req, res) {

    services.getAlumnos()
    .then(function(alumnos) {
        res.send(views.createAlumnoListPage(alumnos))
    })
  }

  
function getAlumnoDetail(req, res) {
const alumnoLegajo = req.params.alumnoLegajo;
    services.getAlumnoById(alumnoLegajo)
    .then(function(alumno) {
        if (alumno) {
        res.send(views.createAlumnoPage(alumno));
      } else {
        res.send(views.createPage('alumno not found', 'The alumno doesnt exist!'));
      }
    })
  }

  function getAlumnoNuevo(req, res) {
    if(!req.body.hasOwnProperty('nombre')){
      res.send(views.createAlumnoNuevo())
    }
  }

  function postAgregarAlumno(req, res) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const año = req.body.año;
    const legajo = req.body.legajo;
  if(nombre && apellido && año  && legajo){
    services.addAlumno(nombre, apellido, año, legajo)
  }else{
    res.send(views.createAlumnoNuevo('Error: data faltante.'))
  }

  }



  export{
getAlumnos,
getAlumnoNuevo,
getAlumnoDetail,
postAgregarAlumno
  }

  export default{
    getAlumnoDetail,
    getAlumnoNuevo,
    postAgregarAlumno,
    getAlumnos
  }