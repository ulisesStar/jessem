module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('servicios', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'servicio',
    		plural: 'servicios'
        }
	})

