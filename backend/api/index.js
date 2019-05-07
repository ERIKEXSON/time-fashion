'use strict'

const { getLogger } = require('@time-fashion/utils')
const user = require('./user')
const brand = require('./brand')
const offer = require('./offer')
const detail_size = require('./detail_size')
const country = require('./country')
const bill = require('./bill')
const city = require('./city')


const log = getLogger(__dirname, __filename)
// prueba
module.exports = {
  home (req, res) {
    res.send({
      user: '/user',
      brand: '/brand',
      offer: '/offer',
      detail_size:'/detail_size',
      country:'/country',
      bill:'/bill',
      city:'/city',

    })
  },
  user,
  brand,
  offer,
  detail_size,
  country,
  bill,
  city,
 

  errorHandler (err, req, res, next) {
    if (err) {
      let code = err.code || 500
      const { id } = req
      const { message, stack } = err
      log.debug({ id, message: stack })
      log.error({ id, message })
      res.status(code).send({ error: message })
      return
    }
    next()
  }
}

  
  
 

