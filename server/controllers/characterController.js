const models = require('../models/characterModel');
const characterController = {};

// character router: handles create button
characterController.createCharacter = async (req,res,next) => {
  return next();
};

characterController.getCharacter = async (req,res,next) => {
  await console.log('getchar cont');
  res.locals.character = {hi:'hello'};
  return next();
};

characterController.deleteCharacter = async (req,res,next) => {
  return next();
};

characterController.updateCharacter = async (req,res,next) => {
  return next();
};
module.exports = characterController ;