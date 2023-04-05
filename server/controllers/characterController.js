const model = require('../models/characterModel');

const characterController = {};

// character router: handles create button
characterController.createCharacter = (req,res,next) => {
  console.log(req.body); // we get our thing now!
  const {
    name,
    level,
    classtype,
    race,
    total_hp,
    current_hp,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    speed,
    initiative,
    armor_class} = req.body;

  model.Character.create({
    name, level, classtype,
    race, total_hp, current_hp, strength,
    dexterity, constitution, intelligence, wisdom,
    charisma, speed, initiative, armor_class
  }).then(result => res.locals.createCharacter = result)
    .catch(
      (err) => {
        return next(
          {
            log: 'Error caught in character creation MW',
            status: 400,
            message: {err: err}
          }
        );
      }
    );
  return next();
};

characterController.getCharacter = (req,res,next) => {
  
  model.Character.find({})
    .then((result) => {
      res.locals.getCharacters = result;
      console.log(res.locals.getCharacters);
    })
    .catch(
      (err) =>{
        return next(          
          {
            log: 'Error caught in character creation MW',
            status: 400,
            message: {err: err}
          });
      });
  return next();
};

characterController.updateCharacter = async (req,res,next) => {

  return next();
};

characterController.deleteCharacter = async (req,res,next) => {
  const {name} = req.body;
  model.Character.findOneAndDelete({name:name})
    .then((result) => {
      res.locals.deleteCharacter = result;
      console.log('deleted: ', res.locals.deleteCharacter);
    }).catch((err)=>{
      return next(
        {
          log: 'Error caught in character deletion MW',
          status: 400,
          message: {err: err} 
        }
      );
    });
  return next();
};
module.exports = characterController;