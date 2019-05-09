'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.get('/', async function (req, res, next) {
  try {
    const { Department } = await db()
    const result = await Department.findAllDepartment()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Department} = await db()
    const result = await Department.findUuidDepartment(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router