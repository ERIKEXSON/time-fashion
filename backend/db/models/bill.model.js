'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('bill', {
    uuid: {
        type: Sequelize.CHAR(36),
        defaultValue: Sequelize.UUIDV4
    },
    numero_cuotas:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    valor_total:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
  })
}