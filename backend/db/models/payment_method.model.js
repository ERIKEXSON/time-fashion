'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('payment_method', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    numero: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    cvv: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    fecha: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
