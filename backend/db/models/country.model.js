'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('country', {
      nombre: {
        type: Sequelize.TEXT,
        sequelize:false
      },
      codigo_nacional:{
          type:Sequelize.TEXT,
          allowNull:false
      },
      continente:{
          type: Sequelize.TEXT,
          allowNull:false
      }
  })
}