'use strict'

function setupBrand(brandModel) {
  async function createBrand (brand){
    const result  = await brandModel.create(brand)
    return result.toJSON()
  }

  async function updateBrand(uuid, brand) {
    const cond = { where : { uuid } }
    const result = await BrandModel.update(brand, cond)
    return result ? BrandModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  return {
    createBrand,
    updateBrand,
  }
}

module.exports = setupBrand