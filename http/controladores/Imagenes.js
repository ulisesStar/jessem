const db = require('../relaciones');
var { imagen } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => imagen.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => imagen.findById(req.params.id)
    .then(imagen => imagen.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => imagen.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    imagen.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    imagen.findAll()
    .then(response => res.status(200).jsonp(response))

ex.obtenerDeservicios = (req, res, next) => imagen.findAll( { where: { idServicio: req.params.idServicio } } )
    .then(result => res.status(200).json(result))

ex.obtenerDesubservicios = (req, res, next) => imagen.findAll( { where: { idSubservicio: req.params.idSubservicio } } )
    .then(result => res.status(200).json(result))

ex.obtenerDeproyectos = (req, res, next) => imagen.findAll( { where: { idProyecto: req.params.idProyecto } } )
    .then(result => res.status(200).json(result))

ex.obtenerDetrabajadores = (req, res, next) => imagen.findAll( { where: { idTrabajador: req.params.idTrabajador } } )
    .then(result => res.status(200).json(result))