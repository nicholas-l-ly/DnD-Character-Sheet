const express = require('express');

//character
const characterController = require('../controllers/characterController');

const router = express.Router();

// create character
router.post('/create', 
  characterController.createCharacter,
  (req,res) => res.status(200).json(res.locals.createCharacter)
);

// get character router
router.get('/load/:id',
  characterController.getCharacter,
  (req,res) => res.status(200).json(res.locals.getCharacters));
// router.get('/get',
//   characterController.getCharacter,
//   (req,res) => res.status(200).json(res.locals.getCharacters)
// );


router.delete('/delete',
  characterController.deleteCharacter,
  (req,res) => res.status(200).json(res.locals.deleteCharacter)
);

// router.patch('/',
//   characterController.updateCharacter,
//   (req,res) => res.sendStatus(200)
// );

module.exports = router;