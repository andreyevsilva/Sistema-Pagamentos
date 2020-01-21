const cicloDePagamento = require('./cicloDePagamento');

const errorHandler = require('../error/errorhandler');

cicloDePagamento.methods(['get', 'post', 'put', 'delete']);

/**
 * usado para manter as regras do Schema quando ocorre uma atualização (PUT)
 * 
 * new:true para sempre retorna objeto novo.
 * runValidators:true aplicar as validações
 */
cicloDePagamento.updateOptions({ new: true, runValidators: true });

//Middleware para tratamento de erros após os methods http
cicloDePagamento.after('post',errorHandler).after('put',errorHandler);


cicloDePagamento.route('count', (req, res, next) => {
    cicloDePagamento.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    })
});

cicloDePagamento.route('summary', (req, res, next) => {
    cicloDePagamento.aggregate([{
        $project: {credit: {$sum: "credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = cicloDePagamento;