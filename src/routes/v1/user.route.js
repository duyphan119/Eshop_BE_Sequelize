const { Router } = require("express");
const controller = require("../../controllers/user.controller");

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/", controller.create);

router.delete("/:id", controller.destroy);

router.put("/change-password/:id", controller.changePassword);
router.put("/:id", controller.update);

module.exports = router;
