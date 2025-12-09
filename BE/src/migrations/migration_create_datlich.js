'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('DatLich', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            maTrangThai: {
                type: Sequelize.STRING
            },
            maBacSi: {
                type: Sequelize.INTEGER
            },
            maBenhNhan: {
                type: Sequelize.INTEGER
            },
            ngayHen: {
                type: Sequelize.DATE
            },
            khungThoiGian: {
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
        await queryInterface.dropTable('DatLich');
    }
};