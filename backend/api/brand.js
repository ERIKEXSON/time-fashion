'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { brandNew } = req.body
    const { Brand } = await db()
    const result = await Brand.createBrand(brandNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { brandUpdate } = req.body
    const { Brand } = await db()
    const result = await Brand.updateBrand(uuid, brandUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Brand } = await db()
    const result = await Brand.deleteBrand(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Brand } = await db()
    const result = await Brand.findAllBrand()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Brand} = await db()
    const result = await Brand.findUuidBrand(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router
