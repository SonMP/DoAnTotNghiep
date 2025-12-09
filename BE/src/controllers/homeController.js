import { json } from "body-parser";
import db from "../models/index";

let getHomePage = async (req, res) => {
    let data = await db.NguoiDung.findAll();
    console.log(data);
    return res.render('homePage.ejs', { data: JSON.stringify(data) });
}

module.exports = {
    getHomePage: getHomePage,
}