import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

import verifyToken from "../middleware/authMiddleware";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage);
    router.get("/crud", homeController.displayCRUD);

    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.getCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);
    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);

    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", verifyToken, userController.handleGetAllUsers);
    router.post("/api/create-new-user", verifyToken, userController.handleCreateNewUser);
    router.put("/api/edit-user", verifyToken, userController.handleEditUser);
    router.delete("/api/delete-user", verifyToken, userController.handleDeleteUser);
    return app.use("/", router);
}

module.exports = initWebRoutes;