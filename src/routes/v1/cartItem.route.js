const { Router } = require("express");
const controller = require("../../controllers/cartItem.controller");
const { verifyToken } = require("../../middlewares/auth.middleware");
const router = Router();

router.post("/", verifyToken, controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
