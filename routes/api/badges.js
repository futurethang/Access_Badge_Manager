const router = require("express").Router();
const badgesController = require("../../controllers/badgesController");

// Matches with "/api/badges"
router.route("/")
  .get(badgesController.findAll)
  .post(badgesController.create);

// Matches with "/api/badges/:id"
router
  .route("/:id")
  .get(badgesController.findById)
  .put(badgesController.update)
  .delete(badgesController.remove);

module.exports = router;
