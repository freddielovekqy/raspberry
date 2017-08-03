var mongoose = require('../dao/db');
var Schema = mongoose.Schema;

var OutsideSchema = new Schema({
    createDate: { type: Number, default: new Date().getTime() },
    temperature: { type: Number },
    humidity: { type: Number }
    // 未来需要根据天气API得到的结果，进行数据存储
});

module.exports.Outside = mongoose.model('Outside', OutsideSchema);