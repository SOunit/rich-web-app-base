const express = require('express');
const Message = require('./models/message');

const app = express();

app.get('/message', (req, res, next) => {
  res.send('hello from node, nodemon!');
});

app.listen(5000);
