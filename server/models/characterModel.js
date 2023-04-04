const mongoose = require('mongoose');
// define character schema
const Schema = mongoose.Schema;
  
// create a character schema 
const characterSchema = new Schema({
  name: String,
  level: Number,
  class: String,
  race: String,
  total_hp: Number,
  current_hp: Number,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  speed: Number,
  initiative: Number,
  armor_class: Number
});

const Character = mongoose.model('character',characterSchema);
module.exports = {
  Character
};