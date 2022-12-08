const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, config.llave, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    error: 'Token inválido'
                });
            } else {
                res.decoded = decoded;
                next();
            }
        });
    } else {
        res.json({
            success: false,
            error: 'No se ha enviado token'
        });
    }
});

module.exports = rutasProtegidas;