const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter your user id"],
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
