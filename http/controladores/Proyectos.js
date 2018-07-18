const db = require('../relaciones');
var { proyecto } = db;
var _ = require('lodash')

var ex = module.exports = {};

ex.create = (req, res, next) => proyecto.create(req.body)
	.then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => proyecto.findById(req.params.id)
	.then(proyecto => proyecto.destroy())
	.then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => proyecto.update(req.body, { where: { id: req.params.id } } )
	.then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
	proyecto.findById(req.params.id)
	.then(response => res.status(200).jsonp(response))
	:
	proyecto.findAll()
	.then(response => res.status(200).jsonp(response))

ex.paginacion = (req, res, next) =>{
	var items = req.params.Items;
	var pagina = req.params.Pagina;
	proyecto.findAndCountAll({order:['nombre']})
	.then(result => { const response = new Object({
		pagina:Math.round(result.count/items),
		items: _.chunk(result.rows, items)[pagina-1]});
		res.status(200).jsonp(response);})}

ex.obtenerServicios = (req, res, next) => proyecto.findById(req.params.idProyecto)
    .then(proyecto => proyecto.getServicio())
    .then(result => res.status(200).json(result))