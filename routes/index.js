/* 
? host + /api/auth
  */

const { Router } = require("express");

const router = Router();

const { logIn, signIn, renew } = require("../controllers/auth");

router.post("/", logIn);
router.post("/register", signIn);
router.get("/renew", renew);

module.exports = router;
