const express = require('express');
const router = express.Router();
const {getGoals, createGoal, getGoal, updateGoal, deleteGoal } = require("../controllers/goalControllers");
// const validateTokenHandler = require('../middleware/validateTokenHandler');

// router.use(validateTokenHandler);
router.route("/").get(getGoals).post(createGoal);
router.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);
module.exports = router;
