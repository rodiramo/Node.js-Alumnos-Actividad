
function createAlumnoListPage(alumnos){
    let html = "<h2>Alumno List</h2>";
    html += `<a href="/alumnos/nuevo">Agregar Nuevo Alumno</a>`;
      html += '<ul>';

      for (let i = 0; i < alumnos.length; i++) {
        html += `<li>${alumnos[i].nombre} <br> ${alumnos[i].apellido}<br><a href="/alumnos/${alumnos[i].legajo}">VER</a></li>`;
      }

      html += '</ul>';
      return createPage('Alumno List', html);
}

function createAlumnoPage(alumno){
    let html = '<h1>' + alumno.nombre + '<br> '+ alumno.apellido + '</h1>';
    html += '<p>' + alumno.año + '</p>';
    html += '<p>' + alumno.legajo + '</p>';

   return createPage(alumno.nombre, html);

}


function createAlumnoNuevo(){
  let html = ' ';

  html += `
  <form action="/alumnos/nuevo" method="POST">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre">
      <label for="apellido">Apellido</label>
      <input type="text" name="apellido" id="apellido">
      <label for="año">Año</label>
      <input type="text" name="año" id="año">
      <label for="legajo">Legajo</label>
      <input type="text" name="legajo" id="legajo">
      <input type="submit" value="Enviar">
  </form><br>
  <a href="/alumnos">Ver Lista Actualizada</a>
   `;

 return createPage('Agregar nuevo alumno', html);

}

function createPage(title, content){
    let html ='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta nombre="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="css/style.css"></head><body>';
  
    html += '<title>' + title + '</title>';
    html += '<h1>ALUMNOS</h1>';
    
    html += content;
  
    html += '</body></html>';
    return html;
  
  }
  
export{
    createAlumnoListPage,
    createAlumnoPage,
    createAlumnoNuevo,
    createPage
}