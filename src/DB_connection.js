require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const UserModel = require('./models/User');
const PermissionGroupModel = require('./models/PermissionGroup');
const PermissionParamModel = require('./models/PermissionParam');
const InventoryModel = require('./models/Inventory');

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/myerp`,
    { logging: false, native: false }
);

UserModel(sequelize);
PermissionGroupModel(sequelize);
PermissionParamModel(sequelize);
InventoryModel(sequelize);

const { User } = sequelize.models;
const { PermissionGroup } = sequelize.models;
const { PermissionParam } = sequelize.models;
const { Inventory } = sequelize.models;

module.exports = {
    User,
    PermissionGroup,
    PermissionParam,
    Inventory,
    conn: sequelize,
};