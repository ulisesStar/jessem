var route = require('express').Router();
var x = require('../controladores/Proyectos');

route.route('/data/proyecto')
        .get(x.read)
        .post(x.create);

route.route('/data/proyecto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/proyecto/paginacion/:Items/:Pagina')
		.get(x.paginacion);

route.route('/data/proyecto/proyectosXservicio/:idProyecto')
	.get(x.obtenerServicios);

module.exports = route;

