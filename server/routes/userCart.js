const express = require("express");
const router = express.Router();
// const { protect } = require("../middleware/auth");

const { addCartItem, deleteCartItem } = require("../controllers/userCart");

router.route("/add").post(addCartItem);

router.route("/delete").delete(deleteCartItem);

module.exports = router;
