const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controller/controller");

const authorizationMiddleware = require("../middleware/authorizedMiddleware");

router.route("/dashboard").get(authorizationMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
