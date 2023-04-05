const express = require('express');

//character
const characterController = require('../controllers/characterController');

const router = express.Router();

// create character
router.post('/create', 
  characterController.createCharacter,
  (req,res) => res.status(200).json(res.locals.test)
);

// may have to use a req.params to change to id name later and route to character but first not yet
router.get('/', 
  characterController.createCharacter,
  (req,res) => res.status(200).json(res.locals.test)
);

router.delete('/',
  characterController.deleteCharacter,
  (req,res) => res.status(200)

);

router.patch('/',
  characterController.updateCharacter,
  (req,res) => res.status(200)
);

module.exports = router;