/* 
? host + /api/auth
  */

const { Router } = require("express");
const { check } = require("express-validator");

const router = Router();

const { logIn, signIn, renew } = require("../controllers/auth/auth-controller");

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
  ],
  logIn
);

router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 }),
  ],
  signIn
);
router.get("/renew", renew);

module.exports = router;
