// message.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const message = require('./routes/messages.route.js');

/* GET ALL messageS */
router.get('/', function(req, res, next) {
  message.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE message BY ID */
router.get('/:id', function(req, res, next) {
  message.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE message */
router.post('/', function(req, res, next) {
  message.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE message */
router.put('/:id', function(req, res, next) {
  message.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE message */
router.delete('/:id', function(req, res, next) {
  message.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
