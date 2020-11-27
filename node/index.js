const express = require('express');
const Message = require('./models/message');

const app = express();

app.get('/message', (req, res, next) => {
  res.send('hello from node, nodemon!');
});

app.get('/mongo/message', (req, res, next) => {
  const message = new Message({ message: 'message from mongo!' });
  message.save().then(() => {
    Message.findOne({ _id: message._id }).then((msg) => {
      res.send(msg);
    });
  });
});

app.listen(5000);
