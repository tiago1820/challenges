const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Client', {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_neighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        internal_obs: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, { timestamps: false });
}