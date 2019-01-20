const router = require("express").Router();
const badgeRoutes = require("./badges");

// Book routes
router.use("/badges", badgeRoutes);

module.exports = router;
