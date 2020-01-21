const express = require('express');

module.exports = function(server){

    //Definir URL para todas as Rotas
    const router = express.Router()
    server.use('/api',router)

    //Rotas do ciclo de pagamento
    const cicloDePagamento = require('../api/ciclopagamento/cicloDePagamentoService');
    cicloDePagamento.register(router,'/billingCycles')
}