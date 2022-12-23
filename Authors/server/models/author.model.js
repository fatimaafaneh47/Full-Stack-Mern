const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required:[true,"Name is required"] ,
        minlength:[3,"name should be at least 3 charectors"]},
  },
  { timestamps: true }
);

module.exports.Author = mongoose.model("Author", AuthorSchema);