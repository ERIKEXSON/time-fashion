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
<<<<<<< HEAD
=======
const direction = require('./direction')
const inventories = require('./inventories')
const line = require('./line')
const offer_detail = require('./offer_datail')
>>>>>>> c82703db97c3d32119f676630d2ea33841a81590


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
<<<<<<< HEAD
      cancellation:'/cancellation',
      department:'/department',
=======
      bill:'/bill',
      city:'/city',
      cancellation: '/cancellation',
      department: '/department',
      direction: '/direction',
      inventories:'/inventories',
      line:'/line',
      offer_detail:'/offer_detail'
>>>>>>> c82703db97c3d32119f676630d2ea33841a81590

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
<<<<<<< HEAD
=======
  direction,
  inventories,
  line,
  offer_detail,
>>>>>>> c82703db97c3d32119f676630d2ea33841a81590

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

  
  
 

