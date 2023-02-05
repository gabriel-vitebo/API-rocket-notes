const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController.js")
const sessionsController = new SessionsController()

const sessionRoutes = Router()
sessionRoutes.post("/", sessionsController.create)

module.exports = sessionRoutes