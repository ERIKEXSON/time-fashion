'use strict'
const { password } = require('@time-fashion/utils')

function setupUser (userModel) {
  async function createUser (user) {
    user.contraseña = password.generateHash(user.contraseña)
    const result = await userModel.create(user)
    return result.toJSON()
  }
  async function updateUser (uuid, user) {
    const cond = { where: { uuid } }
    const result = await userModel.update(user, cond)
    return result ? userModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function updatePassword (uuid, user) {
    const cond = { where: { uuid } }
    const result = await userModel.findOne(cond)
    if (!result) {
      return {
        message: 'No existe el usuario a actualizar',
        update: false
      }
    }
    if (!(password.compareHash(user.contrasena, result.contraseña))) {
      return {
        message: 'Contraseña actual no coincide',
        update: false
      }
    }
    user.contrasenaNew = password.generateHash(user.contrasenaNew)
    const result2 = await userModel.update({contraseña: user.contrasenaNew}, cond)
    return result2 ? {message: 'Actualizado', update: true} : {message: 'No actualizo', update: false}
  }
  async function deleteUser (uuid) {
    const cond = { where: { uuid } }
    const result = await userModel.destroy(cond)
    return !!result
  }
  function findAllUser () {
    return userModel.findAll()
  }
  function findUuidUser (uuid) {
    const cond = { where: { uuid } }
    return userModel.findOne(cond)
  }
  async function singin (credentials) {
    let dataFail = 'datos incorrectos'
    const cond = { where: { email: credentials.email } }
    const user = await userModel.findOne(cond)
    if (!user) {
      return {
        message: dataFail,
        login: false
      }
    }
    if (!(password.compareHash(credentials.contraseña, user.contraseña))) {
      return {
        message: dataFail,
        login: false
      }
    }
    return {
      message: `Bienvenido`,
      user,
      login: true
    }
  }
  return {
    createUser,
    updateUser,
    deleteUser,
    findAllUser,
    findUuidUser,
    singin,
    updatePassword
  }
}

module.exports = setupUser
