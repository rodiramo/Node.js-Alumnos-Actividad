import express from 'express';
import AlumnosRoute from './routes/alumnos.route.js';



const app = express(); // create the server
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.use(AlumnosRoute);

app.listen(2023, function(err) {
  if (err) {
    console.error('Error starting the server:', err);
  }})
