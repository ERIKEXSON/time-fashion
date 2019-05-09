'use strict'

function setupPaymentmethod(paymentmethodModel) {
  async function createPaymentmethod(paymentmethod) {
    const result = await paymentmethodModel.create(paymentmethod)
    return result.toJSON()
  }
  async function updatePaymentmethod(uuid, paymentmethod) {
    const cond = { where : { uuid } }
    const result = await paymentmethodModel.update(paymentmethod, cond)
    return result ? paymentmethodModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deletePaymentmethod(uuid) {
    const cond = { where : { uuid } }
    const result = await paymentmethodModel.destroy(cond)
    return result ? true : false
  }
  function findAllPaymentmethod(){
    return paymentmethodModel.findAll()
  }
  function findUuidPaymentmethod(uuid) {
    const cond = { where : { uuid } }
    return paymentmethodModel.findOne(cond)
  }
  return {
    createPaymentmethod,
    updatePaymentmethod,
    deletePaymentmethod,
    findAllPaymentmethod,
    findUuidPaymentmethod
  }

}

module.exports = setupPaymentmethod