var route = require('express').Router();
var x = require('../controladores/Subservicios');

route.route('/data/subservicio')
        .get(x.read)
        .post(x.create);

route.route('/data/subservicio/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/subservicio/paginacion/:Items/:Pagina')
		.get(x.paginacion);

module.exports = route;

