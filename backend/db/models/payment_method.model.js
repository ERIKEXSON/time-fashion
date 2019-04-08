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
    numero: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    cod: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })
}
