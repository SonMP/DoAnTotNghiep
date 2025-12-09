'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NguoiDung.init({
    email: DataTypes.STRING,
    matKhau: DataTypes.STRING,
    ho: DataTypes.STRING,
    ten: DataTypes.STRING,
    hinhAnh: DataTypes.STRING,
    diaChi: DataTypes.STRING,
    soDienThoai: DataTypes.STRING,
    gioiTinh: DataTypes.BOOLEAN,
    maVaiTro: DataTypes.STRING,
    maViTri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NguoiDung',
    tableName: 'NguoiDung',
    freezeTableName: true
  });
  return NguoiDung;
};