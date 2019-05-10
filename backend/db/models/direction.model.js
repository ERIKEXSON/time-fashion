'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('direction', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    direccion: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    celular: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
