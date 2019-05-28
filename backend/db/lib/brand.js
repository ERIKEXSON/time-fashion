'use strict'

function setupBrand (brandModel) {
  async function createBrand (brand) {
    const result = await brandModel.create(brand)
    return result.toJSON()
  }

  async function updateBrand (uuid, brand) {
    const cond = { where: { uuid } }
    const result = await brandModel.update(brand, cond)
    return result ? brandModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteBrand (uuid) {
    const cond = { where: { uuid } }
    const result = await brandModel.destroy(cond)
    return !!result
  }
  function findAllBrand () {
    return brandModel.findAll()
  }
  function findUuidBrand (uuid) {
    const cond = { where: { uuid } }
    return brandModel.findOne(cond)
  }
  return {
    createBrand,
    updateBrand,
    deleteBrand,
    findAllBrand,
    findUuidBrand
  }
}

module.exports = setupBrand
