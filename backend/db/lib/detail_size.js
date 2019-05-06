'use strict'

function setupDetail_size(detail_sizeModel) {
  async function createDetail_size (detail_sizeModel){
    const result  = await detail_sizeModel.create(detail_sizeModel)
    return result.toJSON()
  }
  return {
    createDetail_size,
  }
}

module.exports = setupDetail_size