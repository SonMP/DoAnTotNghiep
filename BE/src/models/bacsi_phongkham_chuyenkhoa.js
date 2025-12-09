'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BacSi_PhongKham_ChuyenKhoa extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    BacSi_PhongKham_ChuyenKhoa.init({
        maBacSi: DataTypes.INTEGER,
        maPhongKham: DataTypes.INTEGER,
        maChuyenKhoa: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'BacSi_PhongKham_ChuyenKhoa',
        tableName: 'BacSi_PhongKham_ChuyenKhoa',
        freezeTableName: true
    });
    return BacSi_PhongKham_ChuyenKhoa;
};