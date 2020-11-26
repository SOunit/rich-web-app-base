const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('hello from node');
});

console.log('node works!');

app.listen(5000);
