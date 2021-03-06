'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@time-fashion/utils')
const db = require('@time-fashion/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function (req, res, next) {
  try {
    const { userNew } = req.body
    const { User } = await db()
    const result = await User.createUser(userNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.post('/singin', async function (req, res, next) {
  try {
    const credentials = req.body
    const { User } = await db()
    const result = await User.singin(credentials)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { userUpdate } = req.body
    const { User } = await db()
    const result = await User.updateUser(uuid, userUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.put('/updatePassword/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const user = req.body
    const { User } = await db()
    const result = await User.updatePassword(uuid, user)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { User } = await db()
    const result = await User.deleteUser(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function (req, res, next) {
  try {
    const { User } = await db()
    const result = await User.findAllUser()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function (req, res, next) {
  try {
    const { uuid } = req.params
    const { User } = await db()
    const result = await User.findUuidUser(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
