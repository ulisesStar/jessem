var route = require('express').Router();
var x = require('../controladores/Servicios');

route.route('/data/servicio')
        .get(x.read)
        .post(x.create);

route.route('/data/servicio/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/servicio/paginacion/:Items/:Pagina')
		.get(x.paginacion);

route.route('/data/servicio/subservicios/:idSubservicio')
		.put(x.agregarSub);

route.route('/data/servicio/obtenerSub/:idServicio')
		.get(x.obtenerSub)


module.exports = route;

