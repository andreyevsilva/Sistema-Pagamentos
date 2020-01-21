const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/mymoney',{useUnifiedTopology: true, useNewUrlParser: true });


mongoose.Error.messages.general.required = "O Atributo '{PATH}' é Obrigatório";