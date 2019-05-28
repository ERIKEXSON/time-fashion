'use strict'

function setupPaymentMethod(paymentMethodModel) {
  async function createPaymentMethod (paymentMethod){
    const result  = await paymentMethodModel.create(paymentMethod)
    return result.toJSON()
  }

  async function updatePaymentMethod(uuid, paymentMethod) {
    const cond = { where : { uuid } }
    const result = await paymentMethodModel.update(paymentMethod, cond)
    return result ? paymentMethodModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deletePaymentMethod(uuid) {
    const cond = { where : { uuid } }
    const result = await paymentMethodModel.destroy(cond)
    return result ? true : false
  }
  function findAllPaymentMethod(){
    return paymentMethodModel.findAll()
  }
  function findUuidPaymentMethod(uuid) {
    const cond = { where : { uuid } }
    return paymentMethodModel.findOne(cond)
  }
  return {
    createPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod,
    findAllPaymentMethod,
    findUuidPaymentMethod
  }
}

module.exports = setupPaymentMethod