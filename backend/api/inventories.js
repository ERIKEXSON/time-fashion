'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { inventoriesNew } = req.body
    const { Inventories } = await db()
    const result = await Inventories.createInventories(inventoriesNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { inventoriesUpdate } = req.body
    const { Inventories } = await db()
    const result = await Inventories.updateInventories(uuid, inventoriesUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Inventories } = await db()
    const result = await Inventories.deleteInventories(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Inventories } = await db()
    const result = await Inventories.findAllInventories()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Inventories } = await db()
    const result = await Inventories.findUuidInventories(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router