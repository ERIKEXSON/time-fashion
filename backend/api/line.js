'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { lineNew } = req.body
    const { Line } = await db()
    const result = await Line.createLine(lineNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { lineUpdate } = req.body
    const { Line } = await db()
    const result = await Line.updateLine(uuid, lineUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Line } = await db()
    const result = await Line.deleteLine(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Line } = await db()
    const result = await Line.findAllLine()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Line } = await db()
    const result = await Line.findUuidLine(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router