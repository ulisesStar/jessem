var route = require('express').Router();
var x = require('../controladores/Imagenes');

route.route('/data/imagen')
        .get(x.read)
        .post(x.create);

route.route('/data/imagen/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/imagen/obtenerDeservicios/:idServicio')
        .get(x.obtenerDeservicios);

route.route('/data/imagen/obtenerDesubservicios/:idSubservicio')
        .get(x.obtenerDesubservicios);

route.route('/data/imagen/obtenerDeproyectos/:idProyecto')
        .get(x.obtenerDeproyectos);

route.route('/data/imagen/obtenerDetrabajadores/:idTrabajador')
        .get(x.obtenerDetrabajadores);
        

module.exports = route;

