'use strict';
const {
    Model
} = require('sequelize');
const datlich = require('./datlich');
module.exports = (sequelize, DataTypes) => {
    class LichSu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    LichSu.init({
        maBenhNhan: DataTypes.INTEGER,
        maBacSi: DataTypes.INTEGER,
        moTa: DataTypes.TEXT,
        taiLieu: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'LichSu',
        tableName: 'LichSu',
        freezeTableName: true
    });
    return LichSu;
};