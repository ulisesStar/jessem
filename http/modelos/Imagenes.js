module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('imagenes', {
        imagen: Sequelize.TEXT,
    },{
    	name : {
    		singular: 'imagen',
    		plural: 'imagenes'
        }
	})
