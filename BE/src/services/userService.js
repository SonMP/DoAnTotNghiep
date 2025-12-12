import db from "../models";
import bcrypt from "bcryptjs";

let handleLoginService = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkEmail(email);
            if (isExist) {
                let user = await db.NguoiDung.findOne({
                    attributes: ['email', 'maVaiTro', 'matKhau'],
                    where: { email: email },
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compare(password, user.matKhau)
                    if (check) {
                        userData.errCode = 0;
                        userData.message = "OK";
                        delete user.matKhau;
                        userData.user = user;
                    } else {
                        userData.errCode = 1;
                        userData.message = "Sai mật khẩu"
                    }
                } else {
                    userData.errCode = 1;
                    userData.message = "Không tìm thấy người dùng."
                }

            } else {
                userData.errCode = 1;
                userData.message = "Email không tồn tại!"
            }
            resolve(userData)
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
module.exports = {
    handleLoginService: handleLoginService

}