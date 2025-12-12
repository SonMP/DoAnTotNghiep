import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { where } from "sequelize";

const salt = bcrypt.genSaltSync(10);

const JWT_SECRET = "BENHVIEN_BINHDAN_SECRET_123";
const JWT_EXPIRES_IN = "3h";


let handleLoginService = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let user = await db.NguoiDung.findOne({
                attributes: ["id", "email", "maVaiTro", "matKhau"],
                where: { email: email },
                raw: true
            });

            if (!user) {
                userData.errCode = 1;
                userData.message = "Email không tồn tại!";
                return resolve(userData);
            }

            let check = await bcrypt.compare(password, user.matKhau);

            if (!check) {
                userData.errCode = 1;
                userData.message = "Sai mật khẩu!";
                return resolve(userData);
            }

            delete user.matKhau;

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    role: user.maVaiTro
                },
                JWT_SECRET,
                { expiresIn: JWT_EXPIRES_IN }
            );

            userData.errCode = 0;
            userData.message = "Đăng nhập thành công!";
            userData.user = user;
            userData.token = token;

            return resolve(userData);

        } catch (e) {
            return reject(e);
        }
    });
};

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';

            if (userId === 'ALL') {
                users = await db.NguoiDung.findAll({
                    attributes: {
                        exclude: 'matKhau'
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.NguoiDung.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: 'matKhau'
                    }
                })
            }
            resolve(users);
        } catch (e) {
            reject(e)
        }
    })
}

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e)
        }

    })
}

let checkEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.NguoiDung.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkEmail(data.email);
            if (check) {
                resolve({
                    errCode: 1,
                    message: "Email đã tồn tại!"
                })
            }
            else {
                let matKhau = await hashPassword(data.matKhau);
                await db.NguoiDung.create({
                    email: data.email,
                    matKhau: matKhau,
                    ho: data.ho,
                    ten: data.ten,
                    hinhAnh: data.hinhanh,
                    diaChi: data.diachi,
                    soDienThoai: data.sodienthoai,
                    gioiTinh: data.gioitinh === '1' ? true : false,
                    maVaiTro: data.vaitro,
                });
                resolve({
                    errCode: 0,
                    message: "Tạo người dùng thành công"
                });
            }

        } catch (e) {
            reject(e)
        }
    })
}

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: "Thiếu dữ liệu truyền vào!"
                })
            }
            let user = await db.NguoiDung.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.email = data.email;
                user.ten = data.ten;
                user.ho = data.ho;
                user.diaChi = data.diachi;
                user.soDienThoai = data.sodienthoai;
                user.gioiTinh = data.gioitinh;
                user.maVaiTro = data.vaitro;
                user.save();
                resolve({
                    errCode: 0,
                    message: "Cập nhật thành công!"
                });
            } else (
                resolve({
                    errCode: 1,
                    message: "Không tìm thấy người dùng!"
                })
            )

        } catch (e) {
            reject(e)
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.NguoiDung.findOne({
                where: { id: userId },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    message: "Người dùng không tồn tại!"
                })
            }
            await user.destroy();
            resolve({
                errCode: 0,
                message: "Xóa người dùng thành công!"
            })
        } catch (e) {
            reject(e)
        }

    })
}

module.exports = {
    handleLoginService: handleLoginService,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}