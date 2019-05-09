'use strict'

function setupProducts(productsModel) {
  async function createProducts (products){
    const result  = await productsModel.create(products)
    return result.toJSON()
  }

  async function updateProducts(uuid, products) {
    const cond = { where : { uuid } }
    const result = await productsModel.update(products, cond)
    return result ? productsModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteProducts(uuid) {
    const cond = { where : { uuid } }
    const result = await productsModel.destroy(cond)
    return result ? true : false
  }
  function findAllProducts(){
    return productsModel.findAll()
  }
  function findUuidProducts(uuid) {
    const cond = { where : { uuid } }
    return productsModel.findOne(cond)
  }
  return {
    createProducts,
    updateProducts,
    deleteProducts,
    findAllProducts,
    findUuidProducts
  }
}

module.exports = setupProducts