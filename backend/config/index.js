'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || 'fvvb5w046c37s0bj',
    username: process.env.DB_USER || 'ytq14yuob65wmhez',
    password: process.env.DB_PASS || 'r25ttngiaanudryg',
    host: process.env.DB_HOST || 'ou6zjjcqbi307lip.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  }
}

Object.assign(config, { pkg })

module.exports = config
