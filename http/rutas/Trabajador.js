var route = require('express').Router();
var x = require('../controladores/Trabajador');

route.route('/data/trabajador')
        .get(x.read)
        .post(x.create);

route.route('/data/trabajador/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/trabajador/paginacion/:Items/:Pagina')
		.get(x.paginacion);

module.exports = route;

