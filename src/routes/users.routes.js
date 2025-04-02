const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();

const usersControler = new UsersController();

usersRoutes.post("/", usersControler.create);
usersRoutes.put("/:id", usersControler.update);

module.exports = usersRoutes;