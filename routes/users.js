var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');

router.post('/login', (req, res, next) => {
  if ((req.body.usuario === 'usuario' || req.body.email === 'usuario@gmail.com') && req.body.password === '123456') {
    const payload = {
      check: true
    };
    const token = jwt.sign(payload, config.llave, {
      expiresIn: 1440
    });

    res.json({
      success: true,
      data: token
    });
  } else {
    res.status(403).send({
      success: false,
      error: 'Usuario o contraseña incorrectos'
    });
  }
});

router.post('/register', (req, res, next) => {
  res.send({
    success: true
  });
});

module.exports = router;
