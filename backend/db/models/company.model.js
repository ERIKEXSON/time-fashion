'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('company', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    nit: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    correo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    telefono: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
