'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('user', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    apellido: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    nacionalidad: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    telefono: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    rol: {
      type: Sequelize.ENUM('cliente', 'vendedor', 'administrador'),
      allowNull: false,
      defaultValue: 'cliente'
    }
  })
}