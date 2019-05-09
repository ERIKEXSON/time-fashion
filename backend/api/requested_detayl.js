'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { RequesteddetaylNew } = req.body
    const { Requesteddetayl} = await db()
    const result = await Requesteddetayl.createRequesteddetayl(RequesteddetaylNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { RequesteddetaylUpdate } = req.body
    const { Requesteddetayl } = await db()
    const result = await Requesteddetayl.updateRequesteddetayl(uuid, RequesteddetaylUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { Requesteddetayl } = await db()
    const result = await Requesteddetayl.deleteRequesteddetayl(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Requesteddetayl } = await db()
    const result = await Requesteddetayl.findAllRequesteddetayl()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Requesteddetayl} = await db()
    const result = await Requesteddetayl.findUuidRequesteddetayl(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router