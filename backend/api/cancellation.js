'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { cancellationNew } = req.body
    const { Cancellation } = await db()
    const result = await Cancellation.createCancellation(cancellationNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { cancellationUpdate } = req.body
    const { Cancellation} = await db()
    const result = await Cancellation.updateCancellation(uuid, cancellationUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Cancellation } = await db()
    const result = await Cancellation.deleteCancellation(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Cancellation } = await db()
    const result = await Cancellation.findAllCancellation()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Cancellation} = await db()
    const result = await Cancellation.findUuidCancellation(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router
