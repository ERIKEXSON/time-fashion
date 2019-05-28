'use strict'

function setupInventories (inventoriesModel) {
  async function createInventories (inventories) {
    const result = await inventoriesModel.create(inventories)
    return result.toJSON()
  }
  async function updateInventories (uuid, inventories) {
    const cond = { where: { uuid } }
    const result = await inventoriesModel.update(inventories, cond)
    return result ? inventoriesModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteInventories (uuid) {
    const cond = { where: { uuid } }
    const result = await inventoriesModel.destroy(cond)
    return !!result
  }
  function findAllInventories () {
    return inventoriesModel.findAll()
  }
  function findUuidInventories (uuid) {
    const cond = { where: { uuid } }
    return inventoriesModel.findOne(cond)
  }
  return {
    createInventories,
    updateInventories,
    deleteInventories,
    findAllInventories,
    findUuidInventories
  }
}

module.exports = setupInventories
