module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('trabajadores', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        puesto: Sequelize.STRING
    },{
    	name : {
    		singular: 'trabajador',
    		plural: 'trabajadores'
        }
	})

