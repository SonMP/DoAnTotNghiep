'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DatLich extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DatLich.init({
        maTrangThai: DataTypes.STRING,
        maBacSi: DataTypes.INTEGER,
        maBenhNhan: DataTypes.INTEGER,
        ngayHen: DataTypes.STRING,
        khungThoiGian: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'DatLich',
        tableName: 'DatLich',
        freezeTableName: true
    });
    return DatLich;
};