'use strict'

const http = require('http')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { errorHandler,  home , user,  brand, detail_size, offer, country} = require('@time-fashion/api')
const { getLogger, logHandler, terminate } = require('@time-fashion/utils')

const app = express()
const server = http.createServer(app)
const log = getLogger(__dirname, __filename)
const port = +process.env.PORT || 8000

app.use(helmet())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logHandler)
app.use('/user', user)
app.use('/brand', brand)
app.use('/detail_size',detail_size)
app.use('/offer',offer)
app.use('/country',country)
app.get('/',home)
app.use(errorHandler)

module.exports = server

if (!module.parent) {
  server.listen(port, () => {
    log.info(`server listening on http://localhost:${port}`)
  })

  process.on('SIGINT', terminate(0, 'SIGINT'))
  process.on('SIGTERM', terminate(0, 'SIGTERM'))
  process.on('uncaughtException', terminate(1, 'uncaughtException'))
  process.on('unhandledRejection', terminate(1, 'unhandledRejection'))
}
