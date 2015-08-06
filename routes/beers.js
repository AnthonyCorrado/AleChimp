// var express = require('express'),
//     router = express.Router(),
//     request = require('request'),
//     Beer = require('../app/models/beer');

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// // grabs all available beers from database
// (function() {
//     'use strict';

//     router.get('/beers', function(req, res) {

//         Beer.find(function(err, beers) {
//             if (err) {
//                 console.log(err);
//                 return res.send(err);
//             }
//             isUpdated();
//             res.send(beers);
//         });
//     });
// })();

// module.exports = router;
