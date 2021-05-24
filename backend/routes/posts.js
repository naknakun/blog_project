var express = require('express');
var router = express.Router();
var posts = require('../public/jsonfile/posts.json');

router.get('/', function (req, res, next) {
 res.send(posts)
});

// router.get('/:id', function (req, res, next) {
//  var id = parseInt(req.params.id, 10)
//  var movie = posts.filter(function (movie) {
//  return movie.id === id
//  });
//  res.send(movie)
// });

module.exports = router;