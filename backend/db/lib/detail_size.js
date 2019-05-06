'use strict'

function setupDetail_size(detail_sizeModel) {
  async function createDetail_size (detail_size){
    const result  = await detail_sizeModel.create(detail_size)
    return result.toJSON()
  }
  async function updateDetail_size(uuid, detail_size) {
    const cond = { where : { uuid } }
    const result = await detail_sizeModel.update(detail_size, cond)
    return result ? detail_sizeModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  return {
    createDetail_size,
    updateDetail_size,
  }
}

module.exports = setupDetail_size