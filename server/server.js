const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

const port = 3000;

const breeds = require('./breeds.json')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static('./public'));

app.get('/breeds', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.json(breeds);
  next();
});

app.listen(port, () => { console.log('Serving at 3000') });
