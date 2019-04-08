'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('requested_detail', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    cantidad: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    estado: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    empresa_envio: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    guia: {
      type: Sequelize.TEXT,
      allowNull: false
    }

  })
}
