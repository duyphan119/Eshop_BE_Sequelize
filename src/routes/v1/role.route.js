const { Router } = require("express");
const controller = require("../../controllers/role.controller");

const router = Router();

router.get("/", controller.getAll);

router.post("/", controller.create);

router.delete("/:id", controller.destroy);

router.put("/:id", controller.update);

module.exports = router;
