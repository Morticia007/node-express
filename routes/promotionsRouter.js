const express = require('express');

const promotionsRouter = express.Router();

promotionsRouter
  .get('/', function (req, res) {
    res.send('GET promotions List Page');
  })
  .post('/', function (req, res) {
    res.send('POST to promotions Page');
  })
  .put('/', function (req, res) {
    res.send('PUT to promotions Page');
  })
  .delete('/', function (req, res) {
    res.send('DELETE to promotions Page');
  });

promotionsRouter
  .route('/:promotionId')
  .get((req, res) => {
    res.send(req.params.promotionId);
  })
  .post((req, res) => {
    res.send('This is a post request');
  })
  .put((req, res) => {
    res.send('This is a put request');
  })
  .delete((req, res) => {
    res.send('This is a delete request');
  });

module.exports = promotionsRouter;
