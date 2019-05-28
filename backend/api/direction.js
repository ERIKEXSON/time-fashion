'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { directionNew } = req.body
    const { Direction } = await db()
    const result = await Direction.createDirection(directionNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { directionUpdate } = req.body
    const { Direction } = await db()
    const result = await Direction.updateDirection(uuid, directionUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Direction } = await db()
    const result = await Direction.deleteDirection(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Direction } = await db()
    const result = await Direction.findAllDirection()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Direction } = await db()
    const result = await Direction.findUuidDirection(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
