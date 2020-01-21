const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    value:{type:Number,min:0,required:true}
});

module.exports = creditoSchema;