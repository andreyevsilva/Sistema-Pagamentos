const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditoSchema = require('./credito');
const debitoSchema = require('./debito')

const cicloDePagamentoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: {type:Number,min:1970,max:2100,required:true},
    credits:[creditoSchema],
    debits:[debitoSchema]
});

module.exports = restful.model('ciclo_pagamentos',cicloDePagamentoSchema);