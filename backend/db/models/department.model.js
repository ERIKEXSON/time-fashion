'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('department', {
      nombre:{
          type: sequelize.TEXT,
          allowNull:false
      }
  })
}