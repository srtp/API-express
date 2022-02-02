const { Router } = require("express");
const divisionController = require("../controllers/divisionController");
const router = Router();
//get all
router.route("/").get(divisionController.getAll);
// get by id
router.route("/:id").get(divisionController.getById);
//Create a book
router.route("/").post(divisionController.create);
//Delete
router.route("/:id").delete(divisionController.deleteById);
//Update
router.route("/:id").put(divisionController.updateById);

module.exports = router;
