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
    user.contraseña = password.generateHash(user.contraseña)
    const result = await userModel.update(user, cond)
    return result ? userModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function comparar (uuid, credentials) {
    const cond = { where: { uuid } }
    if(password.compareHash(credentials.contraseña, user.contraseña)){
      return{
        comparado:true
      } 
    }
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
    comparar
  }
}

module.exports = setupUser
