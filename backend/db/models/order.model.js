'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('order', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    estado: {
      type: Sequelize.ENUM('Entrega pendiente', 'Entrega confirmada', 'Cancelado', 'Pendiente de envio', 'Devolucion'),
      allowNull: false,
      defaultValue: 'Entrega pendiente'
    }
  })
}
