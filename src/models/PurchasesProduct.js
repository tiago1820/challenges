const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('PurchasesProduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_purchase: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quant: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        purchase_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, { timestamps: false });
};