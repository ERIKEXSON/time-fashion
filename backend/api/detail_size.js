'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { DetailSizeNew } = req.body
    const { DetailSize} = await db()
    const result = await DetailSize.createDetailSize(DetailSizeNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
  router.put('/:uuid', async function (req, res, next) {
    try {
      const { uuid } = req.params
      const { DetailSizeUpdate } = req.body
      const { DetailSize } = await db()
      const result = await DetailSize.updateDetailSize(uuid, DetailSizeUpdate)
      res.send(result)
    } catch (err) {
      next(err)
    }
  })
})
router.delete('/:uuid', async function(req, res, next) {
  try {
    const { uuid } = req.params
    const { DetailSize} = await db()
    const result = await DetailSize.deleteDetailSize(uuid)
    res.send(result)    
  } catch (err) {
    next(err)
  }
})
  module.exports = router