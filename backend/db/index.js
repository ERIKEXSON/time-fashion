'use strict'
// config
const { db: config } = require('@time-fashion/config')

// controladores
const setupUser = require('./lib/users')
const setupBrand = require('./lib/brand')
const setupDetailSize = require('./lib/detail_size')
const setupOffer = require('./lib/offer')
const setupCountry = require('./lib/country')
const setupBill = require('./lib/bill')
const setupCity = require('./lib/city')
const setupCancellation = require('./lib/cancellation')
const setupDepartment = require('./lib/department')
const setupInventories = require('./lib/inventories')
const setupLine = require('./lib/line')
const setupOfferdetail = require('./lib/offer_detail')
const setupCompany = require('./lib/company')
const setupProducts = require('./lib/products')
const setupPaymentMethod = require('./lib/paymentMethod')

// modelos
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupOrderModel = require('./models/order.model')
const setupCancellationModel = require('./models/cancellation.model')
const setupBillModel = require('./models/bill.model')
const setupPayment_methodModel = require('./models/payment_method.model')
const setupOfferModel = require('./models/offer.model')
const setupOffer_detailModel = require('./models/offer_detail.model')
const setupRequested_detailModel = require('./models/requested_detayl.model')
const setupInventoriesModel = require('./models/inventories.model')
const setupSizeModel = require('./models/size.model')
const setupProductsModel = require('./models/products.model')
const setupBrandModel = require('./models/brand.model')
const setupLineModel = require('./models/line.model')
const setupDetail_sizeModel = require('./models/detail_size.model')
const setupCountryModel = require('./models/country.model')
const setupDepartmentModel = require('./models/department.model')
const setupCityModel = require('./models/city.model')
const setupCompanyModel = require('./models/company.model')

module.exports = async function () {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const OrderModel = setupOrderModel(config)
  const CancellationModel = setupCancellationModel(config)
  const BillModel = setupBillModel(config)
  const Payment_methodModel = setupPayment_methodModel(config)
  const OfferModel = setupOfferModel(config)
  const Offer_DetailModel = setupOffer_detailModel(config)
  const Requested_detaylModel = setupRequested_detailModel(config)
  const InventoriesModel = setupInventoriesModel(config)
  const SizeModel = setupSizeModel(config)
  const ProductsModel = setupProductsModel(config)
  const BrandModel = setupBrandModel(config)
  const LineModel = setupLineModel(config)
  const Detail_sizeModel = setupDetail_sizeModel(config)
  const CountryModel = setupCountryModel(config)
  const DepartmentModel = setupDepartmentModel(config)
  const CityModel = setupCityModel(config)
  const CompanyModel = setupCompanyModel(config)

  // relacion de usuario a pedidos
  UserModel.hasMany(OrderModel)
  OrderModel.belongsTo(UserModel)

  // relacion de pedidos a cancelacion
  OrderModel.hasMany(CancellationModel)
  CancellationModel.belongsTo(OrderModel)

  // relacion de pedidos a facturas
  BillModel.hasMany(OrderModel)
  OrderModel.belongsTo(BillModel)

  // relacion de  ofertas a detalle_oferta
  OfferModel.hasMany(Offer_DetailModel)
  Offer_DetailModel.belongsTo(OfferModel)

  // relacion de pedidos  a detalles_pedido
  OrderModel.hasMany(Requested_detaylModel)
  Requested_detaylModel.belongsTo(OrderModel)

  // relacion de inventario a talla
  SizeModel.hasMany(InventoriesModel)
  InventoriesModel.belongsTo(SizeModel)

  // relacion de inventario a personas
  UserModel.hasMany(InventoriesModel)
  InventoriesModel.belongsTo(UserModel)

  // relacion de inventario a productos
  ProductsModel.hasMany(InventoriesModel)
  InventoriesModel.belongsTo(ProductsModel)

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

  // relacion de tallas a detalle_tallas
  SizeModel.hasMany(Detail_sizeModel)
  Detail_sizeModel.belongsTo(SizeModel)

  // relacion de detalle_oferta a productos
  ProductsModel.hasMany(Offer_DetailModel)
  Offer_DetailModel.belongsTo(ProductsModel)

  // relacion de detalle_pedido a inventarios
  Requested_detaylModel.hasMany(InventoriesModel)
  InventoriesModel.belongsTo(Requested_detaylModel)

  // reacion de personas a paises
  CountryModel.hasMany(UserModel)
  UserModel.belongsTo(CountryModel)

  // relacion de paises a departamentos
  CountryModel.hasMany(DepartmentModel)
  DepartmentModel.belongsTo(CountryModel)

  // relacion de Departamentos a ciudades
  DepartmentModel.hasMany(CityModel)
  CityModel.belongsTo(DepartmentModel)

  // relacion de empresas a usuarios
  CompanyModel.hasMany(UserModel)
  UserModel.belongsTo(CompanyModel)

  // relacion personas a metodos de pago
  UserModel.hasMany(Payment_methodModel)
  Payment_methodModel.belongsTo(UserModel)

  await sequelize.authenticate()

  const User = setupUser(UserModel)
  const Brand = setupBrand(BrandModel)
  const DetailSize = setupDetailSize(Detail_sizeModel)
  const Offer = setupOffer(OfferModel)
  const Country = setupCountry(CountryModel)
  const Bill = setupBill(BillModel)
  const City = setupCity(CityModel)
  const Cancellation = setupCancellation(CancellationModel)
  const Department = setupDepartment(DepartmentModel)
  const Inventories = setupInventories(InventoriesModel)
  const Line = setupLine(LineModel)
  const Offerdetail = setupOfferdetail(Offer_DetailModel)
  const Company = setupCompany(CompanyModel)
  const Products = setupProducts(ProductsModel)
  const PaymentMethod = setupPaymentMethod(Payment_methodModel)
  return {
    async setup () {
      await sequelize.sync({ force: true })
    },
    User,
    Brand,
    DetailSize,
    Offer,
    Country,
    Bill,
    City,
    Cancellation,
    Department,
    Inventories,
    Line,
    Offerdetail,
    Company,
    Products,
    PaymentMethod
  }
}
