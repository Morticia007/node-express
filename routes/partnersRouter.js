const { request } = require('express');
const express = require('express');
const { get } = require('./campsiteRouter');

const partnersRouter = express.Router();

partnersRouter
  .get('/', function (req, res) {
    res.send('get partners list page');
  })
  .post('/', function (req, res) {
    res.send('post to partners page');
  })
  .put('/', function (req, res) {
    res.send('put request');
  })
  .delete('/', function (req, res) {
    res.send('delete request');
  });

partnersRouter
  .route('/:partnerId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.send(req.params.partnerId);
  })
  .post((req, res) => {
    res.send('This is a post request');
  })
  .put((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`,
    );
  })
  .delete((req, res) => {
    res.send('This is a delete request');
  });

module.exports = partnersRouter;
