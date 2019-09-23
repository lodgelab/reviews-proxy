const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use('/:property', express.static('public'));
app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));