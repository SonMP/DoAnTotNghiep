'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ChuyenKhoa extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ChuyenKhoa.init({
        ten: DataTypes.STRING,
        moTa: DataTypes.TEXT,
        hinhAnh: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'ChuyenKhoa',
        tableName: 'ChuyenKhoa',
        freezeTableName: true
    });
    return ChuyenKhoa;
};