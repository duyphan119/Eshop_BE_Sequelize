const { Router } = require("express");
const controller = require("../../controllers/order.controller");
const {
  verifyTokenAndUser,
  verifyAdmin,
  verifyTokenUserAndAdmin,
} = require("../../middlewares/auth.middleware");

const router = Router();

router.get("/user/:userId", verifyTokenAndUser, controller.getByUser);
router.get("/:id", verifyAdmin, controller.getById);
router.get("/", controller.getAll);

router.post("/", controller.create);

router.delete("/:id", verifyTokenUserAndAdmin, controller.destroy);

router.put("/:id", controller.update);

module.exports = router;
