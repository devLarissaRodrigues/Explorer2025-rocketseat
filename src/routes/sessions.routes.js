const { Router } = require("express");
const SessionsController = require("../controllers/SessionsController");
const SessionsRoutes = new Router();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;