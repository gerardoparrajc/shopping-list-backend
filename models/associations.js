const ListasCompra = require('./listas-compra');
const ListaCompra = require('./lista-compra');
const db = require('../config/db');

ListasCompra.hasMany(ListaCompra);
ListaCompra.belongsTo(ListasCompra);

db.sync();