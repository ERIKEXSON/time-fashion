'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { productsNew } = req.body
    const { Products} = await db()
    const result = await Products.createProducts(productsNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { productsUpdate } = req.body
    const { Products} = await db()
    const result = await Products.updateProducts(uuid, productsUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Products } = await db()
    const result = await Products.deleteProducts(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Products } = await db()
    const result = await Products.findAllProducts()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Products} = await db()
    const result = await Products.findUuidProducts(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router