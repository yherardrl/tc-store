const router = require("express").Router();
const passport = require("passport");
const {
  userLogin,
  userLogout,
  userMe,
  googleAuth,
} = require("../controllers/usersController");

router.post("/login", passport.authenticate("local"), userLogin);
router.post("/logout", userLogout);
router.get("/me", userMe);

//google
//estoy parado en /api/auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/products");
});

module.exports = router;
