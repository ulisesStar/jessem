var route = require('express').Router();
var x = require('../controladores/Items');

route.route('/data/item')
        .get(x.read)
        .post(x.create);

route.route('/data/item/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);


route.route('/data/servicio/obtenerDeSubservicios/:idSubservicio')
        .get(x.obtenerDeSubservicios);


module.exports = route;

