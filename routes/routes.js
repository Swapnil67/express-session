const express = require("express");
const authenticate = require("../middleware/authenticate");
const authController = require("../controller/auth");
const profileController = require("../controller/profile");

const router = express.Router();

router.post("/login", authController.login);

// !Authenticated Routes
router.use(authenticate);
router.get("/profile", profileController.profile);

module.exports = router;