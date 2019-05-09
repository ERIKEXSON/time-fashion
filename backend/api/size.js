'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { sizeNew } = req.body
    const { Size } = await db()
    const result = await Size.createSize(sizeNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { sizeUpdate } = req.body
    const { Size } = await db()
    const result = await Size.updateSize(uuid, sizeUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Size } = await db()
    const result = await Size.deleteSize(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Size } = await db()
    const result = await Size.findAllSize()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Size } = await db()
    const result = await Size.findUuidSize(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router