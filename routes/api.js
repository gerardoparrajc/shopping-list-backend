var express = require('express');
var router = express.Router();
const listasCompraController = require('../controllers/ListasCompraController');

/* GET home page. */
router.get('/listas-compra', function(req, res, next) {
    listasCompraController.getListasCompra()
        .then((result) => {
            res.send({
                success: true,
                data: result
            });
        })
        .catch((error) => {
            res.send({
                success: false,
                error: 'Se ha producido un error al intentar obtener las Listas de la Compra'
            });
        });
    
    // res.send({
    //     hola: 'mundo'
    // });
});

router.get('/listas-compra/:id', async function (req, res, next) {
    listasCompraController.getListaCompra(req.params.id)
        .then((result) => {
            if (result) {
                res.send({
                    success: true,
                    data: result.get({plain: true})
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se han encontrado resultados'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        });
});

router.post('/listas-compra', function (req, res, next) {
    listasCompraController.saveListaCompra(req.body)
        .then((response) => {
            res.send({
                success: true,
                data: response.get({ plain: true })
            });
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.meessage
            })
        });
});

router.put('/listas-compra/:id', function (req, res, next) {
    const data = req.body;
    data.id = req.params.id;
    listasCompraController.updateListaCompra(data)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: data
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha encontrado la lista de la compra'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        })
});

router.delete('/listas-compra/:id', function (req, res, next) {
    listasCompraController.deleteListaCompra(req.params.id)
        .then((response) => {
            if (response) {
                res.send({
                    success: true,
                    data: response
                });
            } else {
                res.send({
                    success: false,
                    error: 'No se ha podido borrar la lista de la compra'
                });
            }
        })
        .catch((error) => {
            res.send({
                success: false,
                error: error.message
            });
        })
});

module.exports = router;