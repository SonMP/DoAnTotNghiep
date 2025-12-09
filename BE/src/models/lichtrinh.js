'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LichTrinh extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    LichTrinh.init({
        soLuongHienTai: DataTypes.INTEGER,
        soLuongToiDa: DataTypes.INTEGER,
        ngayHen: DataTypes.DATE,
        khungThoiGian: DataTypes.STRING,
        maBacSi: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'LichTrinh',
        tableName: 'LichTrinh',
        freezeTableName: true
    });
    return LichTrinh;
};