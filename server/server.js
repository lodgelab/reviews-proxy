require('newrelic');
const proxy = require('express-http-proxy');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(compression());
app.use(morgan('tiny'));
app.use('/listings/:property', express.static('public'));
app.use(express.static('public'));

app.get('/api/listings/:property/reviews', proxy('http://52.53.213.247'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));