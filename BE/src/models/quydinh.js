'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuyDinh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuyDinh.init({
    khoa: DataTypes.STRING,
    loai: DataTypes.STRING,
    giaTriEn: DataTypes.STRING,
    giaTriVi: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'QuyDinh',
    tableName: 'QuyDinh',
    freezeTableName: true
  });
  return QuyDinh;
};