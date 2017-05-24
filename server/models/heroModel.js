var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: String,
  city: String,
  power: String
});

var Hero = mongoose.model('heros', heroSchema); // heros is the collection name

module.exports = Hero;
