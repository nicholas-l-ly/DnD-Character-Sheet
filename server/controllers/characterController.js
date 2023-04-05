const models = require('../models/characterModel');

const characterController = {};

// character router: handles create button
characterController.createCharacter = async (req,res,next) => {
  console.log(req.body);
  res.locals.test = 'test';
  return next();
};

characterController.getCharacter = (req,res,next) => {
  console.log('help[ me');
  res.locals.test = 'test';
  return next();
};

characterController.deleteCharacter = async (req,res,next) => {
  return next();
};

characterController.updateCharacter = async (req,res,next) => {
  return next();
};
module.exports = characterController;