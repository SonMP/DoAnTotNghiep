'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('NguoiDung', [
      {
        email: 'admin@gmail.com',
        matKhau: '123456',
        ten: 'son',
        ho: 'admin',
        hinhanh: '',
        diaChi: '181/3',
        soDienThoai: '0987654321',
        gioiTinh: 1,
        maVaiTro: 'R1',
        maViTri: 'P0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
