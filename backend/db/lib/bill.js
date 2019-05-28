'use strict'

function setupBill (billModel) {
  async function createBill (bill) {
    const result = await billModel.create(bill)
    return result.toJSON()
  }
  async function updateBill (uuid, bill) {
    const cond = { where: { uuid } }
    const result = await billModel.update(bill, cond)
    return result ? billModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteBill (uuid) {
    const cond = { where: { uuid } }
    const result = await billModel.destroy(cond)
    return !!result
  }
  function findAllBill () {
    return billModel.findAll()
  }
  function findUuidBill (uuid) {
    const cond = { where: { uuid } }
    return billModel.findOne(cond)
  }
  return {
    createBill,
    updateBill,
    deleteBill,
    findAllBill,
    findUuidBill
  }
}

module.exports = setupBill
