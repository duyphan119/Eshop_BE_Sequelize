const { Router } = require("express");
const controller = require("../../controllers/productUser.controller");

const router = Router();

router.get("/product", controller.getByProduct);
router.get("/user", controller.getByUser);

router.post("/", controller.create);

router.delete("/:id", controller.destroy);
router.delete("/", controller.destroyByProductAndUser);

router.put("/:id", controller.update);

module.exports = router;
