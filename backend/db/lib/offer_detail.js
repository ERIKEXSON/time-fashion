'use strict'

function setupOfferdetail (offerdetailModel) {
  async function createOfferdetail (offerdetail) {
    const result = await offerdetailModel.create(offerdetail)
    return result.toJSON()
  }
  async function updateOfferdetail (uuid, offerdetail) {
    const cond = { where: { uuid } }
    const result = await offerdetailModel.update(offerdetail, cond)
    return result ? offerdetailModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteOfferdetail (uuid) {
    const cond = { where: { uuid } }
    const result = await offerdetailModel.destroy(cond)
    return !!result
  }
  function findAllOfferdetail () {
    return offerdetailModel.findAll()
  }
  function findUuidOfferdetail (uuid) {
    const cond = { where: { uuid } }
    return offerdetailModel.findOne(cond)
  }
  return {
    createOfferdetail,
    updateOfferdetail,
    deleteOfferdetail,
    findAllOfferdetail,
    findUuidOfferdetail
  }
}

module.exports = setupOfferdetail
