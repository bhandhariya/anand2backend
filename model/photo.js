
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  
  title:{type:String,required:true},
  image:{type:String,required:true}
});

module.exports = mongoose.model('Photo', PhotoSchema);