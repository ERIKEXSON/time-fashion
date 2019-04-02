'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('colour', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre:{
        type:Sequelize.TEXT,
        ollowNull: false
    },
    codigo:{
        type:Sequelize.TEXT,
        ollowNull: false
    },
})
}