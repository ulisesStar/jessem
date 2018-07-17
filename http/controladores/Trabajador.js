const db = require('../relaciones');
var { trabajador } = db;
var _ = require('lodash')

var ex = module.exports = {};

ex.create = (req, res, next) => trabajador.create(req.body)
	.then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => trabajador.findById(req.params.id)
	.then(trabajador => trabajador.destroy())
	.then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => trabajador.update(req.body, { where: { id: req.params.id } } )
	.then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
	trabajador.findById(req.params.id)
	.then(response => res.status(200).jsonp(response))
	:
	trabajador.findAll()
	.then(response => res.status(200).jsonp(response))

ex.paginacion = (req, res, next) =>{
	var items = req.params.Items;
	var pagina = req.params.Pagina;
	trabajador.findAndCountAll({order:['nombre']})
	.then(result => { const response = new Object({
		pagina:Math.round(result.count/items),
		items: _.chunk(result.rows, items)[pagina-1]});
		res.status(200).jsonp(response);})}
