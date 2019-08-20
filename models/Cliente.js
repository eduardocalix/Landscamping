// Importar referencias
const Sequelize = require('sequelize');
const db = require('../config/db');
// const Usuario = require('./Usuario');

const Cliente = db.define('cliente', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    Nombre : {
        type : Sequelize.STRING(100),
        allowNull : false,
        validate: {
            notEmpty: {
                msg: 'Please insert firts name!'
            }
        }
    },
    Apellido : {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate : {
            notEmpty: {
                msg: 'Please insert your nick name!'
            }
        }
    },
    Telefono : {
        type: Sequelize.STRING(15),
        allowNull: true,
        validate : {
            notEmpty: {
                msg: 'Please insert your phone number'
            }
        }
    },
    Direccion : {
        type: Sequelize.STRING(255),
        allowNull: true,
        validate : {
            notEmpty: {
                msg: 'Please insert your Address!'
            }
        }
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: {
            args: true,
            msg: 'This user already exist'
        },
        validate : {
            notEmpty: {
                msg: 'Please insert your Email!'
            }
        }
    },

 })

// Cliente.hasOne(Usuario);

module.exports = Cliente;