module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('items', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'subservicio',
    		plural: 'subservicios'
        }
	})

