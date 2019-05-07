'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { countryNew } = req.body
    const { Country } = await db()
    const result = await Country.createCountry(countryNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { countryUpdate } = req.body
    const { Country } = await db()
    const result = await Country.updateCountry(uuid, countryUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Country } = await db()
    const result = await Country.deleteCountry(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Country } = await db()
    const result = await Country.findAllCountry()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Country} = await db()
    const result = await Country.findUuidCountry(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router