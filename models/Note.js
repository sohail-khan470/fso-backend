const mongoose = require("mongoose");

// const noteSchema = new mongoose.Schema(
//   {
//     content: String,
//     important: Boolean,
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   { timestamps: true }
// );

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 5,
    },
    important: Boolean,

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
