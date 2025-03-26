const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();

const usersControler = new UsersController();

usersRoutes.post("/", usersControler.create);

module.exports = usersRoutes;