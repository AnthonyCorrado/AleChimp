var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var beerSchema = new Schema({
    name: String,
    style: String,
    ABV: Number,
    brewery: String,
    breweryLocation: String,
    comment: String
});

module.exports = mongoose.model('beers', beerSchema);