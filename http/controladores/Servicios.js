const db = require('../relaciones');
var { servicio, subservicio} = db;
var _ = require('lodash')

var ex = module.exports = {};

ex.create = (req, res, next) => servicio.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => servicio.findById(req.params.id)
    .then(servicio => servicio.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => servicio.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    servicio.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    servicio.findAll()
    .then(response => res.status(200).jsonp(response))

ex.paginacion = (req, res, next) =>{
	var items = req.params.Items;
	var pagina = req.params.Pagina;
	servicio.findAndCountAll({order:['nombre']})
	.then(result => { const response = new Object({
		pagina:Math.round(result.count/items),
		items: _.chunk(result.rows, items)[pagina-1]});
		res.status(200).jsonp(response);})}

ex.agregarSub = (req, res, next) => subservicio.update(req.body, { where: { id: req.params.idSubservicio } } )
    .then(response => res.status(200).jsonp(response))

ex.obtenerSub = (req, res, next) => subservicio.findAll( { where: { idServicio: req.params.idServicio } } )
    .then(result => res.status(200).json(result))

ex.Agregarproyecto = (req, res, next) => servicio.findById(req.params.idServicio)
    .then(servicio => servicio.addProyecto(req.params.idProyecto))
    .then(result => res.status(200).json(result))

ex.eliminarProyecto = (req, res, next) => servicio.findById(req.params.idServicio)
    .then(servicio => servicio.removeProyecto(req.params.idProyecto))
    .then(result => res.status(200).json(result))
