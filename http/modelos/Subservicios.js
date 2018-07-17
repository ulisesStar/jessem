module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('subservicios', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'subservicio',
    		plural: 'subservicios'
        }
	})

