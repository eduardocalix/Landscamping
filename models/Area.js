// Importar sequelize
const Sequelize = require('sequelize');
// Importar la configuración de la conexión con la BD
const db = require('../config/db');
// Importar slug
const slug = require('slug');
// Importar shortid
const shortid = require('shortid');

// Definición del modelo (Model)
const Area = db.define('areaCliente', {
    idArea : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre : {
        type: Sequelize.STRING(30)
    },

    descripcion: {
        type: Sequelize.STRING(50)
    },
   
    url : Sequelize.STRING
}, {
    hooks : {
        beforeCreate(area) {
            console.log('Antes de insertar en la base de datos');
            const url = slug(area.nombre).toLowerCase();

            area.url = `${url}-${shortid.generate()}`;
        },

        beforeUpdate(area) {
            console.log('Antes de actualizar en la base de datos');
            const url = slug(area.nombre).toLowerCase();

            area.url = `${url}-${shortid.generate()}`;
        }
    }
});

// Importar el modelo para poder utilizarlo
module.exports = Area;