'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { offerdetailNew } = req.body
    const { Offerdetail } = await db()
    const result = await Offerdetail.createOfferdetail(offerdetailNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { offerdetailUpdate } = req.body
    const { Offerdetail } = await db()
    const result = await Offerdetail.updateOfferdetail(uuid, offerdetailUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Offerdetail } = await db()
    const result = await Offerdetail.deleteOfferdetail(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Offerdetail } = await db()
    const result = await Offerdetail.findAllOfferdetail()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Offerdetail } = await db()
    const result = await Offerdetail.findUuidOfferdetail(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
