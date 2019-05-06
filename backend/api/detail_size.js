'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { detail_sizeNew} = req.body
    const { Detail_size} = await db()
    const result = await Detail_size.createDetail_zise(detail_sizeNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
  module.exports = router