const { response } = require("express");
const { Player } = require("../models/Player.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};
module.exports.createPlayer = (request, response) => {
  const { name ,position } = request.body;
  Player.create({
    name,
    position,
  })
  .then(Player => response.json(Player))
  .catch(err => response.status(400).json(err))
};
module.exports.getAllPlayers = (request, response) => {
    Player.find({})
      .then((Players) => response.json(Players))
      .catch((err) => response.json(err));
  };
  module.exports.getPlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
      .then((Player) => response.json(Player))
      .catch((err) => response.json(err));
  };
  module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({ _id: request.params.id }, request.body, 
      {new: true,runValidators: true}
    )
      .then((updatedPlayer) => response.json(updatedPlayer))
      .catch(err => response.status(400).json(err))
  };
  module.exports.deletePlayer =(request,response) =>{
      Player.deleteOne({_id:request.params.id})
          .then(deleteConfirmation => response.json(deleteConfirmation))
          .catch(err => response.status(400).json(err))
  }