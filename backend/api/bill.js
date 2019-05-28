'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { billNew } = req.body
    const { Bill } = await db()
    const result = await Bill.createBill(billNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { billUpdate } = req.body
    const { Bill } = await db()
    const result = await Bill.updateBill(uuid, billUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Bill } = await db()
    const result = await Bill.deleteBill(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Bill } = await db()
    const result = await Bill.findAllBill()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Bill } = await db()
    const result = await Bill.findUuidBill(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
