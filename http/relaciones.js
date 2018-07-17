var conector = require('./conexion.js')
var trabajador  = require('./modelos/Trabajador')(conector);
var imagen  = require('./modelos/Imagenes')(conector);
var subservicio  = require('./modelos/Subservicios')(conector);
var servicio  = require('./modelos/Servicios')(conector);
var proyecto  = require('./modelos/Proyectos')(conector);


imagen.belongsTo(trabajador, {foreignKey: 'idTrabajador', as: 'Trabajador'}); 
trabajador.hasOne(imagen, {foreignKey: 'idTrabajador', as: 'Imagen'});

imagen.belongsTo(subservicio, {foreignKey: 'idSubservicio', as: 'Subservicio'}); 
subservicio.hasMany(imagen, {foreignKey: 'idSubservicio', as: 'Imagen'});

imagen.belongsTo(servicio, {foreignKey: 'idServicio', as: 'Servicio'}); 
servicio.hasMany(imagen, {foreignKey: 'idServicio', as: 'Imagen'});

imagen.belongsTo(proyecto, {foreignKey: 'idProyecto', as: 'Proyecto'}); 
proyecto.hasMany(imagen, {foreignKey: 'idProyecto', as: 'Imagen'});

subservicio.belongsTo(servicio, {foreignKey: 'idServicio', as: 'Subservicio'}); 
servicio.hasMany(subservicio, {foreignKey: 'idServicio', as: 'Subservicio'});

proyecto.belongsTo(servicio, {foreignKey: 'idServicio', as: 'Proyecto'}); 
servicio.hasMany(proyecto, {foreignKey: 'idServicio', as: 'Proyecto'});


module.exports.trabajador = trabajador;
module.exports.imagen = imagen;
module.exports.subservicio = subservicio;
module.exports.servicio = servicio;
module.exports.proyecto = proyecto;