require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const UserModel = require('./models/User');
const PermissionGroupModel = require('./models/PermissionGroup');
const PermissionParamModel = require('./models/PermissionParam');
const InventoryModel = require('./models/Inventory');
const InventoryHistoryModel = require('./models/InventoryHistory');
const PurchaseModel = require('./models/Purchase');
const ClientModel = require('./models/Client');
const SaleModel = require('./models/Sale');
const SalesProductModel = require('./models/SalesProduct');
const PurchasesProductModel = require('./models/PurchasesProduct');
const CompanyModel = require('./models/Company');


const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/myerp`,
    { logging: false, native: false }
);

UserModel(sequelize);
PermissionGroupModel(sequelize);
PermissionParamModel(sequelize);
InventoryModel(sequelize);
InventoryHistoryModel(sequelize);
PurchaseModel(sequelize);
ClientModel(sequelize);
SaleModel(sequelize);
SalesProductModel(sequelize);
PurchasesProductModel(sequelize);
CompanyModel(sequelize);

const { User } = sequelize.models;
const { PermissionGroup } = sequelize.models;
const { PermissionParam } = sequelize.models;
const { Inventory } = sequelize.models;
const { InventoryHistory } = sequelize.models;
const { Purchase } = sequelize.models;
const { Client } = sequelize.models;
const { Sale } = sequelize.models;
const { SalesProduct } = sequelize.models;
const { PurchasesProduct } = sequelize.models;
const { Company } = sequelize.models;

// Relationships
User.belongsTo(Company, { foreignKey: 'id_company' });//N
Company.hasMany(User, { foreignKey: 'id_company' });//1

User.belongsTo(PermissionGroup, { foreignKey: 'id_group' });//N
PermissionGroup.hasMany(User, { foreignKey: 'id_group' });//1

PermissionGroup.belongsToMany(PermissionParam, { through: "permissionGroup_permissionParamModel" })
PermissionParam.belongsToMany(PermissionGroup, { through: "permissionGroup_permissionParamModel" })


module.exports = {
    User,
    PermissionGroup,
    PermissionParam,
    Inventory,
    InventoryHistory,
    Purchase,
    Client,
    Sale,
    SalesProduct,
    PurchasesProduct,
    Company,
    conn: sequelize,
};