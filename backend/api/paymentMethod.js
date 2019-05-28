'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { paymentMethodNew } = req.body
    const { PaymentMethod } = await db()
    const result = await PaymentMethod.createPaymentMethod(paymentMethodNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { PaymentMethodUpdate } = req.body
    const { PaymentMethod } = await db()
    const result = await PaymentMethod.updatePaymentMethod(uuid, PaymentMethodUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { PaymentMethod } = await db()
    const result = await PaymentMethod.deletePaymentMethod(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { PaymentMethod } = await db()
    const result = await PaymentMethod.findAllPaymentMethod()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { PaymentMethod} = await db()
    const result = await PaymentMethod.findUuidPaymentMethod(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router
