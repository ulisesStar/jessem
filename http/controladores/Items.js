const db = require('../relaciones');
var { item } = db;
var _ = require('lodash')

var ex = module.exports = {};

ex.create = (req, res, next) => item.create(req.body)
	.then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => item.findById(req.params.id)
	.then(item => item.destroy())
	.then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => item.update(req.body, { where: { id: req.params.id } } )
	.then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
	item.findById(req.params.id)
	.then(response => res.status(200).jsonp(response))
	:
	item.findAll()
	.then(response => res.status(200).jsonp(response))

ex.obtenerDeSubservicios = (req, res, next) => item.findAll( { where: { idSubservicio: req.params.idSubservicio } } )
    .then(result => res.status(200).json(result))
