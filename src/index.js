import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const {mongoose} = require('./db')

const app = express();

// Configuracion
app.set('port', process.env.PORT || 2022);
app.use(morgan('dev'));
app.use(express.json());

// Carga de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', require('./rutas/rutas'))

app.listen(app.get('port'), () => {
  console.log(`Servidor inicializado en el puerto ${app.get('port')}`)
});
