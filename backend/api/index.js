'use strict'

const { getLogger } = require('@time-fashion/utils')
const user = require('./user')
const brand = require('./brand')
const offer = require('./offer')
const detail_size = require('./detail_size')
const country = require('./country')
const bill = require('./bill')
const city = require('./city')
const cancellation = require('./cancellation')
const department = require('./department')
const inventories = require('./inventories')
const line = require('./line')
const offer_detail = require('./offer_datail')
const company = require('./company')
const products = require('./products')
const paymentMethod = require('./paymentMethod')
const order = require('./order')

const log = getLogger(__dirname, __filename)
// prueba
module.exports = {
  home (req, res) {
    res.send({
      user: '/user',
      brand: '/brand',
      offer: '/offer',
      detail_size: '/detail_size',
      country: '/country',
      bill: '/bill',
      city: '/city',
      cancellation: '/cancellation',
      department: '/department',
      inventories: '/inventories',
      line: '/line',
      offer_detail: '/offer_detail',
      company: '/company',
      products: '/products',
      paymentMethod: '/paymentMethod',
      order: '/order'
    })
  },
  user,
  brand,
  offer,
  detail_size,
  country,
  bill,
  city,
  cancellation,
  department,
  inventories,
  line,
  offer_detail,
  company,
  products,
  paymentMethod,
  order,

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
