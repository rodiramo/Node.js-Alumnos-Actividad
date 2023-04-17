
import { readFile, writeFile } from 'fs/promises';

async function getAlumnos(){
    return readFile('./data/alumnos.json')
    .then(function(data){
        return JSON.parse(data)
    })
    .catch(function(){
        return[]
    });
}

async function getAlumnoById(alumnoLegajo){
    return getAlumnos()
    .then(function(alumnos){
        let alumno = null;

        for (let i = 0; i < alumnos.length; i++) {
          if (alumnos[i].id == alumnoLegajo) {
            alumno = alumnos[i];
            break;
          }
        }
return alumno;
    })
   
}

async function addAlumno(nombre, apellido, año, legajo){
    return getAlumnos()
    .then(function(alumnos){
        let nuevoAlumno = {
            nombre: nombre,
            apellido: apellido,
            año: año,
            legajo: legajo
        };
    alumnos.push(nuevoAlumno)
    return alumnos;
    })
    .then(function(alumnos){
        return writeFile('./data/alumnos.json', JSON.stringify(alumnos));
    })
    .catch(function(err){
        console.log(err);
    });
   
}


export{
    getAlumnos,
    addAlumno,
    getAlumnoById
}