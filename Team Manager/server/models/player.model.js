const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required:[true,"Name is required"] ,
        minlength:[2,"name should be at least 2 charectors"]},
        
    position: {
        type: String,
        required:[true,"Position is required"] ,
        minlength:[2,"position should be at least 2 charectors"]},
  },
  { timestamps: true }
);

module.exports.Player = mongoose.model("Player", PlayerSchema);
