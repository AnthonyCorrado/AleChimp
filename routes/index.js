var express = require('express'),
    router = express.Router(),
    request = require('request'),
    Beer = require('../models/beer');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

(function() {
    'use strict';

    router.get('/beers', function(req, res) {

        Beer.find(function(err, beers) {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            res.send(beers);
        });
    });
})();

module.exports = router;
