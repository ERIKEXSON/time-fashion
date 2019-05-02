'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { brandNew } = req.body
    const { Brand } = await db()
    const result = await Brand.createBrand(brandNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router