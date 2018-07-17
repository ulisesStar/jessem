module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('proyectos', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'proyecto',
    		plural: 'proyectos'
        }
	})

