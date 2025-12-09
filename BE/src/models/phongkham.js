'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PhongKham extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PhongKham.init({
        ten: DataTypes.STRING,
        diaChi: DataTypes.STRING,
        moTa: DataTypes.TEXT,
        hinhAnh: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'PhongKham',
        tableName: 'PhongKham',
        freezeTableName: true
    });
    return PhongKham;
};