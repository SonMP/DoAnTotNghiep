'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('LichTrinh', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            soLuongHienTai: {
                type: Sequelize.INTEGER
            },
            soLuongToiDa: {
                type: Sequelize.INTEGER
            },
            ngayHen: {
                type: Sequelize.DATE
            },
            khungThoiGian: {
                type: Sequelize.STRING
            },
            maBacSi: {
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
        await queryInterface.dropTable('LichTrinh');
    }
};