var conector = require('./conexion.js')
var trabajador  = require('./modelos/Trabajador')(conector);
var imagen  = require('./modelos/Imagenes')(conector);
var subservicio  = require('./modelos/Subservicios')(conector);
var servicio  = require('./modelos/Servicios')(conector);
var proyecto  = require('./modelos/Proyectos')(conector);
var item  = require('./modelos/Items')(conector);


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

item.belongsTo(subservicio, {foreignKey: 'idSubservicio', as: 'Subservicio'}); 
subservicio.hasMany(item, {foreignKey: 'idSubservicio', as: 'Item'});

proyecto.belongsToMany(servicio, { as: 'Servicio', through:'proyecto_servicio', foreignKey:'id_proyecto'});
servicio.belongsToMany(proyecto, { as: 'Proyecto', through:'proyecto_servicio', foreignKey:'id_servicio'});


module.exports.trabajador = trabajador;
module.exports.imagen = imagen;
module.exports.subservicio = subservicio;
module.exports.servicio = servicio;
module.exports.proyecto = proyecto;
module.exports.item = item;