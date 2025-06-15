const { Router } = require("express");
const TagsController = require("../controllers/TagsController");
const tagsRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;