'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('BacSi_PhongKham_ChuyenKhoa', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            maBacSi: {
                type: Sequelize.INTEGER
            },
            maPhongKham: {
                type: Sequelize.INTEGER
            },
            maChuyenKhoa: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('BacSi_PhongKham_ChuyenKhoa');
    }
};