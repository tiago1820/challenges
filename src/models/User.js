const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        group: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });
};