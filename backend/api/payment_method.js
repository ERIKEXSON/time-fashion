'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { paymentmethodNew } = req.body
    console.log(paymentmethodNew)
    const { Paymentmethod } = await db()
    const result = await Paymentmethod.createPaymentmethod(paymentmethodNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { paymentmethodUpdate } = req.body
    const { Paymentmethod } = await db()
    const result = await Paymentmethod.updatePaymentmethod(uuid, paymentmethodUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Paymentmethod } = await db()

    const result = await Paymentmethod.deletePaymentmethod(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Paymentmethod } = await db()
    const result = await Paymentmethod.findAllPaymentmethod()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Paymentmethod } = await db()
    const result = await Paymentmethod.findUuidPaymentmethod(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router