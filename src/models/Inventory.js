const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Inventory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        quant: {
            type: DataTypes.INTEGER,
            allowNull: false, /*in /on */
        },
        min_quant: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });
}