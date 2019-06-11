'use strict'

function setupOrder (orderModel) {
  async function createOrder (order) {
    const result = await orderModel.create(order)
    return result.toJSON()
  }

  async function updateOrder (uuid, order) {
    const cond = { where: { uuid } }
    const result = await orderModel.update(order, cond)
    return result ? orderModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteOrder (uuid) {
    const cond = { where: { uuid } }
    const result = await orderModel.destroy(cond)
    return !!result
  }
  function findAllOrder () {
    return orderModel.findAll()
  }
  function findUuidOrder (uuid) {
    const cond = { where: { uuid } }
    return orderModel.findOne(cond)
  }
  return {
    createOrder,
    updateOrder,
    deleteOrder,
    findAllOrder,
    findUuidOrder
  }
}

module.exports = setupOrder
