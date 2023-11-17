const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Inventory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false, /*in /on */
        },
        date_action: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, { timestamps: false });
}