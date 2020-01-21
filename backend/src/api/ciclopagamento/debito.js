const restful = require('node-restful');
const mongoose = restful.mongoose;

const debitoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    value:{type:Number,min:0,required:true},
    status:{type:String,required:false,uppercase:true,
    enum:['PAGO','PENDENTE','AGENDADO']}
});

module.exports = debitoSchema;