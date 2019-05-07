'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('city', {
      nombre:{
          type:Sequelize.TEXT,
          allowNull:false
      }
  })
}