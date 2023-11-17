const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('SalesProduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_sale: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quant: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sale_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    })
}