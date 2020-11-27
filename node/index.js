const express = require('express');
const app = express();

app.get('/message', (req, res, next) => {
  res.send('hello from node, nodemon!');
});

app.listen(5000);
