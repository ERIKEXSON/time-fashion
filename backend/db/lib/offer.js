'use strict'

function setupOffer(offerModel) {
  async function createOffer(offer) {
    const result = await offerModel.create(offer)
    return result.toJSON()
}
async function updateOffer(uuid, offer) {
    const cond = { where : { uuid } }
    const result = await offerModel.update(offer, cond)
    return result ? offerModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteOffer(uuid) {
    const cond = { where : { uuid } }
    const result = await offerModel.destroy(cond)
    return result ? true : false
  }
  function findAllOffer(){
    return offerModel.findAll()
  }
  function findUuidOffer(uuid) {
    const cond = { where : { uuid } }
    return offerModel.findOne(cond)
  }
  return {
    createOffer,
    updateOffer,
    deleteOffer,
    findAllOffer,
    findUuidOffer
  }

}

module.exports = setupOffer
