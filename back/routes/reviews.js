const router = require("express").Router();
const {createReview} = require("../controllers/reviewsContoller")


router.route("/:productId")
.post(createReview)


module.exports = router;