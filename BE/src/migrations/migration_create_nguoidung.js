'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NguoiDung', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      matKhau: {
        type: Sequelize.STRING
      },
      ho: {
        type: Sequelize.STRING
      },
      ten: {
        type: Sequelize.STRING
      },
      hinhAnh: {
        type: Sequelize.STRING
      },
      diaChi: {
        type: Sequelize.STRING
      },
      soDienThoai: {
        type: Sequelize.STRING
      },
      gioiTinh: {
        type: Sequelize.BOOLEAN
      },
      maVaiTro: {
        type: Sequelize.STRING
      },
      maViTri: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NguoiDung');
  }
};