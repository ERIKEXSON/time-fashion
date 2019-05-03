'use strict'

function setupBrand(brandModel) {

  async function createBrand (brand){
    const result  = await brandModel.create(brand)
    return result.toJSON()
  }
  return {
    createBrand
  }
}

module.exports = setupBrand