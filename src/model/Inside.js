var mongoose = require('../dao/db');
var Schema = mongoose.Schema;

var InsideSchema = new Schema({
    createDate: { type: Number, default: new Date().getTime() },
    temperature: { type: Number },
    humidity: { type: Number }
});

module.exports.Inside = mongoose.model('Inside', InsideSchema);