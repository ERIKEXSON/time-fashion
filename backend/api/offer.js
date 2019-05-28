'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { offerNew } = req.body
    const { Offer } = await db()
    const result = await Offer.createOffer(offerNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { offerUpdate } = req.body
    const { Offer } = await db()
    const result = await Offer.updateOffer(uuid, offerUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Offer } = await db()
    const result = await Offer.deleteOffer(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Offer } = await db()
    const result = await Offer.findAllOffer()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Offer } = await db()
    const result = await Offer.findUuidOffer(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router
