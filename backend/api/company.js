'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { companyNew } = req.body
    const { Company } = await db()
    const result = await Company.createCompany(companyNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { companyUpdate } = req.body
    const { Company } = await db()
    const result = await Company.updateCompany(uuid, companyUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Company } = await db()
    const result = await Company.deleteCompany(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { Company } = await db()
    const result = await Company.findAllCompany()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { Company} = await db()
    const result = await Company.findUuidCompany(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
module.exports = router
