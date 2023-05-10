const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc Get all goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//@desc Create all goals
//@route POST /api/goals
//@access private
const createGoal = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  // console.log("The user is: ", req.user);
  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Please enter a name");
  }
  try {
    const goal = await Goal.create({ name });
    res.status(201).json({ goal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

//@desc Get goal
//@route Get /api/goals/:id
//@access private
const getGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  res.status(200).json({ goal });
});

//@desc Update goal
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  // if (goal.user_id.toString() !== req.user.id.toString()) {
  //   res.status(403);
  //   throw new Error("Not authorized to update this goal");
  // }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updatedGoal });
});

//@desc Delete goal
//@route DELETE /api/goals/:id
//@access private

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  // if (goal.user_id.toString() !== req.user.id.toString()) {
  //   res.status(403);
  //   throw new Error("Not authorized to delete this goal");
  // }

  try {
    await Goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ goal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = { getGoals, createGoal, getGoal, updateGoal, deleteGoal };
