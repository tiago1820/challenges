const { DataTypes, STRING } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('InventoryHistory', {
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
            allowNull: false,

        },
        date_action: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });
}