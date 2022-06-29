const { Router } = require("express");
const controller = require("../../controllers/repCommentProduct.controller");

const router = Router();

router.get("/", controller.getAll);

router.post("/", controller.create);

router.delete("/:id", controller.destroy);

router.put("/:id", controller.update);

module.exports = router;
