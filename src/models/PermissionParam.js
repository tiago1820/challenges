const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('PermissionParam', {
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
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false});
}