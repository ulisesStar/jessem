var fs = require("fs");

var modelos = [
    {   servicio : 'Trabajador', nombre : 'Trabajadores',    singular : 'trabajador',      plural : 'trabajadores'},
    {   servicio : 'Imagen', nombre : 'Imagenes',    singular : 'imagen',      plural : 'imagenes'},
    {   servicio : 'Subservicio', nombre : 'Subservicios',    singular : 'subservicio',      plural : 'subservicios'},
    {   servicio : 'Servicio', nombre : 'Servicios',    singular : 'servicio',      plural : 'servicios'},
    {   servicio : 'Proyecto', nombre : 'Proyectos',    singular : 'proyecto',      plural : 'proyectos'}
]


var relaciones = fs.createWriteStream("servicios.js")

modelos.forEach(modelo =>
relaciones.write(
`
app.service('` + modelo.servicio +  `', function() {

    this.crear = ` + modelo.singular +  ` => axios.post('/data/` + modelo.singular +  `', ` + modelo.singular +  `)
    this.obtener = () => axios('/data/` + modelo.singular +  `')
    this.one = id => axios('/data/` + modelo.singular +  `/' + id)
    this.editar = ` + modelo.singular +  ` => axios.put('/data/` + modelo.singular +  `/' + ` + modelo.singular +  `.id, ` + modelo.singular +  `)
    this.eliminar = id => axios.delete('/data/` + modelo.singular +  `/' + id)
    

});
`)
)

relaciones.end()
