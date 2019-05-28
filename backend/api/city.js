'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

// router.post('/', async function(req, res, next){
//   try {
//     const { cityNew } = req.body
//     const { City } = await db()
//     const result = await City.createCity(cityNew)
//     res.send(result)
//   } catch (err) {
//     next(err)
//   }
// })
// router.put('/:uuid', async function (req, res, next) {
//   try {
//     const { uuid } = req.params
//     const { cityUpdate } = req.body
//     const { City } = await db()
//     const result = await City.updateCity(uuid, cityUpdate)
//     res.send(result)
//   } catch (err) {
//     next(err)
//   }
// })
// router.delete('/:uuid', async function(req, res, next) {
//   try {
//     const { uuid } = req.params
//     const { City } = await db()
//     const result = await City.deleteCity(uuid)
//     res.send(result)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async function (req, res, next) {
  try {
    const { City } = await db()
    const result = await City.findAllCity()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { City } = await db()
    const result = await City.findUuidCity(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
