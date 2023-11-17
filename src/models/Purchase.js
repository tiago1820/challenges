const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Purchase', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_purchase: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, { timestamps: false });
}