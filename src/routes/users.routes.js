const { Router } = require("express")

const UsersController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const usersRouter = Router()

const usersController = new UsersController()

usersRouter.post("/", usersController.create)
usersRouter.put("/", ensureAuthenticated, usersController.update)

module.exports = usersRouter
