const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// add require router section when ready
const apiRouter = require('./routes/api');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname,'../src')));

// connect to database 
const MONGO_URI = 'mongodb+srv://nly714:asdf1212@cluster0.z58m58t.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'dnd_Characters'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

// mongoose.connection.once('open', () => console.log('Connected to database!'));

//
app.use('/', apiRouter);

// catch all route handler for unknown requests
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});
  
/**
   * start server
   */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;