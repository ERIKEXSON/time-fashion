'use strict'

function setupBrand(brandModel) {
  async function createBrand (brand){
    const result  = await brandModel.create(brand)
    return result.toJSON()
  }
<<<<<<< HEAD
  async function updateBrand(uuid, brand) {
    const cond = { where : { uuid } }
    const result = await BrandModel.update(brand, cond)
    return result ? BrandModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }


=======
  
>>>>>>> f6b458d47432933c8cea68bd4a39672e447ec3b4
  return {
    createBrand,
    updateBrand,
  }
}

module.exports = setupBrand