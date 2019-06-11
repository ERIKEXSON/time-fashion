'use strict'

function setupPaymentMethod (paymentMethodModel, userModel) {
  async function createPaymentMethod (paymentMethod) {
    const cond = { where: { uuid: paymentMethod.userId} }
    const user = await userModel.findOne(cond)
    if (!user) {
      return {
        message: 'no existe un usuario con ese uuid'
      }
    }
    paymentMethod.userId = user.id
    const result = await paymentMethodModel.create(paymentMethod)
    return result.toJSON()
  }

  async function updatePaymentMethod (uuid, paymentMethod) {
    const cond = { where: { uuid } }
    const result = await paymentMethodModel.update(paymentMethod, cond)
    return result ? paymentMethodModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deletePaymentMethod (uuid) {
    const cond = { where: { uuid } }
    const result = await paymentMethodModel.destroy(cond)
    return !!result
  }
  function findAllPaymentMethod () {
    return paymentMethodModel.findAll()
  }
  function findUuidPaymentMethod (uuid) {
    const cond = { where: { uuid } }
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
