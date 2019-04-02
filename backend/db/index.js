'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupOrderModel = require('./models/order.model')
const setupDirectionModel = require('./models/direction.model')
const setupCancellationModel = require('./models/cancellation.model')
const setupBillModel = require('./models/bill.model')
const setupPaymentmethodModel= require('./models/paymentmethod.model')
const setupOfferModel =require('./models/offer.model')
const setupOfferdetailModel =require('./models/offerdetail.model')

// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  
  const OrderModel = setupOrderModel(config)
  const DirectionModel = setupDirectionModel(config)
 
  const CancellationModel = setupCancellationModel(config)
  const BillModel = setupBillModel(config)

  const PaymentmethodModel= setupPaymentmethodModel(config)
  const BillModel = setupBillModel(config)

  const OfferModel=setupOfferModel(config)
  const OfferDetailModel=setupOfferdetailModel(config)
  //relacion de usuario a pedidos
  UserModel.hasMany(OrderModel)
  OrderModel.belongsTo(UserModel)

//relacion de direcciones a pedidos
  DirectionModel.hasMany(OrderModel)
  OrderModel.belongsTo(DirectionModel)

  //relacion de personas a direcciones
  UserModel.hasMany(DirectionModel)
  DirectionModel.belongsTo(UserModel)

  //relacion de pedidos a cancelacion
  OrderModel.hasMany(CancellationModel)
  CancellationModel.belongsTo(OrderModel)

  //relacion de pedidos a facturas
  OrderModel.hasMany(BillModel)
  BillModel.belongsTo(OrderModel)

  //relacion de metodos de pago a facturas
  PaymentmethodModel.hasMany(BillModel)
  BillModel.hasMany(PaymentmethodModel)

  //relacion de metodos de ofertas a detalle_oferta
  OfferDetailModel.hasMany(OfferModel)
  OfferModel.belongsTo(OfferDetailModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
