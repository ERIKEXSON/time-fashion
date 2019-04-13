'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupOrderModel = require('./models/order.model')
const setupDirectionModel = require('./models/direction.model')
const setupCancellationModel = require('./models/cancellation.model')
const setupBillModel = require('./models/bill.model')
const setupPayment_methodModel = require('./models/payment_method.model')
const setupOfferModel = require('./models/offer.model')
const setupOffer_detailModel = require('./models/offer_detail.model')
const setupRequested_detailModel = require('./models/requested_detayl.model')
const setupInventoryModel = require('./models/inventory.model')
const setupColorModel = require('./models/color.model')
const setupSizeModel = require('./models/size.model')
const setupProductsModel = require('./models/products.model')
const setupBrandModel = require('./models/brand.model')
const setupLineModel = require('./models/line.model')
const setupDetail_size = require('./models/detail_size.model')

// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const OrderModel = setupOrderModel(config)
  const DirectionModel = setupDirectionModel(config)
  const CancellationModel = setupCancellationModel(config)
  const BillModel = setupBillModel(config)
  const Payment_methodModel = setupPayment_methodModel(config)
  const OfferModel = setupOfferModel(config)
  const Offer_DetailModel = setupOffer_detailModel(config)
  const Requested_detaylModel = setupRequested_detailModel(config)
  const InventoryModel = setupInventoryModel(config)
  const ColorModel = setupColorModel(config)
  const SizeModel = setupSizeModel(config)
  const ProductsModel = setupProductsModel(config)
  const BrandModel = setupBrandModel(config)
  const LineModel = setupLineModel(config)
  const Detail_sizeModel = setupDetail_size(config)

  // relacion de usuario a pedidos
  UserModel.hasMany(OrderModel)
  OrderModel.belongsTo(UserModel)

  // relacion de direcciones a pedidos
  OrderModel.hasMany(DirectionModel)
  DirectionModel.belongsTo(OrderModel)

  // relacion de personas a direcciones
  UserModel.hasMany(DirectionModel)
  DirectionModel.belongsTo(UserModel)

  // relacion de pedidos a cancelacion
  OrderModel.hasMany(CancellationModel)
  CancellationModel.belongsTo(OrderModel)

  // relacion de pedidos a facturas
  BillModel.hasMany(OrderModel)
  OrderModel.belongsTo(BillModel)

  // relacion de metodos de pago a facturas
  BillModel.hasMany(Payment_methodModel)
  Payment_methodModel.belongsTo(BillModel)

  // relacion de  ofertas a detalle_oferta
  OfferModel.hasMany(Offer_DetailModel)
  Offer_DetailModel.belongsTo(OfferModel)

  // relacion de pedidos  a detalles_pedido
  OrderModel.hasMany(Requested_detaylModel)
  Requested_detaylModel.belongsTo(OrderModel)

  // relacion de inventario a color
  ColorModel.hasMany(InventoryModel)
  InventoryModel.belongsTo(InventoryModel)

  // relacion de inventario a talla
  SizeModel.hasMany(InventoryModel)
  InventoryModel.belongsTo(SizeModel)

  // relacion de inventario a personas
  UserModel.hasMany(InventoryModel)
  InventoryModel.belongsTo(UserModel)

  // relacion de inventario a productos
  ProductsModel.hasMany(InventoryModel)
  InventoryModel.belongsTo(ProductsModel)

  // relacion de productos a lineas
  LineModel.hasMany(ProductsModel)
  ProductsModel.belongsTo(LineModel)

  // relacion de productos a personas
  UserModel.hasMany(ProductsModel)
  ProductsModel.belongsTo(UserModel)

  // relacion de productos a tallas
  SizeModel.hasMany(ProductsModel)
  ProductsModel.belongsTo(SizeModel)

  // relacion de productos a marcas
  BrandModel.hasMany(ProductsModel)
  ProductsModel.belongsTo(BrandModel)

  // relacion de productos a color
  ColorModel.hasMany(ProductsModel)
  ProductsModel.belongsTo(ColorModel)

  // relacion de tallas a detalle_tallas
  SizeModel.hasMany(Detail_sizeModel)
  Detail_sizeModel.belongsTo(SizeModel)

  // relacion de detalle_oferta a productos
  ProductsModel.hasMany(Offer_DetailModel)
  Offer_DetailModel.belongsTo(ProductsModel)

  // relacion de detalle_pedido a inventarios
  Requested_detaylModel.hasMany(InventoryModel)
  InventoryModel.belongsTo(Requested_detaylModel)

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
